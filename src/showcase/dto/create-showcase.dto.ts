import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateShowcaseDto {
    @ApiProperty({ required: true })
    @IsString()
    name_uz: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name_ru?: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    name_en?: string;
    @ApiProperty({ required: true })
    @IsString()
    image: string;
    @ApiProperty({ required: true })
    @IsString()
    link: string;
}
