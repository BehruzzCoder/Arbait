import { Controller, Get, NotFoundException, Req, UseGuards } from '@nestjs/common';
import { MeService } from './me.service';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('me')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class MeController {
  constructor(private readonly meService: MeService) { }

  @Get()
  async getMe(@Req() req: Request) {
    return this.meService.me(req.user?.id);
  }

  @Get('orders')
  async getMyOrders(@Req() req: Request) {
    return this.meService.MyOrder(req.user?.id);
  }

  @Get('comments')
  async getMyComments(@Req() req: Request) {
    return this.meService.MyComment(req.user?.id);
  }
}
