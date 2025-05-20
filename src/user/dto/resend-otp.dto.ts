import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class ResendOtpUserDto {
    @ApiProperty({ example: "user@example.com", required: true })
    @IsEmail({}, { message: "Email notogri formatda kiritilgan" })
    @IsNotEmpty({ message: "Email bosh bolmasligi kerak" })
    email: string;
}
