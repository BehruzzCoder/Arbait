import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFaqDto {
    @ApiProperty({ required: true })
    @IsString()
    question: string
    @ApiProperty({ required: true })
    @IsString()
    answer: string
}
