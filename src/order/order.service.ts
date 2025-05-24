import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateOrderDto, user_id: number) {
    return await this.prisma.order.create({
      data: {
        lat: dto.lat,
        long: dto.long,
        address: dto.address,
        date: dto.date,
        paymentType: dto.paymentType,
        withDelivery: dto.withDelivery,
        commentToDelivery: dto.commentToDelivery,
        status: 'PENDING',
        user_id: user_id,

        orderProducts: dto.orderProducts
          ? {
            create: dto.orderProducts.map(product => ({
              product_id: product.product_id,
              level_id: product.level_id,
              count: product.count,
              quantity: product.quantity,
              measure: product.measure,
              tools: product.tools // TO‘G‘RILANDI: orderTools emas, tools bo‘lishi kerak
                ? {
                  create: product.tools.map(tool => ({
                    tool_id: tool.tool_id,
                    count: tool.count,
                    code: tool.code,
                  })),
                }
                : undefined,
            })),
          }
          : undefined,

        orderTools: dto.orderTools
          ? {
            create: dto.orderTools.map(tool => ({
              tool_id: tool.tool_id,
              count: tool.count,
              code: tool.code,
            })),
          }
          : undefined,
      },
      include: {
        orderProducts: {
          include: {
            tools: true, // bu to‘g‘ri
          },
        },
        orderTools: true,
      },
    });
  }








  async findAll() {
    return this.prisma.order.findMany({
      include: {
        orderProducts: {
          include: {
            tools: true,
          },
        },
        orderTools: true,
        masters: true,
      },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        orderProducts: {
          include: {
            tools: true,
          },
        },
        orderTools: true,
        masters: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async update(id: number, updateOrderDto: any) {
    await this.findOne(id);

    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.order.delete({ where: { id } });
  }
}
