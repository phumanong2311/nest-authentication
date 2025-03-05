import { Module } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisService } from './redis.service';

@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS',
      useValue: new Redis({
        host: 'localhost',
        port: 6379,
      }),
    },
  ],
  exports: ['REDIS', RedisService]
})
export class RedisModule {}
