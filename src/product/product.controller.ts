import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseBoolPipe,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductQueryDto } from './dto/ProductQueryDto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createProductDto: CreateProductDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.productService.create(createProductDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all products with filter, pagination and search' })
  @ApiOkResponse({ description: 'List of products' })
  @ApiQuery({ name: 'search', required: false, description: 'Search by product name' })
  @ApiQuery({ name: 'isActive', required: false, description: 'Filter by active status', type: Boolean })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination', type: Number })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of items per page', type: Number })
  findAll(@Query() query: ProductQueryDto) {
    return this.productService.findAll(query);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.productService.update(id, updateProductDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN){
      return this.productService.remove(id);
    }else{
      throw new  ForbiddenException("Access denied")
    }
  }
}
