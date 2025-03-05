import { IBaseEntity } from 'src/share/interface-entity';
import { Countries } from '../entities/countries.entity';

export interface IStatesEntity extends IBaseEntity {
  name: string;
  code: string; //State or province code (e.g., CA for California)
  country: Countries;
}
