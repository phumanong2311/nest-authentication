import { SqlEntityManager } from '@mikro-orm/postgresql';
import { IRoleRepository } from 'src/modules/user-management/domain/interface-repository/role.repository.interface';
import { Role } from '../entities';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleRepository
  extends BaseRepository<Role>
  implements IRoleRepository
{
  constructor(em: SqlEntityManager) {
    super(em, Role);
  }
  async getAll(): Promise<Role[]> {
    return this.findAll();
  }
  async getRolesByScope(scope: string): Promise<Role[]> {
    return this.find({ scope });
  }
  async getByRole(role: string): Promise<Role> {
    return this.findOne({ role });
  }

  async rclass() {}
}
