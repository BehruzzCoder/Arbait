import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class verifyOTPUserDto {
  @ApiProperty({ example: "user@example.com" })
  @IsEmail({}, { message: "Email notogri kiritilgan" })
  @IsNotEmpty({ message: "Email bosh bolmasligi kerak" })
  email: string;

  @ApiProperty({ example: "123456" })
  @IsString({ message: "OTP matn ko‘rinishida bolishi kerak" })
  @IsNotEmpty({ message: "OTP bosh bolmasligi kerak" })
  @Length(6, 6, { message: "OTP 6 ta belgidan iborat bolishi kerak" })
  otp: string;
}
