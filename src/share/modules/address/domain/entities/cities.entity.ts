import { BaseEntity } from 'src/share/entities';
import { ICitiesEntity } from '../interface-entities';
import { States } from './states.entity';

export class Cities extends BaseEntity implements ICitiesEntity {
  name: string;
  state: States;
  population?: number;
  area?: string; // Optional: area in square kilometers
}
