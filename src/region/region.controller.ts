import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createRegionDto: CreateRegionDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.regionService.create(createRegionDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.regionService.update(+id, updateRegionDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN){
      return this.regionService.remove(+id);
    }else{
      throw new ForbiddenException("Access denied")
    }
  }
}
