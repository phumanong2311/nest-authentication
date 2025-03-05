import { BaseEntity } from 'src/share/entities';
import { IAddressesEntity } from '../interface-entities';
import { Cities } from './cities.entity';
import { Countries } from './countries.entity';
import { Districts } from './districts.entity';
import { States } from './states.entity';

export class Addresses extends BaseEntity implements IAddressesEntity {
  street: string;
  zip_code?: string; // Postal code or ZIP code
  district: Districts;
  city: Cities;
  state: States;
  country: Countries;
  additional_info?: string; // Optional: extra info like apartment, floor, etc.
}
