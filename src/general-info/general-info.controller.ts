import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { GeneralInfoService } from './general-info.service';
import { CreateGeneralInfoDto } from './dto/create-general-info.dto';
import { UpdateGeneralInfoDto } from './dto/update-general-info.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('general-info')
export class GeneralInfoController {
  constructor(private readonly generalInfoService: GeneralInfoService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createGeneralInfoDto: CreateGeneralInfoDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.generalInfoService.create(createGeneralInfoDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  findAll() {
    return this.generalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalInfoService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateGeneralInfoDto: UpdateGeneralInfoDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.generalInfoService.update(+id, updateGeneralInfoDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.generalInfoService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
}
