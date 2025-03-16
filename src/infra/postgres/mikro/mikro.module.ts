import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validationSchema } from '../../../config/config.schema';
import { BaseRepository, UserRepository } from '../repositories';
import { config } from './mikro-orm.config';

@Module({
  imports: [
    // when use ConfigModule of Nest, it load once when application run.
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dbName: configService.get<string>('DB_NAME'),
        user: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        ...config,
      }),
    }),
  ],
  providers: [UserRepository, BaseRepository],
  exports: [MikroOrmModule, UserRepository, BaseRepository],
})
export class MikroOrmConfigModule {}
