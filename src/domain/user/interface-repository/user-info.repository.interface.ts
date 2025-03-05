import { UserInfo } from "../entities";

export interface IUserInfoRepository {
  findByUserId(userId: string): Promise<UserInfo>;
  createAndSave(userInfo: UserInfo): Promise<UserInfo>;
  update(userInfo: UserInfo): Promise<UserInfo>;
  delete(id: string): Promise<void>;
}
