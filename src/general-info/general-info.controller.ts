import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { GeneralInfoService } from './general-info.service';
import { CreateGeneralInfoDto } from './dto/create-general-info.dto';
import { UpdateGeneralInfoDto } from './dto/update-general-info.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags("general-info ℹ️")
@Controller('general-info')
export class GeneralInfoController {
  constructor(private readonly generalInfoService: GeneralInfoService) { }

  @ApiOperation({ summary: "Create new general info (Admin only)" })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 201, description: 'General info successfully created.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Post()
  create(@Req() req: Request, @Body() createGeneralInfoDto: CreateGeneralInfoDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.generalInfoService.create(createGeneralInfoDto);
    }
    throw new ForbiddenException("Access denied");
  }

  @ApiOperation({ summary: "Get all general info" })
  @ApiResponse({ status: 200, description: 'Return all general info.' })
  @Get()
  findAll() {
    return this.generalInfoService.findAll();
  }

  @ApiOperation({ summary: "Get general info by ID" })
  @ApiResponse({ status: 200, description: 'Return general info by id.' })
  @ApiResponse({ status: 404, description: 'General info not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalInfoService.findOne(+id);
  }

  @ApiOperation({ summary: "Update general info by ID (Admin, Super Admin)" })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'General info successfully updated.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateGeneralInfoDto: UpdateGeneralInfoDto) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.generalInfoService.update(+id, updateGeneralInfoDto);
    }
    throw new ForbiddenException("Access denied");
  }

  @ApiOperation({ summary: "Delete general info by ID (Admin, Super Admin)" })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'General info successfully deleted.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.generalInfoService.remove(+id);
    }
    throw new ForbiddenException("Access denied");
  }
}
