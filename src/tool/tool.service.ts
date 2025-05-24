import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToolService {
  constructor(private readonly prisma: PrismaService) { }
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

    const tool = await this.prisma.tool.create({
      data: {
        name,
        description,
        price,
        qauntity: quantity,
        code,
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


  async findAll() {
    let data = await this.prisma.tool.findMany({ include: { ToolBrand: true, ToolSize: true, ToolCapacity: true } })
    return data
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
