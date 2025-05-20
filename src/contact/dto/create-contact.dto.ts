import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString } from "class-validator";

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    name: string
    @ApiProperty()
    @IsString()
    surName: string
    @ApiProperty()
    @IsString()
    @IsPhoneNumber()
    phone: string
    @ApiProperty()
    @IsString()
    adress: string
    @ApiProperty()
    @IsString()
    message: string
}
