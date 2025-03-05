import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Color extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  hexCode: string; // Optional, for color representation
}

export const ColorSchema = SchemaFactory.createForClass(Color);
