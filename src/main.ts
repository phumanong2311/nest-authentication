import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  app.setGlobalPrefix('/');
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
}
bootstrap();
