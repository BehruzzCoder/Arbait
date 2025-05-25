import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createPartnerDto: CreatePartnerDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.partnersService.create(createPartnerDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.partnersService.update(+id, updatePartnerDto);
    } else {
      throw new ForbiddenException("Acess denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.partnersService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
}
