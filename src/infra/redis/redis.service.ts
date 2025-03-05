import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { Email } from 'src/share/dto/value-object';

@Injectable()
export class RedisService {
  constructor(
    @Inject('REDIS') private readonly redis: Redis,
  ) {}
  async get(key: string) {
    return await this.redis.get(key);
  }
  async set(key: string, value: any, mode?: any, time?: any) {
    return await this.redis.set(key, value, mode, time);
  }
  async getTime(key: string) {
    return await this.redis.ttl(key);
  }
}
