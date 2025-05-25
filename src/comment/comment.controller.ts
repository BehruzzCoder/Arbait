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
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';
import { StarMasterDto } from 'src/master/dto/star-master.dto';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Comment 💬')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new comment' })
  @ApiOkResponse({ description: 'Comment created successfully.' })
  @ApiUnauthorizedResponse({ description: 'User not found or unauthorized.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  create(@Req() req: Request, @Body() createCommentDto: CreateCommentDto) {
    if (!req.user?.id) {
      throw new NotFoundException('User not found');
    }
    return this.commentService.create(createCommentDto, req.user.id);
  }

  @Post('master-star')
  @ApiOperation({ summary: 'Rate a master' })
  @ApiOkResponse({ description: 'Master rated successfully.' })
  @ApiUnauthorizedResponse({ description: 'User not found or unauthorized.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  masterStar(@Req() req: Request, @Body() data: StarMasterDto) {
    if (!req.user?.id) {
      throw new NotFoundException('User not found');
    }
    return this.commentService.MasterStar(data, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all comments (Admin or Viewer Admin only)' })
  @ApiOkResponse({ description: 'List of comments.' })
  @ApiUnauthorizedResponse({ description: 'Access denied.' })
  findAll(@Req() req: Request) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.VIEWER_ADMIN
    ) {
      return this.commentService.findAll();
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get comment by ID (Admin or Viewer Admin only)' })
  @ApiOkResponse({ description: 'Comment found.' })
  @ApiUnauthorizedResponse({ description: 'Access denied.' })
  findOne(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.VIEWER_ADMIN
    ) {
      return this.commentService.findOne(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a comment' })
  @ApiOkResponse({ description: 'Comment updated successfully.' })
  @ApiUnauthorizedResponse({ description: 'User not found or unauthorized.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    if (!req.user?.id) {
      throw new NotFoundException('User not found');
    }
    return this.commentService.update(+id, updateCommentDto, req.user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a comment' })
  @ApiOkResponse({ description: 'Comment deleted successfully.' })
  @ApiUnauthorizedResponse({ description: 'User not found or unauthorized.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (!req.user?.id) {
      throw new NotFoundException('User not found');
    }
    return this.commentService.remove(+id, req.user.id);
  }
}
