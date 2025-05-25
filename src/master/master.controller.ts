import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import {
  ApiTags,
  ApiOperation,
  ApiQuery,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client'

class MasterQueryDto {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  search?: string;
  job?: string;
  isActive?: string;
  tools?: string;
  level_id?: number;
  year?: number;
  experience?: number;
}

@ApiTags('Master 👨‍🔧')
@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new master' })
  @ApiBody({ type: CreateMasterDto })
  @ApiOkResponse({ description: 'Master created successfully' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  create(@Req() req: Request, @Body() createMasterDto: CreateMasterDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.masterService.create(createMasterDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Get all masters with filters, pagination, sorting, and search',
  })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiQuery({ name: 'sortBy', required: false, example: 'id' })
  @ApiQuery({ name: 'order', required: false, example: 'asc' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'job', required: false })
  @ApiQuery({ name: 'isActive', required: false, example: true })
  @ApiQuery({ name: 'tools', required: false, example: true })
  @ApiQuery({ name: 'level_id', required: false, example: 1 })
  @ApiQuery({ name: 'year', required: false, example: 2000 })
  @ApiQuery({ name: 'experience', required: false, example: 3 })
  @ApiQuery({ name: 'minWorkingHours', required: false, example: 2 })
  @ApiQuery({ name: 'price_hourly_min', required: false, example: 100 })
  @ApiQuery({ name: 'price_hourly_max', required: false, example: 300 })
  @ApiQuery({ name: 'price_daily_min', required: false, example: 1000 })
  @ApiQuery({ name: 'price_daily_max', required: false, example: 3000 })
  @ApiOkResponse({ description: 'List of masters with metadata' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  findAll(@Req() req: Request, @Query() query: MasterQueryDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.VIEWER_ADMIN) {
      return this.masterService.findAll(query);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get master by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ description: 'Master found' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  findOne(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.VIEWER_ADMIN) {
      return this.masterService.findOne(+id);
    } else {
      throw new ForbiddenException("Acess denied")
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update master by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateMasterDto })
  @ApiOkResponse({ description: 'Master updated successfully' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  update(@Req() req: Request, @Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.masterService.update(+id, updateMasterDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete master by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ description: 'Master deleted successfully' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN)
      return this.masterService.remove(+id);
  }
}
