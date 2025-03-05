import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { IUserEntity } from '../../../domain/user/domain/interface-entities';
import { BaseEntity } from '../../../share/infra/entities';
import { Role } from './role.entity';

@Entity()
export class User extends BaseEntity implements IUserEntity {
  @Property({ unique: true })
  email!: string;

  @Property({ unique: true })
  username!: string;

  @Property()
  password!: string;

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  phoneNumber!: string;

  @Property({ type: 'date', nullable: true })
  dateOfBirth?: Date;

  @Property({ default: false })
  isActive: boolean = false;

  @Property({ default: false })
  isEmailVerified: boolean = false;

  @Property({ default: false })
  isPhoneVerified: boolean = false;

  @Property({ nullable: true })
  avatarUrl?: string;

  @Property({ nullable: true })
  provider?: string;

  @Property({ nullable: true, unique: true })
  providerId?: string;

  @Property({ nullable: true, default: false })
  isSocialLogin?: boolean = false;

  @Property({ nullable: true })
  authProviderToken?: string;

  @Property({ nullable: true })
  createdBy?: number;

  @ManyToOne(() => Role)
  role: Role;
}
