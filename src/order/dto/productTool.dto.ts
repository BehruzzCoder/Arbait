import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, } from 'class-validator';

export class ProductToolDto {
  @ApiProperty({ example: 5 ,required:true})
  @IsNumber()
  count: number;

  @ApiProperty({ example: 12345 ,required:true})
  @IsNumber()
  code: number;

  @ApiProperty({ example: 1,required:true })
  @IsNumber()
  tool_id: number;

}

