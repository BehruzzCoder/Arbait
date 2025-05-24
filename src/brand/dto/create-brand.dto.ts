import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBrandDto {
    @ApiProperty({ example: "nike" })
    @IsString()
    name: string
}
