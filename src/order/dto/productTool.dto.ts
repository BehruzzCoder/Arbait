import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsUUID } from 'class-validator';

export class ProductToolDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  tool_id: number;

  @ApiProperty({ example: 5 })
  @IsInt()
  count: number;

  @ApiProperty({ example: 12345 })
  @IsNumber()
  code: number;
}

