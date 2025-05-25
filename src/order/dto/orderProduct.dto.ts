import {
  IsEnum,
  IsInt,
  IsNumber,
  isNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ProductToolDto } from './productTool.dto';

export enum workType {
  HOUR = 'HOUR',
  DAY = 'DAY',
}

export class OrderProductDto {
  @ApiProperty({ example: 1})
  @IsNumber()
  product_id: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  level_id: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  count: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  quantity: number;

  @ApiProperty({ enum: workType, example: 'HOUR' })
  @IsEnum(workType)
  @IsString()
  measure: workType;

  @ApiProperty({ type: [ProductToolDto], required: false })
  @ValidateNested({ each: true })
  @Type(() => ProductToolDto)
  tools?: ProductToolDto[];   
}

