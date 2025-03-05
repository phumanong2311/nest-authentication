import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RoleType, ScopeRoleType } from 'src/types';
import { Role } from '../entities';

export class RoleSeeder extends Seeder<Dictionary> {
  async run(em: EntityManager): Promise<void> {
    const role1 = em.create(Role, {
      role: RoleType.ADMINISTRATOR,
      scope: ScopeRoleType.ADMIN,
    });
    const role2 = em.create(Role, {
      role: RoleType.EDITOR,
      scope: ScopeRoleType.EDIT,
    });
    const role3 = em.create(Role, {
      role: RoleType.OPERATOR,
      scope: ScopeRoleType.OPERATE,
    });

    await em.persistAndFlush([role1, role2, role3]);
    console.log('Seeding completed!');
  }
}
