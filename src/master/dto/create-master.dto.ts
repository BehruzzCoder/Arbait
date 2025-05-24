import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMasterDto {
  @ApiProperty({ example: 'Ivanov Ivan Ivanovich' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: '+998901234567' })
  @Matches(/^(\+998)[0-9]{9}$/, {
    message: 'Invalid Uzbek phone number',
  })
  phone: string;

  @ApiProperty({ example: '2000-01-01' })
  @IsDate()
  @Type(() => Date)
  year: Date;


  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  minWorkingHours: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  level_id: number;

  @ApiProperty({ example: 100 })
  @IsInt()
  @Min(0)
  price_hourly: number;

  @ApiProperty({ example: 2400 })
  @IsInt()
  @Min(0)
  price_daily: number;

  @ApiProperty({ example: 7 })
  @IsInt()
  @Min(0)
  experience: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsUrl()
  image: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  tools: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ example: 4.7, required: false, default: 0.5 })
  @IsOptional()
  @IsNumber()
  star?: number;

  @ApiProperty({ example: 'Professional worker with 7 years of experience' })
  @IsString()
  @MinLength(10)
  about: string;


}
