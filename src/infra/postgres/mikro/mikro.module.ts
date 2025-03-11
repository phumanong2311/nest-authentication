import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from '../../../config/config.schema';
import { BaseRepository, UserRepository } from '../repositories';
import { config } from './mikro-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    ,
    MikroOrmModule.forRootAsync(config),
  ],
  providers: [UserRepository, BaseRepository],
  exports: [MikroOrmModule, UserRepository, BaseRepository],
})
export class MikroOrmConfigModule {}
