import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags("Size 📏")
@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new size (Admin only)' })
  @ApiResponse({ status: 201, description: 'Size created successfully', type: CreateSizeDto })
  @ApiResponse({ status: 403, description: 'Access denied' })
  create(@Req() req: Request, @Body() createSizeDto: CreateSizeDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.sizeService.create(createSizeDto);
    } else {
      throw new ForbiddenException("Access denied");
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all sizes' })
  @ApiResponse({ status: 200, description: 'List of sizes returned' })
  findAll() {
    return this.sizeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a size by ID' })
  @ApiParam({ name: 'id', description: 'Size ID', type: Number })
  @ApiResponse({ status: 200, description: 'Size details returned' })
  @ApiResponse({ status: 404, description: 'Size not found' })
  findOne(@Param('id') id: string) {
    return this.sizeService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a size by ID (Admin or Super Admin only)' })
  @ApiParam({ name: 'id', description: 'Size ID', type: Number })
  @ApiResponse({ status: 200, description: 'Size updated successfully', type: UpdateSizeDto })
  @ApiResponse({ status: 403, description: 'Access denied' })
  update(@Req() req: Request, @Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.sizeService.update(+id, updateSizeDto);
    } else {
      throw new ForbiddenException("Access denied");
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a size by ID (Admin or Super Admin only)' })
  @ApiParam({ name: 'id', description: 'Size ID', type: Number })
  @ApiResponse({ status: 200, description: 'Size deleted successfully' })
  @ApiResponse({ status: 403, description: 'Access denied' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.sizeService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied");
    }
  }
}
