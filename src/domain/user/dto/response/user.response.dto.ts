export class UserResponseDto {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  isActive: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  avatarUrl?: string;
  provider?: string;
  providerId?: string;
  isSocialLogin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
