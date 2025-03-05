import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../share/infra/entities';
import { IStatesEntity } from '../../../share/modules/address/domain/interface-entities';
import { Countries } from './countries.entity';
@Entity()
export class States extends BaseEntity implements IStatesEntity {
  @Property()
  name!: string;

  @Property()
  code!: string; // Optional state or province code (e.g., "CA" for California)

  @ManyToOne(() => Countries)
  country!: Countries; // Foreign key relationship to the Countries entity
}
