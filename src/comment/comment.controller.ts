import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException, NotFoundException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';
import { StarMasterDto } from 'src/master/dto/star-master.dto';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }

  @Post()
  create(@Req() req: Request, @Body() createCommentDto: CreateCommentDto) {
    if (!req.user?.id) {
      throw new NotFoundException("user not found")
    }
    return this.commentService.create(createCommentDto, req.user?.id);
  }
  @Post("master-star")
  masterStar(@Req() req: Request, @Body() data: StarMasterDto) {
    if (!req.user?.id) {
      throw new NotFoundException("user not found")
    }
    return this.commentService.MasterStar(data, req.user?.id);
  }

  @Get()
  findAll(@Req() req: Request) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.VIEWER_ADMIN) {
      return this.commentService.findAll();
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.VIEWER_ADMIN) {
      return this.commentService.findOne(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    if (!req.user?.id) {
      throw new NotFoundException("User not found")
    }
    return this.commentService.update(+id, updateCommentDto, req.user?.id);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (!req.user?.id) {
      throw new NotFoundException("User not found")
    }
    return this.commentService.remove(+id, req.user.id);
  }
}
