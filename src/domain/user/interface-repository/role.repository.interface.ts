import { CreateRoleDto } from '../dto/request';
import { Role } from '../entities';

export interface IRoleRepository {
  getRolesByScope(scope: string): Promise<Role[]>;
  getAll(): Promise<Role[]>;
  createAndSave(data: CreateRoleDto): Promise<Role>;
}
