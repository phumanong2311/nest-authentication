import { IBaseEntity } from 'src/share/interface-entity';
import { States } from '../entities/states.entity';

export interface ICitiesEntity extends IBaseEntity {
  name: string;
  state: States;
  population?: number;
  area?: string; // Optional: area in square kilometers
}
