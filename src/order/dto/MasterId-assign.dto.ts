import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class MasterIdDto {
    @ApiProperty({ example: 1 })
    @IsNumber()
    master_id: number;
}