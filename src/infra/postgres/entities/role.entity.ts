import { Entity, Property } from "@mikro-orm/core";
import { IRoleEntity } from "src/modules/user-management/domain/interface-entities";
import { BaseEntity } from '../../../share/infra/entities';

@Entity()
export class Role extends BaseEntity implements IRoleEntity {
  @Property()
  role!: string;

  @Property({ nullable: true })
  scope?: string;
}
