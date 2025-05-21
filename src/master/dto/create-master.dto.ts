import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsBoolean,
    IsNumber,
    IsOptional,
    IsNotEmpty,
    IsPhoneNumber,
    Min,
    Max,
    MinLength,
    MaxLength,
    IsUrl,
} from "class-validator";

export class CreateMasterDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty()
    @IsPhoneNumber('UZ')
    @IsString()
    phone: string;

    @ApiProperty()
    @IsBoolean()
    isActive: boolean;

    @ApiProperty()
    @IsNumber()
    @Min(1950)
    @Max(new Date().getFullYear())
    year: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    job: string;

    @ApiProperty()
    @IsNumber()
    @Min(1)
    minWorkingHours: number;

    @ApiProperty()
    @IsNumber()
    level_id: number;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    price_daily: number;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    price_hourly: number;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    experience: number;

    @ApiProperty()
    @IsBoolean()
    tools: boolean;

    @ApiProperty()
    @IsString()
    image: string;

    @ApiProperty()
    @IsString()
    @MinLength(10)
    @MaxLength(1000)
    about: string;
}
