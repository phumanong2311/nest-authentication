import { Injectable } from '@nestjs/common';
import { RoleRepository } from 'src/infra/postgres/repositories';
import { CreateRoleDto, UpdateRoleDto } from '../dto/request';
import { Role } from '../entities';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}
  async getAll(): Promise<Role[]> {
    try {
      return await this.roleRepository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getByRole(role: string) {
    try {
      return await this.roleRepository.getByRole(role);
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data: CreateRoleDto): Promise<Role> {
    try {
      return this.roleRepository.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(data: UpdateRoleDto) {
    try {
      const currentRole = await this.roleRepository.findOneOrFail({
        id: data.id,
      });
      const newRole = await this.roleRepository.assign(currentRole, data);
      return newRole;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: number) {
    try {
      const role = await this.roleRepository.findOneOrFail({ id });
      await this.roleRepository.delete(role);
      return role;
    } catch (error) {
      throw new Error(error);
    }
  }
}
