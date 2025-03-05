import { Module } from '@nestjs/common';
import { PublicRouter } from './public-router.module';

@Module({})
export class CustomRouterModule {
  static forRoot() {
    return {
      module: CustomRouterModule,
      imports: [PublicRouter],
      provider: [],
      controller: []
    };
  }
}
