import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SizeService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createSizeDto: CreateSizeDto) {
    let newSize = await this.prisma.size.create({ data: createSizeDto })
    return newSize
  }

  async findAll() {
    let sizes = await this.prisma.size.findMany()
    return sizes
  }

  async findOne(id: number) {
    let one = await this.prisma.size.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Size not found')
    return one
  }

  async update(id: number, updateSizeDto: UpdateSizeDto) {
    let one = await this.prisma.size.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Size not found')
    const updatedSize = await this.prisma.size.update({ where: { id }, data: updateSizeDto })
    return updatedSize
  }

  async remove(id: number) {
    let one = await this.prisma.size.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Size not found')
    await this.prisma.size.delete({ where: { id } })
    return one
  }
}
