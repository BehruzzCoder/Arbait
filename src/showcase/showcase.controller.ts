import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('showcase')
export class ShowcaseController {
  constructor(private readonly showcaseService: ShowcaseService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createShowcaseDto: CreateShowcaseDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.showcaseService.create(createShowcaseDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.showcaseService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showcaseService.findOne(+id);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateShowcaseDto: UpdateShowcaseDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.showcaseService.update(+id, updateShowcaseDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.showcaseService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
}
