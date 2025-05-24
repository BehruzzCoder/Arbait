import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ProductToolDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  tool_id: number;
}
