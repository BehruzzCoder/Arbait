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
  NotFoundException,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AddMastersToOrderDto } from './dto/addMasters.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiBearerAuth()
@ApiTags('Order 📦')
@UseGuards(AuthGuard)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({ status: 201, description: 'Order successfully created.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Post()
  create(@Req() req: Request, @Body() createOrderDto: CreateOrderDto) {
    if (!req.user?.id) {
      throw new NotFoundException('User not found');
    }
    return this.orderService.create(createOrderDto, req.user.id);
  }

  @ApiOperation({ summary: 'Assign masters to an order' })
  @ApiResponse({ status: 200, description: 'Masters successfully assigned.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Post('assign')
  assign(@Req() req: Request, @Body() data: AddMastersToOrderDto) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.VIEWER_ADMIN
    ) {
      return this.orderService.assign(data);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'List of orders returned.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Get()
  findAll(@Req() req: Request) {
    if (
      req.user?.role === UserRole.VIEWER_ADMIN ||
      req.user?.role === UserRole.ADMIN
    ) {
      return this.orderService.findAll();
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get order by ID' })
  @ApiResponse({ status: 200, description: 'Order returned.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.VIEWER_ADMIN
    ) {
      return this.orderService.findOne(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Update an existing order' })
  @ApiResponse({ status: 200, description: 'Order updated successfully.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.orderService.update(+id, updateOrderDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Delete an order' })
  @ApiResponse({ status: 200, description: 'Order deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Access denied.' })
  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.orderService.remove(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
