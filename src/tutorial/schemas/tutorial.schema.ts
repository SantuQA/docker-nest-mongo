import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TutorialDocument = Tutorial & Document;

@Schema({ timestamps: true })
export class Tutorial {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  published: boolean;
}

export const TutorialSchema = SchemaFactory.createForClass(Tutorial);
