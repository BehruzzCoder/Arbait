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
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import {
  ApiBearerAuth,
  ApiQuery,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiParam,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Tool ⚙️')
@Controller('tool')
export class ToolController {
  constructor(private readonly toolService: ToolService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new tool' })
  @ApiCreatedResponse({ description: 'Tool successfully created.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @Post()
  create(@Req() req: Request, @Body() createToolDto: CreateToolDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.toolService.create(createToolDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get all tools with optional filters, pagination and sorting' })
  @ApiOkResponse({ description: 'List of tools' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiQuery({ name: 'sortBy', required: false, example: 'id' })
  @ApiQuery({ name: 'order', required: false, example: 'asc' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'price_min', required: false, example: 1000 })
  @ApiQuery({ name: 'price_max', required: false, example: 5000 })
  @ApiQuery({ name: 'quantity_min', required: false, example: 1 })
  @ApiQuery({ name: 'quantity_max', required: false, example: 100 })
  @Get()
  findAll(@Query() query: any) {
    return this.toolService.findAll(query);
  }

  @ApiOperation({ summary: 'Get a tool by ID' })
  @ApiOkResponse({ description: 'Tool details' })
  @ApiParam({ name: 'id', description: 'Tool ID', type: Number })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.toolService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update a tool' })
  @ApiOkResponse({ description: 'Tool successfully updated.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @ApiParam({ name: 'id', description: 'Tool ID', type: Number })
  @Patch(':id')
  update(@Req() req: Request, @Param('id', ParseIntPipe) id: number, @Body() updateToolDto: UpdateToolDto) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.toolService.update(id, updateToolDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete a tool' })
  @ApiOkResponse({ description: 'Tool successfully deleted.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @ApiParam({ name: 'id', description: 'Tool ID', type: Number })
  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.toolService.remove(id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
