import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { ApiTags, ApiQuery, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Capacity 📦')
@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new capacity' })
  create(@Req() req: Request, @Body() createCapacityDto: CreateCapacityDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.capacityService.create(createCapacityDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all capacities with filter, search, pagination and sort' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiQuery({ name: 'order', required: false, enum: ['asc', 'desc'] })
  findAll() {
    return this.capacityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get capacity by ID' })
  findOne(@Param('id') id: string) {
    return this.capacityService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update capacity by ID' })
  update(@Req() req: Request, @Param('id') id: string, @Body() updateCapacityDto: UpdateCapacityDto) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.capacityService.update(+id, updateCapacityDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete capacity by ID' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.capacityService.remove(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
