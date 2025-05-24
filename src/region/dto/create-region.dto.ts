import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
  @ApiProperty({ example: "Toshkent", required: true })
  @IsNotEmpty({ message: "name bosh bo'lmasligi kerak" })
  @IsString({ message: "name faqat matn bo'lishi kerak" })
  name: string;
}