import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Role, User } from '../entities';
import { BaseRepository, UserRepository } from '../repositories';
import config from './mikro-orm.config';

@Module({
  imports: [MikroOrmModule.forRoot(config), MikroOrmModule.forFeature([User, Role])],
  providers: [UserRepository, BaseRepository],
  exports: [MikroOrmModule, UserRepository, BaseRepository],
})
export class MikroOrmConfigModule {}
