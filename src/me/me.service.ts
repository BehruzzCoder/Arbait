import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MeService {
  constructor(private readonly prisma: PrismaService) { }
  async MyOrder(user_id) {
    let data = await this.prisma.order.findMany({ where: { user_id },include:{orderProducts:true,orderTools:true} })
    return data
  }
  async MyComment(user_id) {
    let data = await this.prisma.comment.findMany({ where: { user_id },include:{Order:true} })
    return data
  }
  async me(user_id) {
    let data = await this.prisma.user.findFirst({ where: { id: user_id } ,include:{Order:true,region:true,Comment:true ,MasterStar:true}})
    return data
  }
}
