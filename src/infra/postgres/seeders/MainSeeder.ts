import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { UserSeeder } from './UserSeeder';
import { RoleSeeder } from './RoleSeeder';

export class MainSeeder extends Seeder<Dictionary> {
  async run(em: EntityManager): Promise<void> {
    await new UserSeeder().run(em);
    await new RoleSeeder().run(em);
  }
}
