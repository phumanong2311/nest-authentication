import { BaseEntity } from 'src/share/entities';
import { IStatesEntity } from '../interface-entities';
import { Countries } from './countries.entity';

export class States extends BaseEntity implements IStatesEntity {
  name: string;
  code: string; //State or province code (e.g., CA for California)
  country: Countries;
}
