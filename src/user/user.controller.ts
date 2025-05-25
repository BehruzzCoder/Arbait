import {
  Controller,
  Post,
  Body,
  Patch,
  UseGuards,
  Req,
  UnauthorizedException,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { verifyOTPUserDto } from './dto/verifyotp-user.dto';
import { ResetPasswordUserDto } from './dto/reset.password-user.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ResendOtpUserDto } from './dto/resend-otp.dto';
import { CreateUserYrDto } from './dto/register-userYr.dto';

@ApiTags("User 🔑")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User successfully registered', type: CreateUserDto })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('registerYr')
  @ApiOperation({ summary: 'Register a new user (Yr variant)' })
  @ApiResponse({ status: 201, description: 'User successfully registered', type: CreateUserYrDto })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  registerYr(@Body() createUserDto: CreateUserYrDto) {
    return this.userService.registerYr(createUserDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'User successfully logged in' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto.email, loginUserDto.password);
  }

  @Post('verify-otp')
  @ApiOperation({ summary: 'Verify OTP code for user' })
  @ApiResponse({ status: 200, description: 'OTP verified successfully' })
  @ApiResponse({ status: 400, description: 'Invalid or expired OTP' })
  verifyOtp(@Body() dto: verifyOTPUserDto) {
    return this.userService.verifyOtp(dto);
  }

  @Patch('reset-password')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Reset user password (authenticated users only)' })
  @ApiResponse({ status: 200, description: 'Password reset successfully' })
  @ApiResponse({ status: 401, description: 'User not authenticated' })
  resetPassword(@Body() dto: ResetPasswordUserDto, @Req() req: Request) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    const userId = req.user.id;
    return this.userService.resetPassword(dto, userId);
  }

  @Post('resend-otp')
  @ApiOperation({ summary: 'Resend OTP code to user' })
  @ApiResponse({ status: 200, description: 'OTP resent successfully' })
  @ApiResponse({ status: 400, description: 'Invalid user data' })
  resendOtp(@Body() data: ResendOtpUserDto) {
    return this.userService.resendOtp(data);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('sessions')
  @ApiOperation({ summary: 'Get all active sessions of the logged-in user' })
  @ApiResponse({ status: 200, description: 'List of user sessions returned' })
  getSessions(@Req() req) {
    return this.userService.getSessions(req.user.id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete('sessions/:id')
  @ApiOperation({ summary: 'Delete a user session by ID (authenticated users only)' })
  @ApiParam({ name: 'id', description: 'Session ID', type: Number })
  @ApiResponse({ status: 200, description: 'Session deleted successfully' })
  @ApiResponse({ status: 401, description: 'User not authenticated' })
  deleteSession(@Req() req, @Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteSession(req.user.id, id);
  }
}
