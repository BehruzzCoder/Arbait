import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePartnerDto {
    @ApiProperty({ required: true })
    @IsString()
    name_uz: string;
    @ApiProperty({ required: false })
    @IsString()
    name_ru?: string;
    @ApiProperty({ required: false })
    @IsString()
    name_en?: string;
    @ApiProperty({ required: true })
    @IsString()
    image: string;
}
