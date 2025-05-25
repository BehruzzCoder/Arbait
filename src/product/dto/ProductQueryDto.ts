import { IsOptional, IsString, IsBooleanString, IsNumberString, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProductQueryDto {
    @IsOptional()
    @IsString()
    @ApiPropertyOptional({ description: 'Search by product name' })
    search?: string;

    @IsOptional()
    @IsBooleanString()
    @ApiPropertyOptional({ description: 'Filter by active status (true/false)' })
    isActive?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Minimum hourly price' })
    minPriceHourly?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Maximum hourly price' })
    maxPriceHourly?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Minimum daily price' })
    minPriceDaily?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Maximum daily price' })
    maxPriceDaily?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Minimum quantity' })
    minQuantity?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Maximum quantity' })
    maxQuantity?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Minimum working price' })
    minWorkingPrice?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Maximum working price' })
    maxWorkingPrice?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Page number' })
    page?: string;

    @IsOptional()
    @IsNumberString()
    @ApiPropertyOptional({ description: 'Items per page' })
    limit?: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional({ description: 'Sort field', enum: ['name', 'price_hourly', 'price_daily', 'quantity', 'minWorkingPrice'] })
    orderBy?: string;

    @IsOptional()
    @IsIn(['asc', 'desc'])
    @ApiPropertyOptional({ description: 'Sort direction', enum: ['asc', 'desc'] })
    orderDirection?: 'asc' | 'desc';
}
