import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorSchema, UserInfoSchema, VariantSchema } from '../schemas';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mgwarehouse:warehouse@localhost:27017/warehouse'),
    MongooseModule.forFeature([
      { name: 'Variant', schema: VariantSchema },
      { name: 'Color', schema: ColorSchema },
      { name: 'UserInfo', schema: UserInfoSchema }
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseConfigModule {}
