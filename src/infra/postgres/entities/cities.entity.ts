import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../share/infra/entities';
import { ICitiesEntity } from '../../../share/modules/address/domain/interface-entities';
import { States } from './states.entity';

@Entity()
export class Cities extends BaseEntity implements ICitiesEntity {
  @Property()
  name!: string;

  @ManyToOne(() => States)
  state!: States; // Foreign key relationship to the States entity

  @Property({ nullable: true })
  population?: number; // Optional population data

  @Property({ nullable: true })
  area?: string; // Optional area in square kilometers
}
