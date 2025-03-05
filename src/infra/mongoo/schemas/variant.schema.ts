import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Variant extends Document {
  @Prop({ required: true })
  itemId: string; // Reference to the item in PostgreSQL

  @Prop()
  color: string;

  @Prop()
  size: string;

  @Prop()
  additionalAttributes: Record<string, any>; // Flexible attributes for variant specifics
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
