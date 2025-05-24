import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductQueryDto } from './dto/ProductQueryDto';


@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    const {
      productTool,
      productLevel,
      ...productData
    } = createProductDto;

    const newProduct = await this.prisma.product.create({
      data: {
        ...productData,

        toolProduct: {
          create: productTool.map(tool => ({
            Tool: {
              connect: { id: tool.tool_id },
            },
          })),
        },

        productLevels: {
          create: productLevel.map(level => ({
            level: {
              connect: { id: level.level_id },
            },
          })),
        },
      },
      include: {
        toolProduct: true,
        productLevels: true,
      },
    });

    return newProduct;
  }





  async findAll(query: ProductQueryDto) {
    const {
      page = 1,
      limit = 10,
      search,
      isActive,
      minPriceHourly,
      maxPriceHourly,
      minPriceDaily,
      maxPriceDaily,
      orderBy = 'name',
      orderDirection = 'asc',
    } = query;

    const where: any = {};

    if (search) {
      where.name = { contains: search, mode: 'insensitive' };
    }

    if (typeof isActive === 'boolean') {
      where.isActive = isActive;
    }

    if (minPriceHourly !== undefined || maxPriceHourly !== undefined) {
      where.price_hourly = {};
      if (minPriceHourly !== undefined) where.price_hourly.gte = minPriceHourly;
      if (maxPriceHourly !== undefined) where.price_hourly.lte = maxPriceHourly;
    }

    if (minPriceDaily !== undefined || maxPriceDaily !== undefined) {
      where.price_daily = {};
      if (minPriceDaily !== undefined) where.price_daily.gte = minPriceDaily;
      if (maxPriceDaily !== undefined) where.price_daily.lte = maxPriceDaily;
    }

    const products = await this.prisma.product.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        [orderBy]: orderDirection,
      },
    });

    const total = await this.prisma.product.count({ where });

    return {
      data: products,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }



  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.prisma.product.delete({
      where: { id },
    });

    return { message: 'Product deleted successfully' };
  }
}
