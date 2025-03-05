import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../entities';

export class UserSeeder extends Seeder<Dictionary> {
  async run(em: EntityManager): Promise<void> {
    const user = em.create(User, {
      firstName: 'Phu',
      lastName: 'Ma',
      email: 'phu@gmail.com',
      username: 'phu@gmail.com',
      password: '12345678',
      phoneNumber: '123456789',
      isActive: true,
      isEmailVerified: true,
      role: 'admin'
    });

    await em.persistAndFlush([user]);
    console.log('Seeding completed!');
  }
}
