import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { NAME_REGEX } from 'src/common';
import { BaseEntity } from '../../../share/infra/entities';
import { Role } from './role.entity';

@Entity()
export class UserInfo extends BaseEntity {
  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  phoneNumber!: string;

  @Property({ nullable: true })
  dateOfBirth?: number;

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
  createdBy?: string;

  @Property({ nullable: true })
  updatedBy?: string;

  @ManyToOne(() => Role)
  role: Role;
}
