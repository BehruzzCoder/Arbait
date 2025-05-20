import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  Req,
  UnauthorizedException,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { verifyOTPUserDto } from './dto/verifyotp-user.dto';
import { ResetPasswordUserDto } from './dto/reset.password-user.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { ResendOtpUserDto } from './dto/resend-otp.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto.email, loginUserDto.password);
  }

  @Post('verify-otp')
  verifyOtp(@Body() dto: verifyOTPUserDto) {
    return this.userService.verifyOtp(dto);
  }

  @Patch('reset-password')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  resetPassword(@Body() dto: ResetPasswordUserDto, @Req() req: Request) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    const userId = req.user.id;
    return this.userService.resetPassword(dto, userId);
  }
  @Post('resend-otp')
  resendOtp(@Body() data: ResendOtpUserDto) {
    return this.userService.resendOtp(data);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('sessions')
  getSessions(@Req() req) {
    return this.userService.getSessions(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Delete('sessions/:id')
  @ApiBearerAuth()
  deleteSession(@Req() req, @Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteSession(req.user.id, id);
  }

}