import { ApiProperty } from '@nestjs/swagger';
import { IsInt, isNumber, IsNumber, IsString, IsUUID } from 'class-validator';

export class OrderToolDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  tool_id: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  code: number
  
  @ApiProperty({ example: 2 })
  @IsInt()
  count: number;
}
