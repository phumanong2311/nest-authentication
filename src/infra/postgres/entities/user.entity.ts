import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { NAME_REGEX } from 'src/common';
import { BaseEntity } from '../../../share/infra/entities';
import { Role } from './role.entity';

@Entity()
export class User extends BaseEntity {
  @Property({ unique: true, columnType: 'varchar', length: 255 })
  @IsString()
  @IsEmail()
  @Length(5, 255)
  public email!: string;

  @Property({ unique: true })
  @IsString()
  @Length(3, 100)
  @Matches(NAME_REGEX, {
    message: 'Name must not have special characters',
  })
  public username!: string;

  @Property()
  public password!: string;

  @ManyToMany(() => Role, (role) => role.userIds)
  public roleIds = new Collection<Role>(this);
}
