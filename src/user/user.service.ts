import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { verifyOTPUserDto } from './dto/verifyotp-user.dto';
import { ResetPasswordUserDto } from './dto/reset.password-user.dto';
import { ResendOtpUserDto } from './dto/resend-otp.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
    private readonly jwt: JwtService,
  ) { }

  async register(createUserDto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existing) {
      throw new BadRequestException('Ushbu email orqali foydalanuvchi allaqachon mavjud');
    }

    const otp = await this.mail.generateOTP(createUserDto.email);
    await this.mail.sendOTP(createUserDto.email, otp);

    const hash = await bcrypt.hash(createUserDto.password, 10);
    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hash,
        isActive: false,
      },
    });

    return newUser;
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Email yoki parol notogri');
    }

    const token = this.jwt.sign({ id: user.id, role: user.role });
    await this.prisma.session.create({
      data: {
        user_id: user.id,
        token,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    return { token };
  }

  async registerYr()
  async verifyOtp(dto: verifyOTPUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }

    const isMatch = await this.mail.verifyOTP(dto.email, dto.otp);
    if (!isMatch) {
      throw new BadRequestException('OTP notogri yoki eskirgan');
    }

    await this.prisma.user.update({
      where: { email: dto.email },
      data: { isActive: true },
    });

    return { message: 'OTP muvaffaqiyatli tasdiqlandi'};
  }

  async resetPassword(data: ResetPasswordUserDto, user_id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }

    if (!data.newPassword || data.newPassword.length < 6) {
      throw new BadRequestException('Parol kamida 6 ta belgidan iborat bolishi kerak');
    }

    const hash = await bcrypt.hash(data.newPassword, 10);
    await this.prisma.user.update({
      where: { id: user_id },
      data: { password: hash },
    });

    return { message: 'Parol muvaffaqiyatli yangilandi' };
  }

  async resendOtp(data: ResendOtpUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }

    if (user.isActive) {
      throw new BadRequestException('Foydalanuvchi allaqachon aktivlangan');
    }

    const otp = await this.mail.generateOTP(data.email);
    await this.mail.sendOTP(data.email, otp);

    return { message: 'OTP qaytadan yuborildi' };
  }
  async getSessions(user_id: number) {
    const sessions = await this.prisma.session.findMany({
      where: { user_id },
      orderBy: { createdAt: 'desc' },
    });

    return { sessions };
  }

  async deleteSession(user_id: number, sessionId: number) {
    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
    });

    if (!session || session.user_id !== user_id) {
      throw new NotFoundException('Session topilmadi yoki ruxsat yoq');
    }

    await this.prisma.session.delete({
      where: { id: sessionId },
    });

    return { message: 'Session ochirildi' };
  }

}
  