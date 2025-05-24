import { ApiProperty } from '@nestjs/swagger';
import { IsInt, isNumber, IsNumber, IsString, IsUUID } from 'class-validator';

export class OrderToolDto {
  @ApiProperty({ example: "tool's (UUID)" })
  @IsNumber()
  tool_id: number;

  @ApiProperty({ example: "tool_code" })
  @IsNumber()
  code: number
  
  @ApiProperty({ example: 2 })
  @IsInt()
  count: number;
}
