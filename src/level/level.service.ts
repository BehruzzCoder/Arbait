import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createLevelDto: CreateLevelDto) {
    let newLevel = await this.prisma.level.create({ data: createLevelDto })
    return newLevel
  }

  findAll() {
    let levels = this.prisma.level.findMany()
    return levels
  }

  findOne(id: number) {
    let level = this.prisma.level.findUnique({ where: { id } })
    if (!level) throw new NotFoundException('Level not found')
    return level
  }

  update(id: number, updateLevelDto: UpdateLevelDto) {
    let level = this.prisma.level.findUnique({ where: { id } })
    if (!level) throw new NotFoundException('Level not found')
    let updatedLevel = this.prisma.level.update({ where: { id }, data: updateLevelDto })
    return updatedLevel
  }

  remove(id: number) {
    let level = this.prisma.level.findUnique({ where: { id } })
    if (!level) throw new NotFoundException('Level not found')
    let deletedLevel = this.prisma.level.delete({ where: { id } })
    return deletedLevel
  }
}
