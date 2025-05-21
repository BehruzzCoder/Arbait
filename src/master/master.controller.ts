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
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all masters with filters, pagination, sorting, and search' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'sortBy', required: false, type: String, example: 'year' })
  @ApiQuery({ name: 'order', required: false, enum: ['asc', 'desc'], example: 'asc' })
  @ApiQuery({ name: 'search', required: false, type: String, example: 'developer' })
  @ApiQuery({ name: 'job', required: false, type: String })
  @ApiQuery({ name: 'isActive', required: false, type: Boolean })
  @ApiQuery({ name: 'tools', required: false, type: Boolean })
  @ApiQuery({ name: 'level_id', required: false, type: Number })
  @ApiQuery({ name: 'year', required: false, type: Number })
  @ApiQuery({ name: 'experience', required: false, type: Number })
  @ApiOkResponse({ description: 'List of masters with metadata' })
  findAll(@Query() query: any) {
    return this.masterService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get master by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ description: 'Master found' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update master by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateMasterDto })
  @ApiOkResponse({ description: 'Master updated successfully' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateMasterDto: UpdateMasterDto,
  ) {
    return this.masterService.update(+id, updateMasterDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete master by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiOkResponse({ description: 'Master deleted successfully' })
  @ApiNotFoundResponse({ description: 'Master not found' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.masterService.remove(+id);
  }
}
