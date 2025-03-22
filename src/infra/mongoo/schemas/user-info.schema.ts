import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/infra/postgres/entities';

@Schema({ timestamps: true }) // Timestamps will add `createdAt` and `updatedAt` fields
export class UserInfo extends Document {
  @Prop()
  id: number;

  @Prop()
  createdAt: number;

  @Prop()
  updatedAt: number;

  @Prop({ nullable: true })
  createdBy?: string;

  @Prop({ nullable: true })
  updatedBy?: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User; // Reference to the User entity

  @Prop()
  firstName!: string;

  @Prop()
  lastName!: string;

  @Prop()
  phoneNumber!: string;

  @Prop({ nullable: true })
  dateOfBirth?: number;

  @Prop({ default: false })
  isActive: boolean = false;

  @Prop({ default: false })
  isEmailVerified: boolean = false;

  @Prop({ default: false })
  isPhoneVerified: boolean = false;

  @Prop({ nullable: true })
  avatarUrl?: string;

  @Prop({ nullable: true })
  provider?: string;

  @Prop({ nullable: true, unique: true })
  providerId?: string;

  @Prop({ nullable: true, default: false })
  isSocialLogin?: boolean = false;

  @Prop({ nullable: true })
  authProviderToken?: string;

  @Prop()
  ipAddress?: string;

  @Prop()
  browser?: string;

  @Prop()
  operatingSystem?: string;

  @Prop()
  version?: string;

  @Prop()
  platform?: string;

  @Prop()
  source?: string;

  @Prop()
  deviceType?: string;
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfo);
