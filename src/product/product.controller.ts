import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductQueryDto } from './dto/ProductQueryDto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiParam,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Product 🛒')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new product' })
  @ApiCreatedResponse({ description: 'Product successfully created.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @Post()
  create(@Req() req: Request, @Body() createProductDto: CreateProductDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.productService.create(createProductDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get all products with filter, pagination and search' })
  @ApiOkResponse({ description: 'List of products' })
  @ApiQuery({ name: 'search', required: false, description: 'Search by product name or other fields' })
  @ApiQuery({ name: 'isActive', required: false, description: 'Filter by active status', type: Boolean })
  @ApiQuery({ name: 'minPriceHourly', required: false, description: 'Minimum hourly price', type: Number })
  @ApiQuery({ name: 'maxPriceHourly', required: false, description: 'Maximum hourly price', type: Number })
  @ApiQuery({ name: 'minPriceDaily', required: false, description: 'Minimum daily price', type: Number })
  @ApiQuery({ name: 'maxPriceDaily', required: false, description: 'Maximum daily price', type: Number })
  @ApiQuery({ name: 'minQuantity', required: false, description: 'Minimum quantity', type: Number })
  @ApiQuery({ name: 'maxQuantity', required: false, description: 'Maximum quantity', type: Number })
  @ApiQuery({ name: 'minWorkingPrice', required: false, description: 'Minimum working price', type: Number })
  @ApiQuery({ name: 'maxWorkingPrice', required: false, description: 'Maximum working price', type: Number })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination', type: Number })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of items per page', type: Number })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    description: 'Field to order by',
    enum: ['name', 'price_hourly', 'price_daily', 'quantity', 'minWorkingPrice'],
  })
  @ApiQuery({
    name: 'orderDirection',
    required: false,
    description: 'Order direction',
    enum: ['asc', 'desc'],
  })
  @Get()
  findAll(@Query() query: ProductQueryDto) {
    return this.productService.findAll(query);
  }

  @ApiOperation({ summary: 'Get product by ID' })
  @ApiOkResponse({ description: 'Product details' })
  @ApiParam({ name: 'id', description: 'Product ID', type: Number })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update a product' })
  @ApiOkResponse({ description: 'Product successfully updated.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.productService.update(id, updateProductDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete a product' })
  @ApiOkResponse({ description: 'Product successfully deleted.' })
  @ApiForbiddenResponse({ description: 'Access denied.' })
  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    if (req.user?.role === UserRole.ADMIN || req.user?.role === UserRole.SUPER_ADMIN) {
      return this.productService.remove(id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
