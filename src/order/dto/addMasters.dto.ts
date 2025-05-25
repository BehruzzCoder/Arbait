import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';
import { MasterIdDto } from './MasterId-assign.dto';
import { Type } from 'class-transformer';

export class AddMastersToOrderDto {
  @ApiProperty({ example: 1, description: "Order ID" })
  @IsNumber()
  order_id: number;

  @ApiProperty({ example: [1, 2], description: "List of master IDs", type: [Number] })
  @IsArray()
  @IsNumber({}, { each: true })
  @Type(() => MasterIdDto)
  master_id: number[];
}