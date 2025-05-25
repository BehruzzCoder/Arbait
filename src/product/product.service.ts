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
    search,
    isActive,
    minPriceHourly,
    maxPriceHourly,
    minPriceDaily,
    maxPriceDaily,
    minQuantity,
    maxQuantity,
    minWorkingPrice,
    maxWorkingPrice,
    page = '1',
    limit = '10',
    orderBy = 'name',
    orderDirection = 'asc',
  } = query;

  const where: any = {};

  if (search) {
    where.name = { contains: search, mode: 'insensitive' };
  }

  if (isActive !== undefined) {
    where.isActive = isActive === 'true';
  }

  if (minPriceHourly || maxPriceHourly) {
    where.price_hourly = {};
    if (minPriceHourly) where.price_hourly.gte = Number(minPriceHourly);
    if (maxPriceHourly) where.price_hourly.lte = Number(maxPriceHourly);
  }

  if (minPriceDaily || maxPriceDaily) {
    where.price_daily = {};
    if (minPriceDaily) where.price_daily.gte = Number(minPriceDaily);
    if (maxPriceDaily) where.price_daily.lte = Number(maxPriceDaily);
  }

  if (minQuantity || maxQuantity) {
    where.quantity = {};
    if (minQuantity) where.quantity.gte = Number(minQuantity);
    if (maxQuantity) where.quantity.lte = Number(maxQuantity);
  }

  if (minWorkingPrice || maxWorkingPrice) {
    where.minWorkingPrice = {};
    if (minWorkingPrice) where.minWorkingPrice.gte = Number(minWorkingPrice);
    if (maxWorkingPrice) where.minWorkingPrice.lte = Number(maxWorkingPrice);
  }

  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  const data = await this.prisma.product.findMany({
    where,
    skip,
    take,
    orderBy: {
      [orderBy]: orderDirection,
    },
  });

  const total = await this.prisma.product.count({ where });

  return {
    data,
    total,
    page: Number(page),
    lastPage: Math.ceil(total / take),
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
