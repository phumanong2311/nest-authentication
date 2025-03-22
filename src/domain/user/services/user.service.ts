import { QueryOrder } from '@mikro-orm/core';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { config } from 'src/config';
import { DomainUserEntity } from '../domain-entities';
import { CreateUserDto, UpdateUserDto } from '../dto/request';
import { IUserRepository } from '../interface-repository';
import { isEmail } from 'class-validator';
import { SLUG_REGEX } from 'src/common';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async getAll() {
    try {
      return await this.userRepository.getAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getListPagination() {
    try {
      return await this.userRepository.getListPagination({
        orderBy: { fullName: QueryOrder.DESC },
        limit: 20,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private async userByEmailOrUsername(
    emailOrUsername: string,
  ): Promise<DomainUserEntity> {
    if (emailOrUsername.includes('@')) {
      if (!isEmail(emailOrUsername)) {
        throw new BadRequestException('Invalid email');
      }

      return this.getByEmail(emailOrUsername);
    }

    if (
      emailOrUsername.length < 3 ||
      emailOrUsername.length > 106 ||
      !SLUG_REGEX.test(emailOrUsername)
    ) {
      throw new BadRequestException('Invalid username');
    }

    return this.usersService.findOneByUsername(emailOrUsername, true);
  }

  async getById(id: number): Promise<User> {
    return await this.userRepository.getById(id);
  }

  async getByEmail(email: string): Promise<DomainUserEntity> {
    return await this.userRepository.getByEmail(email);
  }

  async getByUserName(userName: string): Promise<DomainUserEntity> {
    return await this.userRepository.getByUserName(userName);
  }

  async create(data: CreateUserDto) {
    try {
      const isExit = await this.userRepository.getByEmail(data.email);
      if (isExit) throw new Error('Email already exists');
      const userData: Omit<User, 'id'> = {
        ...data,
        isActive: false,
      };
      const user = await this.userRepository.createUser(userData);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createInviteUser(token, data: CreateUserDto) {
    try {
      const isVerify = jwt.verify(token, config.authConfig.INVITE_SECRET_KEY);
      if (!isVerify) {
        throw new Error('Verify Fail, please check your account');
      }
      const isExit = await this.userRepository.getByEmail(data.email);
      if (isExit) throw new Error('Email already exists');
      const dataNeedCreate: Omit<User, 'id'> = {
        ...data,
        isActive: true,
        isEmailVerified: true,
      };
      const user = this.userRepository.createUser(dataNeedCreate);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id: number, data: UpdateUserDto) {
    try {
      const user = await this.userRepository.getById(id);
      await this.userRepository.update(id, data);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(id: number) {
    try {
      const user = await this.userRepository.getById(id);
      await this.userRepository.delete(user);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
