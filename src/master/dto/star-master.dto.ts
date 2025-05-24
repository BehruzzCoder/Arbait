import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class StarMasterDto {
    @ApiProperty()
    @IsNumber()
    master_id: number

    @ApiProperty()
    @IsNumber()
    star: number
}