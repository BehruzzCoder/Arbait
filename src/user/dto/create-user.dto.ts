import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";
import {
  IsString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Length,
  IsPhoneNumber,
  IsNumber,
  IsPositive,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "John Doe", required: true })
  @IsString()
  @IsNotEmpty({ message: 'Full name is required' })
  FullName: string;

  @ApiProperty({ example: "+998901234567", required: true })
  @IsPhoneNumber('UZ', { message: 'Invalid Uzbek phone number format' })
  phone: string;

  @ApiProperty({ example: "john.doe@example.com", required: true })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({ example: "password123", required: true })
  @IsString()
  @Length(6, 32, { message: "Password must be between 6 and 32 characters" })
  password: string;

  @ApiProperty({ example: UserRole.USER_FIZ, required: true, enum: UserRole })
  @IsEnum(UserRole, { message: 'Role must be a valid UserRole' })
  role: UserRole;

  @ApiProperty({ example: 1, required: true })
  @IsNumber({}, { message: 'Region ID must be a number' })
  @IsPositive({ message: 'Region ID must be positive' })
  region_id: number;
}
