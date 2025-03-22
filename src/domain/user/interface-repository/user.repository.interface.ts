import { Email } from 'src/share/dto/value-object';
import { DomainUserEntity } from '../domain-entities';

export interface IUserRepository {
  createUser(user: Omit<DomainUserEntity, 'id'>): Promise<DomainUserEntity>;
  getAll(): Promise<DomainUserEntity[]>;
  getById(id: number): Promise<DomainUserEntity>;
  getByEmail(emailOrUsername: string): Promise<DomainUserEntity>;
  getListPagination(
    orderBy?: any,
    limit?: number,
    offset?: number,
  ): Promise<DomainUserEntity[]>;
  update(
    id: number,
    user: Partial<DomainUserEntity>,
  ): Promise<DomainUserEntity>;
  delete(user: DomainUserEntity): Promise<void>;
}
