import { User } from '../../entities';

export class UserInfoResponseDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  ipAddress?: string;
  browser?: string;
  operatingSystem?: string;
  version?: string;
  platform?: string;
  source?: string;
  deviceType?: string;
}
