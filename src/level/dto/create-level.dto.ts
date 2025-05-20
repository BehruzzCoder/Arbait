import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateLevelDto {
    @ApiProperty({ example: "Junior", required: true })
    @IsString()
    name_uz: string;

    @ApiProperty({ example: "Младший", required: false })
    @IsOptional()
    @IsString()
    name_ru?: string;

    @ApiProperty({ example: "Junior", required: false })
    @IsOptional()
    @IsString()
    name_en?: string;
}
