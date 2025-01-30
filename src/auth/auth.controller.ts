import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LoginRequestDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginRequestDTO): string {
    return this.authService.validateUser(body);
  }

  @Get('status')
  @UseGuards(JwtAuthGuard(['manager']))
  status(@Req() req: Request) {
    return 'OKKKKKKKKKKK 1';
  }

  @Get('status2')
  @UseGuards(JwtAuthGuard(['user']))
  status2(@Req() req: Request) {
    return 'OKKKKKKKKKKK 2';
  }
}
