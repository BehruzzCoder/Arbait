import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus, paymentType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderProductDto } from './orderProduct.dto';
import { OrderToolDto } from './orderTool.dto';

export class CreateOrderDto {
  @ApiProperty({ example: '14.32' })
  @IsNumber()
  lat: number;

  @ApiProperty({ example: '15.75' })
  @IsNumber()
  long: number;

  @ApiProperty({ example: '123 Main St, Tashkent, Uzbekistan' })
  @IsString()
  address: string;

  @ApiProperty({ example: '2023-10-01T12:00:00Z' })
  @IsDateString()
  date: string;

  @ApiProperty({ enum: paymentType, example: 'CASH' })
  @IsEnum(paymentType)
  paymentType: paymentType;

  @ApiProperty({ example: true })
  @IsBoolean()
  withDelivery: boolean;

  @ApiProperty({ example: 'Comment to deleivery' })
  @IsOptional()
  @IsString()
  commentToDelivery?: string;

  @ApiProperty({ type: [OrderProductDto] })
  @ValidateNested({ each: true })
  @Type(() => OrderProductDto)
  orderProducts?: OrderProductDto[];

  @ApiProperty({ type: [OrderToolDto] })
  @ValidateNested({ each: true })
  @Type(() => OrderToolDto)
  orderTools?: OrderToolDto[];
}
