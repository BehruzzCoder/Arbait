import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateCapacityDto {
    @ApiProperty({ required: true })
    @IsString()
    name_uz: string;

    @ApiPropertyOptional({ required: false })
    @IsOptional()
    @IsString()
    name_ru?: string;

    @ApiPropertyOptional()
    @IsString()
    name: string;
}
