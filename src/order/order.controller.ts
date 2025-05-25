import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AddMastersToOrderDto } from './dto/addMasters.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  create(@Req()req:Request,@Body() createOrderDto: CreateOrderDto) {
    if(!req.user?.id){
      throw new NotFoundException("User not found")
    }
    return this.orderService.create(createOrderDto, req.user.id);
  }

  @Post("assign")
  assign(@Req() req: Request, @Body() data: AddMastersToOrderDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.VIEWER_ADMIN) {
      return this.orderService.assign(data);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
  @Get()
  findAll(@Req() req: Request) {
    if (req.user?.role == UserRole.VIEWER_ADMIN || req.user?.role == UserRole.ADMIN) {
      return this.orderService.findAll()
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.VIEWER_ADMIN) {
      return this.orderService.findOne(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.orderService.update(+id, updateOrderDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN){
      return this.orderService.remove(+id);
    }else{
      throw new  ForbiddenException("Access denied")
    }
  }
}
