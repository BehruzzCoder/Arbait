import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ example: "Toshkent", required: true })
    @IsNotEmpty({ message: "name_uz bosh bolmasligi kerak" })
    @IsString({ message: "name_uz faqat matn bolishi kerak" })
    name_uz: string;

    @ApiProperty({ example: "Ташкент", required: false })
    @IsOptional()
    @IsString({ message: "name_ru faqat matn bolishi kerak" })
    name_ru?: string;

    @ApiProperty({ example: "Tashkent", required: false })
    @IsOptional()
    @IsString({ message: "name_en faqat matn bolishi kerak" })
    name_en?: string;
}
