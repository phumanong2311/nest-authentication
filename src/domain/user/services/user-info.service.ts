import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInfo } from 'src/infra/mongoo/schemas';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo.name) private readonly userInfoModel: Model<UserInfo>,
  ) {}

  async createUserInfo(userId: string, data: Partial<UserInfo>) {
    const userInfo = new this.userInfoModel({
      user: userId,
      ...data,
    });
    return await userInfo.save();
  }

  async findUserInfoByUserId(userId: string) {
    return this.userInfoModel.find({ user: userId }).exec();
  }
}
