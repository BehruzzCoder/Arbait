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
  ParseIntPipe,
} from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiOkResponse, ApiForbiddenResponse, ApiParam, ApiCreatedResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Showcase 🛠️')
@Controller('showcase')
export class ShowcaseController {
  constructor(private readonly showcaseService: ShowcaseService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new showcase' })
  @ApiCreatedResponse({ description: 'Showcase successfully created.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @Post()
  create(@Req() req: Request, @Body() createShowcaseDto: CreateShowcaseDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.showcaseService.create(createShowcaseDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get all showcases' })
  @ApiOkResponse({ description: 'List of showcases' })
  @Get()
  findAll() {
    return this.showcaseService.findAll();
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get showcase by ID' })
  @ApiOkResponse({ description: 'Showcase details' })
  @ApiParam({ name: 'id', description: 'Showcase ID', type: Number })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.showcaseService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update a showcase' })
  @ApiOkResponse({ description: 'Showcase successfully updated.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @ApiParam({ name: 'id', description: 'Showcase ID', type: Number })
  @Patch(':id')
  update(@Req() req: Request, @Param('id', ParseIntPipe) id: number, @Body() updateShowcaseDto: UpdateShowcaseDto) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.showcaseService.update(id, updateShowcaseDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete a showcase' })
  @ApiOkResponse({ description: 'Showcase successfully deleted.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @ApiParam({ name: 'id', description: 'Showcase ID', type: Number })
  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.showcaseService.remove(id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
