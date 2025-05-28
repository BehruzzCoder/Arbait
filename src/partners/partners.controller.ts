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
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Partners 🌐')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new partner' })
  @ApiResponse({ status: 201, description: 'Partner successfully created.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Post()
  create(@Req() req: Request, @Body() createPartnerDto: CreatePartnerDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.partnersService.create(createPartnerDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }


  @ApiOperation({ summary: 'Get all partners' })
  @ApiResponse({ status: 200, description: 'List of partners returned.' })
  @Get()
  findAll() {
    return this.partnersService.findAll();
  }


  @ApiOperation({ summary: 'Get partner by ID' })
  @ApiResponse({ status: 200, description: 'Partner returned.' })
  @ApiResponse({ status: 404, description: 'Partner not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update a partner' })
  @ApiResponse({ status: 200, description: 'Partner successfully updated.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.partnersService.update(+id, updatePartnerDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete a partner' })
  @ApiResponse({ status: 200, description: 'Partner successfully deleted.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.partnersService.remove(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
