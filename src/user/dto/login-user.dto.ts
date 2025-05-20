import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginUserDto {
  @ApiProperty({ example: "user@gmail.com" })
  @IsEmail({}, { message: "Email notogri formatda kiritilgan" })
  @IsNotEmpty({ message: "Email bosh bolmasligi kerak" })
  email: string;

  @ApiProperty({ example: "password123" })
  @IsNotEmpty({ message: "Parol bosh bolmasligi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bolishi kerak" })
  password: string;
}
