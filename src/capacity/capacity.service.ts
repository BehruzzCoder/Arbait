import { Injectable } from '@nestjs/common';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapacityService {
  constructor(private readonly prisma: PrismaService) { }
  create(createCapacityDto: CreateCapacityDto) {
    let newCapacity = this.prisma.capacity.create({ data: createCapacityDto })
    return newCapacity
  }

  findAll() {
    return this.prisma.capacity.findMany()
  }

  findOne(id: number) {
    return this.prisma.capacity.findUnique({ where: { id } })
  }

  update(id: number, updateCapacityDto: UpdateCapacityDto) {
    return this.prisma.capacity.update({ where: { id }, data: updateCapacityDto })
  }

  remove(id: number) {
    return this.prisma.capacity.delete({ where: { id } })
  }
}
