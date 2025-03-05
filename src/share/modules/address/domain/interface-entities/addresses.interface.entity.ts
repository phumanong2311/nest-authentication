import { IBaseEntity } from 'src/share/interface-entity';
import { Cities } from '../entities/cities.entity';
import { Countries } from '../entities/countries.entity';
import { Districts } from '../entities/districts.entity';
import { States } from '../entities/states.entity';

export interface IAddressesEntity extends IBaseEntity {
  street: string;
  zip_code?: string; // Postal code or ZIP code
  district: Districts;
  city: Cities;
  state: States;
  country: Countries;
  additional_info?: string; // Optional: extra info like apartment, floor, etc.
}
