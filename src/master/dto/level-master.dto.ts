import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, isNumber } from "class-validator";

export class LevelMasterDto {
    @ApiProperty({example: 1})
    @IsNumber()
    level_id:number
}