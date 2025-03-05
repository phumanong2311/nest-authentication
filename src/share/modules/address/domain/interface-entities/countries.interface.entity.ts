import { IBaseEntity } from 'src/share/interface-entity';

export interface ICountriesEntity extends IBaseEntity {
  name: string;
  isoCode: string; //unique
  fullName: string;
  phoneCode: string; // International phone code (e.g., +84 for Vietnam)
}
