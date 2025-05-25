import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
  Query,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import {
  ApiBearerAuth,
  ApiQuery,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Brand 🏷️')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new brand (Admin only)' })
  @ApiOkResponse({ description: 'Brand created successfully.' })
  @ApiUnauthorizedResponse({ description: 'Access denied.' })
  create(@Req() req: Request, @Body() createBrandDto: CreateBrandDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.brandService.create(createBrandDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all brands with optional filters' })
  @ApiQuery({ name: 'name', required: false, description: 'Filter by brand name' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of items per page' })
  @ApiQuery({
    name: 'sortBy',
    enum: ['name'],
    required: false,
    description: 'Sort by field',
  })
  @ApiQuery({
    name: 'sortOrder',
    enum: ['asc', 'desc'],
    required: false,
    description: 'Sort order',
  })
  @ApiOkResponse({ description: 'List of brands returned successfully.' })
  findAll(@Query() query: any) {
    return this.brandService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get brand by ID' })
  @ApiOkResponse({ description: 'Brand found.' })
  @ApiNotFoundResponse({ description: 'Brand not found.' })
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update brand by ID (Admin and Super Admin only)' })
  @ApiOkResponse({ description: 'Brand updated successfully.' })
  @ApiUnauthorizedResponse({ description: 'Access denied.' })
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.brandService.update(+id, updateBrandDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete brand by ID (Admin and Super Admin only)' })
  @ApiOkResponse({ description: 'Brand deleted successfully.' })
  @ApiUnauthorizedResponse({ description: 'Access denied.' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.brandService.remove(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
