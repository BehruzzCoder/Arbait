import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { totp } from 'otplib';

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mirbosidovbehruz1@gmail.com',
                pass: 'gtja zaom uxxf ipsr',
            },
        });

        totp.options = { step: 300 };
    }

    async generateOTP(email: string): Promise<string> {
        return totp.generate(email);
    }

    async verifyOTP(email: string, otp: string): Promise<boolean> {
        return totp.check(otp, email);
    }

    async sendOTP(to: string, otp: string) {
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
        <h2 style="text-align: center; color: #1e88e5;">🔐 Arbait — Tasdiqlash kodingiz</h2>
        <p style="font-size: 16px; color: #333; text-align: center;">
          Assalomu alaykum! Quyidagi bir martalik kod (OTP) sizning Arbait hisobingizni tasdiqlash uchun kerak:
        </p>

        <div style="text-align: center; margin: 25px 0;">
            <span style="display: inline-block; font-size: 36px; font-weight: bold; letter-spacing: 6px; color: #1e88e5; background-color: #f1f8ff; padding: 15px 30px; border-radius: 10px;">
                ${otp}
            </span>
        </div>

        <p style="font-size: 14px; color: #666; text-align: center;">
          Ushbu kod faqat 5 daqiqa davomida amal qiladi. Kodni hech kim bilan ulashmang.
        </p>

        <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">
          Hurmat bilan,<br/>
          <strong>Arbait jamoasi</strong><br/>
          <a href="https://arbait.uz" target="_blank" style="color: #1e88e5; text-decoration: none;">arbait.uz</a>
        </p>
      </div>
    `;

        const info = await this.transporter.sendMail({
            from: '"Arbait 👨‍💻" <mirbosidovbehruz1@gmail.com>',
            to,
            subject: 'Arbait - Tasdiqlash kodi',
            text: `Sizning Arbait OTP kodingiz: ${otp}. Kod 5 daqiqa ichida amal qiladi.`,
            html: htmlContent,
        });

        console.log('OTP sent: %s', info.messageId);
        return info;
    }
}
