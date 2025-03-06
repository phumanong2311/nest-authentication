import { DomainRoleEntity } from '../domain-entities';
import { CreateRoleDto } from '../dto/request';

export interface IRoleRepository {
  getRolesByScope(scope: string): Promise<DomainRoleEntity[]>;
  getAll(): Promise<DomainRoleEntity[]>;
  createAndSave(data: CreateRoleDto): Promise<DomainRoleEntity>;
}
