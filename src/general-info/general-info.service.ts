import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGeneralInfoDto } from './dto/create-general-info.dto';
import { UpdateGeneralInfoDto } from './dto/update-general-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneralInfoService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createGeneralInfoDto: CreateGeneralInfoDto) {
    let newGeneralInfo = await this.prisma.generalInfo.create({ data: createGeneralInfoDto })
    return newGeneralInfo
  }

  async findAll() {
    let generalInfos = await this.prisma.generalInfo.findMany()
    return generalInfos
  }

  async findOne(id: number) {
    let one = await this.prisma.generalInfo.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('GeneralInfo not found')
    return one
  }

  async update(id: number, updateGeneralInfoDto: UpdateGeneralInfoDto) {
    let one = await this.prisma.generalInfo.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('GeneralInfo not found')
    const updatedGeneralInfo = await this.prisma.generalInfo.update({ where: { id }, data: updateGeneralInfoDto })
    return updatedGeneralInfo
  }

  async remove(id: number) {
    let one = await this.prisma.generalInfo.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('GeneralInfo not found')
    await this.prisma.generalInfo.delete({ where: { id } })
    return one
  }
}
