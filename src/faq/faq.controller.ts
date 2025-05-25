import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createFaqDto: CreateFaqDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.faqService.create(createFaqDto)
    } else {
      throw new ForbiddenException("Access  denied")
    }
  }

  @Get()
  findAll() {
    return this.faqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.faqService.update(+id, updateFaqDto)
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.faqService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
}
