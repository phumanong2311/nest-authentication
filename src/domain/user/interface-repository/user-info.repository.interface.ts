import { DomainUserInfoEntity } from '../domain-entities';

export interface IUserInfoRepository {
  findByUserId(userId: string): Promise<DomainUserInfoEntity>;
  createAndSave(userInfo: DomainUserInfoEntity): Promise<DomainUserInfoEntity>;
  update(userInfo: DomainUserInfoEntity): Promise<DomainUserInfoEntity>;
  delete(id: string): Promise<void>;
}
