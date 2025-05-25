import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapacityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCapacityDto: CreateCapacityDto) {
    let newCapacity = await this.prisma.capacity.create({data: createCapacityDto})
    return newCapacity
  }

  async findAll(){
    let data = await this.prisma.capacity.findMany()
    return data
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
