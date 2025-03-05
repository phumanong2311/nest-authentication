import { ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../../share/infra/entities';
import { IDistrictsEntity } from '../../../share/modules/address/domain/interface-entities';
import { Cities } from './cities.entity';

export class Districts extends BaseEntity implements IDistrictsEntity {
  @Property()
  name!: string;

  @ManyToOne(() => Cities)
  city!: Cities; // Foreign key relationship to the Cities entity
}
