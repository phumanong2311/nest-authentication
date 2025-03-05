import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { IUserSocialLogin } from '../../../domain/user/domain/interface-entities';
import { BaseEntity } from '../../../share/infra/entities';
import { User } from './user.entity';

@Entity()
export class UserSocialLogin extends BaseEntity implements IUserSocialLogin {
  @ManyToOne(() => User)
  user!: User;

  @Property({ nullable: true })
  provider?: string;

  @Property({ nullable: true })
  providerId?: string;

  @Property({ nullable: true })
  isSocialLogin?: boolean;

  @Property({ nullable: true })
  authProviderToken?: string;
}
