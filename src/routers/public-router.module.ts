import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthControllerModule } from 'src/domain/auth/controller';
import { UserControllerModule } from 'src/domain/user/controller';

@Module({
  imports: [
    UserControllerModule,
    AuthControllerModule,
    RouterModule.register([
      {
        path: '/user',
        module: UserControllerModule,
      },
      {
        path: '/auth',
        module: AuthControllerModule,
      },
    ]),
  ],
})
export class PublicRouter {}
