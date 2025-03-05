import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/infra/postgres/entities';
import { CurrentUserParam } from 'src/share/decorators';
import { AuthGuard } from 'src/share/guards';
import {
  CreateUserDto,
  UpdateUserDto
} from '../dto/request';
import { UserService } from '../services';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get('info')
  async getInfo(@CurrentUserParam() currentUser: User) {
    try {
      return await this.userService.getById(currentUser.id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.userService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() body: CreateUserDto) {
    try {
      return await this.userService.create(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('invite-user')
  async createUserInvited(
    @Body('token') token: string,
    @Body() body: CreateUserDto,
    @CurrentUserParam() currentUser: User,
  ) {
    try {
      body.createdBy = currentUser.id;
      return await this.userService.createInviteUser(token, body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: UpdateUserDto) {
    const author = await this.userService.update(id, body);
    return author;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
