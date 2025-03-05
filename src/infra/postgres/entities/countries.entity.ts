import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../share/infra/entities';
import { ICountriesEntity } from '../../../share/modules/address/domain/interface-entities';

@Entity()
export class Countries extends BaseEntity implements ICountriesEntity {
  @Property()
  name!: string;

  @Property({ unique: true })
  isoCode!: string; // Unique country code (e.g., "VN" for Vietnam)

  @Property()
  fullName!: string; // Optional full official name

  @Property()
  phoneCode!: string; // International phone code (e.g., "+84" for Vietnam)
}
