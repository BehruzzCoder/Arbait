import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class CreateGeneralInfoDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsPhoneNumber()
    @IsString()
    phones: string;
    @ApiProperty()
    @IsString()
    links: string;
}
