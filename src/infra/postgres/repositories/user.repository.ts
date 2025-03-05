import { SqlEntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user-management/domain/entities';
import { IUserRepository } from 'src/modules/user-management/domain/interface-repository/user.repository.interface';
import { Email } from 'src/share/dto/value-object';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(em: SqlEntityManager) {
    super(em, User);
  }

  async getByEmail(email: Email): Promise<User> {
    return await this.findOneOrFail({ email });
  }

  async getListPagination(orderBy?: any, limit?: number, offset?: number) {
    return await this.findAll({
      orderBy: orderBy,
      limit: limit || 20,
      offset: offset || 0,
    });
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const user = await this.createAndSave(userData)
    return user
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
