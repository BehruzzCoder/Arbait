import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateRegionDto) {
    try {
      const newRegion = await this.prisma.region.create({ data });
      return newRegion;
    } catch (error) {
      console.error('Create Region Error:', error);
      throw new InternalServerErrorException('Hudud yaratishda xatolik yuz berdi');
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.region.findMany();
      return data;
    } catch (error) {
      console.error('Find All Regions Error:', error);
      throw new InternalServerErrorException('Hududlarni olishda xatolik yuz berdi');
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.region.findUnique({ where: { id } });
      if (!one) {
        throw new NotFoundException(`ID ${id} ga ega hudud topilmadi`);
      }
      return one;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Find One Region Error:', error);
      throw new InternalServerErrorException('Hududni olishda xatolik yuz berdi');
    }
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    try {
      const one = await this.prisma.region.findUnique({ where: { id } });
      if (!one) {
        throw new NotFoundException(`ID ${id} ga ega hudud topilmadi`);
      }
      const updated = await this.prisma.region.update({
        where: { id },
        data: updateRegionDto,
      });
      return updated;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Update Region Error:', error);
      throw new InternalServerErrorException('Hududni yangilashda xatolik yuz berdi');
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.region.findUnique({ where: { id } });
      if (!one) {
        throw new NotFoundException(`ID ${id} ga ega hudud topilmadi`);
      }
      const removed = await this.prisma.region.delete({ where: { id } });
      return removed;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Remove Region Error:', error);
      throw new InternalServerErrorException('Hududni ochirishda xatolik yuz berdi');
    }
  }
}
