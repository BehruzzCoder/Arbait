import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ResetPasswordUserDto {
    @ApiProperty({ example: "newPassword" })
    @IsString({ message: "Parol matn bolishi kerak" })
    @IsNotEmpty({ message: "Yangi parol bosh bolmasligi kerak" })
    @MinLength(6, { message: "Yangi parol kamida 6 ta belgidan iborat bolishi kerak" })
    newPassword: string;
}
