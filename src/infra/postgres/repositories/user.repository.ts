import { SqlEntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/user/interface-repository';
import { Email } from 'src/share/dto/value-object';
import { BaseRepository } from './base.repository';
import { DomainUserEntity } from 'src/domain/user/domain-entities';
import { User } from '../entities';

@Injectable()
export class UserRepository
  extends BaseRepository<DomainUserEntity>
  implements IUserRepository
{
  constructor(em: SqlEntityManager) {
    super(em, User);
  }

  async getByEmail(email: Email): Promise<DomainUserEntity> {
    return await this.findOneOrFail({ email });
  }

  async getByUserName(userName: string): Promise<User> {
    return await this.findOneOrFail({ userName });
  }

  async getListPagination(orderBy?: any, limit?: number, offset?: number) {
    return await this.findAll({
      orderBy: orderBy,
      limit: limit || 20,
      offset: offset || 0,
    });
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const user = await this.createAndSave(userData);
    return user;
  }

  async updateUser(id: number, _entity: Omit<User, 'id'>): Promise<User> {
    try {
      const entity = await this.getById(id);
      if (!entity) throw new Error(`User with id ${id} not found`);
      this.em.assign(entity, _entity as any);
      await this.em.flush();
      await this.em.refresh(entity);
      return entity;
    } catch (error) {
      throw new Error(error);
    }
  }
}
