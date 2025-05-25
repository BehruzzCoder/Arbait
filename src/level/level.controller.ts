import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags("Level 📊 ")
@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new level (Admin only)' })
  @ApiResponse({ status: 201, description: 'Level created successfully', type: CreateLevelDto })
  @ApiResponse({ status: 403, description: 'Access denied' })
  create(@Req() req: Request, @Body() createLevelDto: CreateLevelDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.levelService.create(createLevelDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get list of all levels' })
  @ApiResponse({ status: 200, description: 'List of levels returned' })
  findAll() {
    return this.levelService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a level by ID' })
  @ApiParam({ name: 'id', description: 'Level ID', type: Number })
  @ApiResponse({ status: 200, description: 'Level details returned' })
  @ApiResponse({ status: 404, description: 'Level not found' })
  findOne(@Param('id') id: string) {
    return this.levelService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a level by ID (Admin or Super Admin only)' })
  @ApiParam({ name: 'id', description: 'Level ID', type: Number })
  @ApiResponse({ status: 200, description: 'Level updated successfully', type: UpdateLevelDto })
  @ApiResponse({ status: 403, description: 'Access denied' })
  update(@Req() req: Request, @Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.levelService.update(+id, updateLevelDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a level by ID (Admin or Super Admin only)' })
  @ApiParam({ name: 'id', description: 'Level ID', type: Number })
  @ApiResponse({ status: 200, description: 'Level deleted successfully' })
  @ApiResponse({ status: 403, description: 'Access denied' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.levelService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
}
