import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ProductLevelDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  level_id: number;
}
