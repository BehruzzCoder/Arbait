import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowcaseService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createShowcaseDto: CreateShowcaseDto) {
    let newShowcase = await this.prisma.showcase.create({ data: createShowcaseDto });
    return newShowcase;
  }

  async findAll() {
    const data = await this.prisma.showcase.findMany()
    return data
  }

  async findOne(id: number) {
    let one = await this.prisma.showcase.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Showcase not found')
    return one
  }

  async update(id: number, updateShowcaseDto: UpdateShowcaseDto) {
    let one = await this.prisma.showcase.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Showcase not found')
    let updatedShowcase = await this.prisma.showcase.update({ where: { id }, data: updateShowcaseDto })
    return updatedShowcase
  }

  async remove(id: number) {
    let one = await this.prisma.showcase.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Showcase not found')
    await this.prisma.showcase.delete({ where: { id } })
    return one
  }
}
