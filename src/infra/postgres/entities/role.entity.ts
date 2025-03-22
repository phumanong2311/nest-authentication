import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../share/infra/entities';
import { User } from './user.entity';

@Entity()
export class Role extends BaseEntity {
  @Property()
  role!: string;

  @Property({ nullable: true })
  scope?: string;

  @ManyToMany(() => User, (user) => user.roleIds)
  userIds = new Collection<User>(this);
}
