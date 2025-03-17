import { Entity, Property } from '@mikro-orm/core';
import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { NAME_REGEX } from 'src/common';
import { BaseEntity } from '../../../share/infra/entities';

@Entity()
export class User extends BaseEntity {
  @Property({ unique: true, columnType: 'varchar', length: 255 })
  @IsString()
  @IsEmail()
  @Length(5, 255)
  email!: string;

  @Property({ unique: true })
  @IsString()
  @Length(3, 100)
  @Matches(NAME_REGEX, {
    message: 'Name must not have special characters',
  })
  username!: string;

  @Property()
  password!: string;
}
