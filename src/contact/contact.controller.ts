import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
import { UserRole } from '@prisma/client';

@ApiTags('Contact 📞')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new contact (Admin only)' })
  @ApiOkResponse({ description: 'Contact created successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized or access denied.' })
  create(@Req() req: Request, @Body() createContactDto: CreateContactDto) {
    if (req.user?.role === UserRole.ADMIN) {
      return this.contactService.create(createContactDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiOperation({ summary: 'Get all contacts' })
  @ApiOkResponse({ description: 'List of contacts.' })
  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @ApiOperation({ summary: 'Get contact by ID' })
  @ApiOkResponse({ description: 'Contact found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a contact (Admin or Super Admin only)' })
  @ApiOkResponse({ description: 'Contact updated successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized or access denied.' })
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.contactService.update(+id, updateContactDto);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contact (Admin or Super Admin only)' })
  @ApiOkResponse({ description: 'Contact deleted successfully.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized or access denied.' })
  remove(@Req() req: Request, @Param('id') id: string) {
    if (
      req.user?.role === UserRole.ADMIN ||
      req.user?.role === UserRole.SUPER_ADMIN
    ) {
      return this.contactService.remove(+id);
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
