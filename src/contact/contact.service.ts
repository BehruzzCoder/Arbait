import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma:PrismaService){}
  async create(createContactDto: CreateContactDto) {
    let newContact = await this.prisma.contact.create({ data: createContactDto })
    return newContact
  }

  async findAll() {
    let contacts = await this.prisma.contact.findMany()
    return contacts
  }

  async findOne(id: number) {
    let one = await this.prisma.contact.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Contact not found')
    return one
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    let one = await this.prisma.contact.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Contact not found')
    const updatedContact = await this.prisma.contact.update({ where: { id }, data: updateContactDto })
    return updatedContact
  }

  async remove(id: number) {
    let one = await this.prisma.contact.findFirst({ where: { id } })
    if (!one) throw new NotFoundException('Contact not found')
    await this.prisma.contact.delete({ where: { id } })
    return one
  }
}
