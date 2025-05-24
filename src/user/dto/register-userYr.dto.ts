import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsString,
    IsEmail,
    IsOptional,
    IsInt,
    IsEnum,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'Foydalanuvchining toliq ismi va familiyasi' })
    @IsString()
    @MinLength(3)
    FullName: string;

    @ApiProperty({ example: '+998901234567', description: 'Foydalanuvchining telefon raqami, xalqaro formatda' })
    @IsString()
    phone: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'Foydalanuvchining email manzili' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'StrongPassword123', description: 'Foydalanuvchi paroli (kamida 6 ta belgidan iborat)' })
    @IsString()
    @MinLength(6)
    password: string;


    @ApiPropertyOptional({ example: 123456789, description: 'Soliq tolovchi identifikatsiya raqami (INN), agar mavjud bo‘lsa' })
    @IsOptional()
    @IsInt()
    INN?: number;

    @ApiPropertyOptional({ example: 987654321, description: 'Hisob raqam kodi (P/C), agar mavjud bo‘lsa' })
    @IsOptional()
    @IsInt()
    PC?: number;

    @ApiPropertyOptional({ example: 123456, description: 'Bank filiali kodi (MFO), agar mavjud bo‘lsa' })
    @IsOptional()
    @IsInt()
    MFO?: number;

    @ApiPropertyOptional({ example: 'Agrobank', description: 'Bank nomi, agar mavjud bo‘lsa' })
    @IsOptional()
    @IsString()
    BANK?: string;

    @ApiPropertyOptional({ example: 1234, description: 'OKED kodi — tashkilotning iqtisodiy faoliyat kod raqami' })
    @IsOptional()
    @IsInt()
    OKED?: number;

    @ApiPropertyOptional({ example: 'Toshkent shahri, Chilonzor tumani, Kocha nomi, uy raqami', description: 'Foydalanuvchining yashash yoki faoliyat yuritish manzili' })
    @IsOptional()
    @IsString()
    ADRESS?: string;

    @ApiProperty({ example: 1, description: 'Hudud identifikatori (region ID)' })
    @IsInt()
    region_id: number;
}
