import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }

  @Post()
  create(@Req() req: Request, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
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
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.commentService.update(+id, updateCommentDto);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    if (req.user?.role == UserRole.ADMIN || req.user?.role == UserRole.SUPER_ADMIN) {
      return this.commentService.remove(+id);
    } else {
      throw new ForbiddenException("Access denied")
    }
  }
}
