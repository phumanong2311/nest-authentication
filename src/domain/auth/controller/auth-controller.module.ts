import {
  forwardRef,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { MikroOrmConfigModule } from 'src/infra/postgres/mikro/mikro.module';
import { RedisService } from 'src/infra/redis';
import { RedisModule } from 'src/infra/redis/redis.module';
import { UserControllerModule } from 'src/domain/user/controller/user-controller.module';
import { UserService } from 'src/domain/user/services';
import { EmailRateLimiterService } from 'src/share/service/emailRateLimiterService';
import { AuthMiddleware } from '../../../share/middleware/auth.middleware';
import { AuthService } from '../service/auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MikroOrmConfigModule,
    forwardRef(() => UserControllerModule),
    forwardRef(() => RedisModule),
  ],
  providers: [AuthService, UserService, RedisService, EmailRateLimiterService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthControllerModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: '/auth/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
