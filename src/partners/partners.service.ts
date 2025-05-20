import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createPartnerDto: CreatePartnerDto) {
    let newPartner = await this.prisma.partners.create({ data: createPartnerDto });
    return newPartner;
  }

  async findAll() {
    const data = await this.prisma.partners.findMany()
    return data
  }

  async findOne(id: number) {
    let one = await this.prisma.partners.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Partner not found')
    return one
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto) {
    let one = await this.prisma.partners.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Partner not found')
    let updatedPartner = await this.prisma.partners.update({ where: { id }, data: updatePartnerDto })
    return updatedPartner
  }

  async remove(id: number) {
    let one = await this.prisma.partners.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Partner not found')
    await this.prisma.partners.delete({ where: { id } })
    return one
  }
}
