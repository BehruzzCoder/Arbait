import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapacityService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCapacityDto: CreateCapacityDto) {
    return this.prisma.capacity.create({ data: createCapacityDto });
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
  }) {
    const {
      page = 1,
      limit = 10,
      search,
      sortBy = 'id',
      order = 'asc',
    } = query;

    const skip = (+page - 1) * +limit;

    const validSortFields = ['id', 'name_uz', 'name_ru', 'name_en'];
    if (!validSortFields.includes(sortBy)) {
      throw new BadRequestException(
        `sortBy value "${sortBy}" is invalid. Choose from: ${validSortFields.join(', ')}`
      );
    }

    const where: any = {};
    if (search) {
      where.OR = [
        { name_uz: { contains: search, mode: 'insensitive' } },
        { name_ru: { contains: search, mode: 'insensitive' } },
        { name_en: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.capacity.findMany({
        where,
        skip,
        take: +limit,
        orderBy: {
          [sortBy]: order,
        },
      }),
      this.prisma.capacity.count({ where }),
    ]);

    return {
      total,
      page: +page,
      limit: +limit,
      totalPages: Math.ceil(total / +limit),
      data,
    };
  }

  async findOne(id: number) {
    const capacity = await this.prisma.capacity.findUnique({ where: { id } });
    if (!capacity) {
      throw new NotFoundException(`Capacity with ID ${id} not found`);
    }
    return capacity;
  }

  async update(id: number, updateCapacityDto: UpdateCapacityDto) {
    const existing = await this.prisma.capacity.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Capacity with ID ${id} not found`);
    }

    return this.prisma.capacity.update({
      where: { id },
      data: updateCapacityDto,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.capacity.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Capacity with ID ${id} not found`);
    }

    return this.prisma.capacity.delete({ where: { id } });
  }
}
