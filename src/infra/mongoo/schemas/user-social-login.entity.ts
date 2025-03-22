import { Entity } from '@mikro-orm/core';
import { Prop } from '@nestjs/mongoose';
import { User } from '../../postgres/entities/user.entity';

@Entity()
export class UserSocialLogin extends Document {
  @Prop()
  id: number;

  @Prop()
  createdAt: number;

  @Prop()
  updatedAt: number;

  @Prop({ nullable: true })
  createdBy?: string;

  @Prop({ nullable: true })
  updatedBy?: string;

  @Prop()
  @Prop(() => User)
  user!: User;

  @Prop({ nullable: true })
  provider?: string;

  @Prop({ nullable: true })
  providerId?: string;

  @Prop({ nullable: true })
  isSocialLogin?: boolean;

  @Prop({ nullable: true })
  authProviderToken?: string;
}
