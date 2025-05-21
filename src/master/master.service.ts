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
    const { level_id } = createMasterDto
    let one = await this.prisma.level.findFirst({ where: { id: level_id } })
    if (!one) {
      throw new NotFoundException("level_id not found")
    }
    const newMaster = await this.prisma.master.create({ data: createMasterDto })
    return newMaster
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    search?: string;
    job?: string;
    isActive?: any;
    tools?: any;
    level_id?: any;
    year?: any;
    experience?: any;
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
    } = query;

    const skip = (+page - 1) * +limit;

    const validSortFields = [
      'id',
      'fullName',
      'job',
      'year',
      'price_daily',
      'price_hours',
      'experience',
    ];

    if (!validSortFields.includes(sortBy)) {
      throw new BadRequestException(
        `sortBy field "${sortBy}" is invalid. Use one of: ${validSortFields.join(
          ', ',
        )}`,
      );
    }

    const where: any = {};

    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { job: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (job) where.job = job;

    if (isActive !== undefined) {
      if (isActive === 'true' || isActive === 'false') {
        where.isActive = isActive === 'true';
      } else {
        throw new BadRequestException('isActive must be true or false');
      }
    }

    if (tools !== undefined) {
      if (tools === 'true' || tools === 'false') {
        where.tools = tools === 'true';
      } else {
        throw new BadRequestException('tools must be true or false');
      }
    }

    if (level_id !== undefined) {
      const num = parseInt(level_id);
      if (isNaN(num))
        throw new BadRequestException('level_id must be a number');
      where.level_id = num;
    }

    if (year !== undefined) {
      const num = parseInt(year);
      if (isNaN(num)) throw new BadRequestException('year must be a number');
      where.year = num;
    }

    if (experience !== undefined) {
      const num = parseInt(experience);
      if (isNaN(num))
        throw new BadRequestException('experience must be a number');
      where.experience = num;
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.master.findMany({
        where,
        skip,
        take: +limit,
        orderBy: {
          [sortBy]: order,
        },
      }),
      this.prisma.master.count({ where }),
    ]);

    return {
      total,
      page: +page,
      limit: +limit,
      totalPages: Math.ceil(total / +limit),
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

    return await this.prisma.master.update({
      where: { id },
      data: updateMasterDto,
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
