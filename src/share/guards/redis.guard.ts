import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisGuard implements CanActivate {
  constructor(@Inject('REDIS') private readonly redis: Redis) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const email = request.body.email;
    const storedValue = await this.redis.get(email);

    if (storedValue === null) {
      return true;
    } else if (storedValue === 'locked') {
      const remainingTime = await this.redis.ttl(email);
      throw new HttpException(
        `User is locked. Please try again in ${remainingTime} seconds.`,
        HttpStatus.FORBIDDEN,
      );
    } else {
      return true;
    }
  }
}
