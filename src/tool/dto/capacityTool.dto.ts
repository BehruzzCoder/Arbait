import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CapacityToolDto {
  @ApiProperty({ example: "capacitys id" })
  @IsNumber()
  capacity_id: number;
}
