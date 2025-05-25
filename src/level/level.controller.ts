import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createLevelDto: CreateLevelDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.levelService.create(createLevelDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  findAll() {
    return this.levelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.levelService.findOne(+id);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
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
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.levelService.remove(+id)
    }
  }
}
