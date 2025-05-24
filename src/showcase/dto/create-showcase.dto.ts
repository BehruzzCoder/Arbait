import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNotEmpty } from "class-validator";

export class CreateShowcaseDto {
    @ApiProperty({ required: true, example: "Showcase nomi (uz)" })
    @IsString()
    @IsNotEmpty()
    name: string;


    @ApiProperty({ required: true, example: "https://example.com/image.jpg" })
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({ required: true, example: "https://example.com" })
    @IsString()
    @IsNotEmpty()
    link: string;
}
