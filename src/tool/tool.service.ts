import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ToolService {
  constructor(private readonly prisma: PrismaService, private readonly mail: MailService) { }
  async create(createToolDto: CreateToolDto) {
    const {
      name,
      description,
      price,
      quantity,
      code,
      image,
      brands,
      sizes,
      capacities,
    } = createToolDto;

    let code_otp = await this.mail.generateOTP(name + image)
    const otp_code =  Number(code_otp)

    const tool = await this.prisma.tool.create({
      data: {
        name,
        description,
        price,
        qauntity: quantity,
        code: otp_code,
        image,
        ToolBrand: {
          create: brands.map((brand) => ({
            brand: {
              connect: { id: brand.brand_id },
            },
          })),
        },
        ToolSize: {
          create: sizes.map((size) => ({
            size: {
              connect: { id: size.size_id },
            },
          })),
        },
        ToolCapacity: {
          create: capacities.map((capacity) => ({
            capacity: {
              connect: { id: capacity.capacity_id },
            },
          })),
        },
      },
      include: {
        ToolBrand: true,
        ToolSize: true,
        ToolCapacity: true,
      },
    });

    return tool;
  }


  async findAll(query: {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  search?: string;
  price_min?: number;
  price_max?: number;
  quantity_min?: number;
  quantity_max?: number;
}) {
  const {
    page = 1,
    limit = 10,
    sortBy = 'id',
    order = 'asc',
    search,
    price_min,
    price_max,
    quantity_min,
    quantity_max,
  } = query;

  const skip = (Number(page) - 1) * Number(limit);

  const where: any = {};

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }

  if (price_min || price_max) {
    where.price = {};
    if (price_min) where.price.gte = Number(price_min);
    if (price_max) where.price.lte = Number(price_max);
  }

  if (quantity_min || quantity_max) {
    where.quantity = {};
    if (quantity_min) where.quantity.gte = Number(quantity_min);
    if (quantity_max) where.quantity.lte = Number(quantity_max);
  }

  const validSortFields = ['id', 'name', 'price', 'quantity', 'code'];
  if (!validSortFields.includes(sortBy)) {
    throw new BadRequestException(`sortBy "${sortBy}" is invalid. Valid: ${validSortFields.join(', ')}`);
  }

  const [data, total] = await this.prisma.$transaction([
    this.prisma.tool.findMany({
      where,
      skip,
      take: Number(limit),
      orderBy: { [sortBy]: order },
      include: {
        ToolBrand: true,
        ToolSize: true,
        ToolCapacity: true,
      },
    }),
    this.prisma.tool.count({ where }),
  ]);

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    totalPages: Math.ceil(total / Number(limit)),
    data,
  };
}


  async findOne(id: number) {
    let one = await this.prisma.tool.findFirst({ where: { id }, include: { ToolBrand: true, ToolSize: true, ToolCapacity: true } })
  }

  async update(id: number, updateToolDto: UpdateToolDto) {
    const {
      name,
      description,
      price,
      quantity,
      image,
      brands,
      sizes,
      capacities,
    } = updateToolDto;

    const updatedTool = await this.prisma.tool.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(price && { price }),
        ...(quantity && { qauntity: quantity }),
        ...(image && { image })
      },
    });

    await this.prisma.toolBrand.deleteMany({ where: { tool_id: id } });
    await this.prisma.toolSize.deleteMany({ where: { tool_id: id } });
    await this.prisma.toolCapacity.deleteMany({ where: { tool_id: id } });

    if (brands?.length) {
      await this.prisma.toolBrand.createMany({
        data: brands.map((brand) => ({
          tool_id: id,
          brand_id: brand.brand_id,
        })),
      });
    }

    if (sizes?.length) {
      await this.prisma.toolSize.createMany({
        data: sizes.map((size) => ({
          tool_id: id,
          size_id: size.size_id,
        })),
      });
    }

    if (capacities?.length) {
      await this.prisma.toolCapacity.createMany({
        data: capacities.map((capacity) => ({
          tool_id: id,
          capacity_id: capacity.capacity_id,
        })),
      });
    }

    return updatedTool
  }


  async remove(id: number) {
    let one = await this.prisma.tool.findFirst({ where: { id } })
    if (!one) {
      throw new NotFoundException("tool not found")
    }
    let deleted = await this.prisma.tool.delete({ where: { id } })
    return one
  }
}
