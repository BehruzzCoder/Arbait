import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createBrandDto: CreateBrandDto) {
    let newBrand = await this.prisma.brand.create({ data: createBrandDto })
    return newBrand
  }

  async findAll() {
    let data = await this.prisma.brand.findMany()
    return data
  }

  async findOne(id: number) {
    const brand = await this.prisma.brand.findUnique({
      where: { id },
    });

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return brand;
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const existing = await this.prisma.brand.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return this.prisma.brand.update({
      where: { id },
      data: updateBrandDto,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.brand.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return this.prisma.brand.delete({
      where: { id },
    });
  }
}
