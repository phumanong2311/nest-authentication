import { BaseEntity } from 'src/share/entities';
import { ICountriesEntity } from '../interface-entities';

export class Countries extends BaseEntity implements ICountriesEntity {
  name: string;
  isoCode: string; //unique
  fullName: string;
  phoneCode: string; // International phone code (e.g., +84 for Vietnam)
}
