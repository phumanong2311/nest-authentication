import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/modules/user-management/domain/entities'; // Replace with appropriate User schema if needed

@Schema({ timestamps: true }) // Timestamps will add `createdAt` and `updatedAt` fields
export class UserInfo extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User; // Reference to the User entity

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
