import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomRouterModule } from './routers';
import { MongooseConfigModule } from './infra/mongoo/mongoose';
import { MikroOrmConfigModule } from './infra/postgres/mikro';

@Module({
  imports: [
    MikroOrmConfigModule,
    MongooseConfigModule,
    CustomRouterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
