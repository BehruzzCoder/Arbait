import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('FAQ ❓')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new FAQ (Admin only)' })
  @ApiOkResponse({ description: 'FAQ created successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized or access denied.' })
  create(@Req() req: Request, @Body() createFaqDto: CreateFaqDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.faqService.create(createFaqDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get all FAQs' })
  @ApiOkResponse({ description: 'List of FAQs.' })
  @Get()
  findAll() {
    return this.faqService.findAll();
  }

  @ApiOperation({ summary: 'Get a FAQ by id' })
  @ApiOkResponse({ description: 'FAQ found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a FAQ (Admin or Super Admin only)' })
  @ApiOkResponse({ description: 'FAQ updated successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized or access denied.' })
  update(@Req() req: Request, @Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.faqService.update(+id, updateFaqDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a FAQ (Admin or Super Admin only)' })
  @ApiOkResponse({ description: 'FAQ deleted successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized or access denied.' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.faqService.remove(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
