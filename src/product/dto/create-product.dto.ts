import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: "santexnik" })
    @IsString()
    name_uz: string;

    @ApiProperty({ example: "santexnik" })
    @IsString()
    @IsOptional()
    name_ru: string;

    @ApiProperty({ example: "santexnik" })
    @IsString()
    @IsOptional()
    name_en: string;

    @ApiProperty({ example: true })
    @IsBoolean()
    isActive: boolean;

    @ApiProperty({ example: "img_url" })
    @IsString()
    image: string;

    @ApiProperty({ example: 2 })
    @IsNumber()
    minWorkingPrice: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    level_id: number;

    @ApiProperty({ example: 5000 })
    @IsNumber()
    price_hourly: number;

    @ApiProperty({ example: 30000 })
    @IsNumber()
    price_daily: number;

    @ApiProperty({ example: true })
    @IsBoolean()
    tools: boolean;
}
