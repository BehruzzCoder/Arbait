import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags("Region 🌍")
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new region (Admin only)' })
  @ApiResponse({ status: 201, description: 'Region successfully created', type: CreateRegionDto })
  @ApiResponse({ status: 403, description: 'Access denied' })
  create(@Req() req: Request, @Body() createRegionDto: CreateRegionDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.regionService.create(createRegionDto);
    } else {
      throw new ForbiddenException("Access denied");
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all regions' })
  @ApiResponse({ status: 200, description: 'List of regions returned', type: [CreateRegionDto] })
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a region by ID' })
  @ApiParam({ name: 'id', description: 'Region ID', type: Number })
  @ApiResponse({ status: 200, description: 'Region found', type: CreateRegionDto })
  @ApiResponse({ status: 404, description: 'Region not found' })
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a region by ID (Admin or Super Admin only)' })
  @ApiParam({ name: 'id', description: 'Region ID', type: Number })
  @ApiResponse({ status: 200, description: 'Region updated successfully', type: UpdateRegionDto })
  @ApiResponse({ status: 403, description: 'Access denied' })
  @ApiResponse({ status: 404, description: 'Region not found' })
  update(@Req() req: Request, @Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.regionService.update(+id, updateRegionDto);
    } else {
      throw new ForbiddenException("Access denied");
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a region by ID (Admin or Super Admin only)' })
  @ApiParam({ name: 'id', description: 'Region ID', type: Number })
  @ApiResponse({ status: 200, description: 'Region deleted successfully' })
  @ApiResponse({ status: 403, description: 'Access denied' })
  @ApiResponse({ status: 404, description: 'Region not found' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.regionService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied");
    }
  }
}
