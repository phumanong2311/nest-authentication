import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class EmailRateLimiterService {
  constructor(@Inject('REDIS') private readonly redis: Redis) {}

  async canSendEmail(mail: string): Promise<boolean> {
    const lastSentAt = await this.redis.get(`email:lastSentAt:${mail}`);
    const sentCount = await this.redis.get(`email:sentCount:${mail}`);

    if (lastSentAt && Date.now() - Number(lastSentAt) < 60 * 1000) {
      // If the last email was sent less than 1 minute ago, return false
      return false;
    }

    if (sentCount && Number(sentCount) >= 5) {
      // If the user has already sent 5 emails today, return false
      return false;
    }

    // Update Redis
    const now = Date.now();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    await this.redis.set(`email:lastSentAt:${mail}`, now.toString());
    await this.redis.set(`email:sentCount:${mail}`, (Number(sentCount) + 1).toString(), 'EX', Math.floor((tomorrow.getTime() - now) / 1000));

    return true;
  }
}
