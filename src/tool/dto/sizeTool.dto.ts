import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class SizeToolDto {
  @ApiProperty({ example: "sizes id" })
  @IsNumber()
  size_id: number;
}
