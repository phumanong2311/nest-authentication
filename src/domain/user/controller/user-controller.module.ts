import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../services';
import { UserRepository } from 'src/infra/postgres/repositories';
import { AuthService } from 'src/domain/auth/service';
import { RedisModule, RedisService } from 'src/infra/redis';
import { EmailRateLimiterService } from 'src/share/service';

@Module({
  imports: [forwardRef(() => RedisModule)],
  controllers: [UserController],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    UserService,
    AuthService,
    RedisService,
    EmailRateLimiterService,
  ],
  exports: ['IUserRepository'],
})
export class UserControllerModule {}
