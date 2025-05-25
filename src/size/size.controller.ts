import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';


@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req: Request, @Body() createSizeDto: CreateSizeDto) {
    if (req.user?.role == UserRole.ADMIN) {
      return this.sizeService.create(createSizeDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get()
  findAll() {
    return this.sizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizeService.findOne(+id);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Req()req:Request,@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    if(req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN){
      return this.sizeService.update(+id, updateSizeDto);
    }else{
      throw new ForbiddenException("Access denied")
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Req() req:Request,@Param('id') id: string) {
    if(req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN){
      return this.sizeService.remove(+id);
    }else{
      throw new ForbiddenException("Access denied")
    }
  }
}
