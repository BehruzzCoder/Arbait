import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class BrandToolDto {
  @ApiProperty({ example: "brands id" })
  @IsNumber()
  brand_id: number;
}
