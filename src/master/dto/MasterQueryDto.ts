import { IsOptional, IsString, IsNumber, IsIn, IsBooleanString } from 'class-validator';

export class MasterQueryDto {
    @IsOptional()
    @IsNumber()
    page?: number;

    @IsOptional()
    @IsNumber()
    limit?: number;

    @IsOptional()
    @IsString()
    sortBy?: string;

    @IsOptional()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc';

    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsString()
    job?: string;

    @IsOptional()
    @IsBooleanString()
    isActive?: string;

    @IsOptional()
    @IsBooleanString()
    tools?: string;

    @IsOptional()
    @IsNumber()
    level_id?: number;

    @IsOptional()
    @IsNumber()
    year?: number;

    @IsOptional()
    @IsNumber()
    experience?: number;
}
