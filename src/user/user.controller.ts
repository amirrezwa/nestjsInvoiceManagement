import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(Users)
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.userService.create({
      first_name: body.first_name,
      last_name: body.last_name,
    });
  }

  @Get()
  async find() {
    return this.userService.findAll;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
    return this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.userService.remove(+id);
  }
}
