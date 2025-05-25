import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty()
    @IsString()
    message:string
    @ApiProperty()
    @IsNumber()
    order_id:number
}
