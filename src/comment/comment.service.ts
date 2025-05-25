import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { StarMasterDto } from 'src/master/dto/star-master.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCommentDto: CreateCommentDto, user_id) {
    let order_one = await this.prisma.order.findFirst({ where: { id: createCommentDto.order_id } })
    if (!order_one) {
      throw new BadRequestException("order not found")
    }
    const newComment = await this.prisma.comment.create({
      data: {
        ...createCommentDto,
        user_id: user_id,
      },
    });
    return newComment
  }
  async MasterStar(data:StarMasterDto,user_id){
    let master_one = await this.prisma.master.findFirst({where:{id:data.master_id}})
    if(!master_one){
      throw new NotFoundException("master not found")
    }
    const newMasterStar =await this.prisma.masterStar.create({data:{userId:user_id,...data}})
    return newMasterStar
  }

  async findAll() {
    return await this.prisma.comment.findMany();
  }

  async findOne(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto, user_id: number) {
    const comment = await this.prisma.comment.findUnique({ where: { id } })
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    if (comment.user_id == user_id) {
      return await this.prisma.comment.update({
        where: { id },
        data: updateCommentDto,
      });
    }
    throw new ForbiddenException("You can only update your own comments")
  }

  async remove(id: number,user_id) {
    const comment = await this.prisma.comment.findUnique({ where: { id } });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    if (comment.user_id == user_id) {
      return await this.prisma.comment.delete({
        where: { id },
      });
    }
    throw new ForbiddenException("You can only delete your own comments")

  }
}
