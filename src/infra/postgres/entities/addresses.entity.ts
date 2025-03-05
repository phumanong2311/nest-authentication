import { ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../share/infra/entities';
import { IAddressesEntity } from '../../../share/modules/address/domain/interface-entities';
import { Cities } from './cities.entity';
import { Countries } from './countries.entity';
import { Districts } from './districts.entity';
import { States } from './states.entity';

export class Addresses extends BaseEntity implements IAddressesEntity {
  @Property()
  street!: string;

  @Property({ nullable: true })
  zip_code?: string; // Postal code or ZIP code

  @ManyToOne(() => Districts)
  district!: Districts; // Optional: Links to Districts entity

  @ManyToOne(() => Cities)
  city!: Cities; // Links to Cities entity

  @ManyToOne(() => States)
  state!: States; // Links to States entity

  @ManyToOne(() => Countries)
  country!: Countries; // Links to Countries entity

  @Property({ nullable: true })
  additional_info?: string; // Optional: Extra info like apartment, floor, etc.
}
