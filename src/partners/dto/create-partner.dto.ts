import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsUrl } from "class-validator";

export class CreatePartnerDto {
    @ApiProperty({ example: "MegaSoft LLC", required: true })
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @ApiProperty({
        example: "https://example.com/image.png",
        required: true
    })
    @IsString({ message: 'Image must be a string' })
    image: string;
}
