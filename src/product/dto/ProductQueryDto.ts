import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString, Min, Max, IsIn } from 'class-validator';

export class ProductQueryDto {
    @ApiPropertyOptional({ description: 'Search by product name', example: 'drill' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ description: 'Filter by active status', example: true })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiPropertyOptional({ description: 'Minimum hourly price filter', example: 100 })
    @IsOptional()
    @IsNumber()
    minPriceHourly?: number;

    @ApiPropertyOptional({ description: 'Maximum hourly price filter', example: 1000 })
    @IsOptional()
    @IsNumber()
    maxPriceHourly?: number;

    @ApiPropertyOptional({ description: 'Minimum daily price filter', example: 1000 })
    @IsOptional()
    @IsNumber()
    minPriceDaily?: number;

    @ApiPropertyOptional({ description: 'Maximum daily price filter', example: 10000 })
    @IsOptional()
    @IsNumber()
    maxPriceDaily?: number;

    @ApiPropertyOptional({ description: 'Page number for pagination', example: 1, default: 1 })
    @IsOptional()
    @IsNumber()
    @Min(1)
    page?: number = 1;

    @ApiPropertyOptional({ description: 'Limit per page for pagination', example: 10, default: 10 })
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(100)
    limit?: number = 10;

    @ApiPropertyOptional({
        description: 'Sort by field',
        example: 'price_hourly',
        enum: ['name', 'price_hourly', 'price_daily', 'quantity', 'minWorkingPrice'],
    })
    @IsOptional()
    @IsString()
    @IsIn(['name', 'price_hourly', 'price_daily', 'quantity', 'minWorkingPrice'])
    orderBy?: string = 'name';

    @ApiPropertyOptional({
        description: 'Sort direction',
        example: 'asc',
        enum: ['asc', 'desc'],
    })
    @IsOptional()
    @IsString()
    @IsIn(['asc', 'desc'])
    orderDirection?: 'asc' | 'desc' = 'asc';
}
