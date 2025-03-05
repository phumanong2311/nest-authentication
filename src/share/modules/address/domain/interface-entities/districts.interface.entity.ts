import { IBaseEntity } from 'src/share/interface-entity';
import { Cities } from '../entities/cities.entity';

export interface IDistrictsEntity extends IBaseEntity {
  name: string;
  city: Cities;
}
