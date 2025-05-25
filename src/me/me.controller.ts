import { Controller, Get, Req, UseGuards, NotFoundException } from '@nestjs/common';
import { MeService } from './me.service';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags("Me 👤")
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) { }

  @ApiOperation({ summary: "Get info about the current authenticated user" })
  @ApiResponse({ status: 200, description: "User information returned successfully." })
  @ApiResponse({ status: 404, description: "User not found." })
  @Get()
  async getMe(@Req() req: Request) {
    return this.meService.me(req.user?.id)
  }

  @ApiOperation({ summary: "Get current user's orders" })
  @ApiResponse({ status: 200, description: "List of orders returned successfully." })
  @ApiResponse({ status: 404, description: "Orders not found." })
  @Get('orders')
  async getMyOrders(@Req() req: Request) {
    return this.meService.MyOrder(req.user?.id)
  }

  @ApiOperation({ summary: "Get current user's comments" })
  @ApiResponse({ status: 200, description: "List of comments returned successfully." })
  @ApiResponse({ status: 404, description: "Comments not found." })
  @Get('comments')
  async getMyComments(@Req() req: Request) {
    return this.meService.MyComment(req.user?.id);
  }
}
