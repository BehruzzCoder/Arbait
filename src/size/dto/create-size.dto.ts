import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSizeDto {
    @ApiProperty({ required: true, description: "Size nomi (name_ maydoni Prisma modelga mos)" })
    @IsString()
    name: string;
}
