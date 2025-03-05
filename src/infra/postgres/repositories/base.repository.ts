import {
  EntityName,
  FilterQuery,
  SqlEntityManager,
  SqlEntityRepository,
} from '@mikro-orm/postgresql';
import { RemoveIDInEntityType } from 'src/types';

export class BaseRepository<T extends object> extends SqlEntityRepository<T> {
  constructor(em: SqlEntityManager, entityName: EntityName<T>) {
    super(em, entityName);
  }

  async getById(id: number): Promise<T> {
    return this.findOneOrFail({ id } as FilterQuery<T>);
  }

  async getAll() {
    return this.findAll();
  }

  async createAndSave(_entity: RemoveIDInEntityType<T>): Promise<T> {
    try {
      const entity = await this.create(_entity as T);
      await this.em.persistAndFlush(_entity);
      await this.em.refresh(entity);
      return entity;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, _entity: RemoveIDInEntityType<T>): Promise<T> {
    try {
      const entity = await this.getById(id);
      if (!entity) throw new Error(`User with id ${id} not found`);
      this.em.assign(entity, _entity as any);
      await this.em.flush();
      await this.em.refresh(entity);
      return entity;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(entity: T): Promise<void> {
    return await this.em.removeAndFlush(entity);
  }
}
