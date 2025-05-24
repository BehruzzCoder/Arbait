import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class AddMastersToOrderDto {
  @ApiProperty({ example: 1, description: "Order ID" })
  @IsNumber()
  order_id: number;

  @ApiProperty({ example: [1, 2], description: "List of master IDs", type: [Number] })
  @IsArray()
  @IsNumber({}, { each: true })
  master_id: number[];
}