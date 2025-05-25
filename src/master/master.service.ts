import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';

@Injectable()
export class MasterService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createMasterDto: CreateMasterDto) {
    const { year, ...rest } = createMasterDto;

    const newMaster = await this.prisma.master.create({
      data: {
        ...rest,
        year: new Date(year).getFullYear(),
      }
    });

    return newMaster;
  }



  async findAll(query: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    search?: string;
    job?: string;
    isActive?: string | boolean;
    tools?: string | boolean;
    level_id?: string | number;
    year?: string | number;
    experience?: string | number;
    minWorkingHours?: string | number;
    price_hourly_min?: string | number;
    price_hourly_max?: string | number;
    price_daily_min?: string | number;
    price_daily_max?: string | number;
  }) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'id',
      order = 'asc',
      search,
      job,
      isActive,
      tools,
      level_id,
      year,
      experience,
      minWorkingHours,
      price_hourly_min,
      price_hourly_max,
      price_daily_min,
      price_daily_max,
    } = query;

    const skip = (Number(page) - 1) * Number(limit);

    const validSortFields = [
      'id',
      'fullName',
      'job',
      'year',
      'price_daily',
      'price_hourly',
      'experience',
      'minWorkingHours',
    ];

    if (!validSortFields.includes(sortBy)) {
      throw new BadRequestException(
        `sortBy field "${sortBy}" is invalid. Use one of: ${validSortFields.join(', ')}`,
      );
    }

    const where: any = {};

    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { job: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (job) where.job = { contains: job, mode: 'insensitive' };

    if (isActive !== undefined) {
      if (isActive === 'true' || isActive === true) {
        where.isActive = true;
      } else if (isActive === 'false' || isActive === false) {
        where.isActive = false;
      } else {
        throw new BadRequestException('isActive must be true or false');
      }
    }

    if (tools !== undefined) {
      if (tools === 'true' || tools === true) {
        where.tools = true;
      } else if (tools === 'false' || tools === false) {
        where.tools = false;
      } else {
        throw new BadRequestException('tools must be true or false');
      }
    }

    if (level_id !== undefined) {
      const num = Number(level_id);
      if (isNaN(num)) throw new BadRequestException('level_id must be a number');
      where.level_id = num;
    }

    if (year !== undefined) {
      const num = Number(year);
      if (isNaN(num)) throw new BadRequestException('year must be a number');
      where.year = num;
    }

    if (experience !== undefined) {
      const num = Number(experience);
      if (isNaN(num)) throw new BadRequestException('experience must be a number');
      where.experience = num;
    }

    if (minWorkingHours !== undefined) {
      const num = Number(minWorkingHours);
      if (isNaN(num)) throw new BadRequestException('minWorkingHours must be a number');
      where.minWorkingHours = { gte: num };
    }

    if (price_hourly_min !== undefined || price_hourly_max !== undefined) {
      where.price_hourly = {};
      if (price_hourly_min !== undefined) {
        const num = Number(price_hourly_min);
        if (isNaN(num)) throw new BadRequestException('price_hourly_min must be a number');
        where.price_hourly.gte = num;
      }
      if (price_hourly_max !== undefined) {
        const num = Number(price_hourly_max);
        if (isNaN(num)) throw new BadRequestException('price_hourly_max must be a number');
        where.price_hourly.lte = num;
      }
    }

    if (price_daily_min !== undefined || price_daily_max !== undefined) {
      where.price_daily = {};
      if (price_daily_min !== undefined) {
        const num = Number(price_daily_min);
        if (isNaN(num)) throw new BadRequestException('price_daily_min must be a number');
        where.price_daily.gte = num;
      }
      if (price_daily_max !== undefined) {
        const num = Number(price_daily_max);
        if (isNaN(num)) throw new BadRequestException('price_daily_max must be a number');
        where.price_daily.lte = num;
      }
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.master.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: {
          [sortBy]: order,
        },
      }),
      this.prisma.master.count({ where }),
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
    const master = await this.prisma.master.findUnique({
      where: { id },
    });
    if (!master) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }
    return master;
  }

  async update(id: number, updateMasterDto: UpdateMasterDto) {
    const existing = await this.prisma.master.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }

    const { year, ...rest } = updateMasterDto as any;

    const updateData: any = {
      ...rest,
    };

    if (year !== undefined) {
      updateData.year = year instanceof Date ? year.getFullYear() : Number(year);
    }

    return await this.prisma.master.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.master.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException(`Master with ID ${id} not found`);
    }

    await this.prisma.master.delete({
      where: { id },
    });

    return existing;
  }

}
