import { BaseEntity } from 'src/share/entities';
import { IDistrictsEntity } from '../interface-entities';
import { Cities } from './cities.entity';

export class Districts extends BaseEntity implements IDistrictsEntity {
  name: string;
  city: Cities;
}
