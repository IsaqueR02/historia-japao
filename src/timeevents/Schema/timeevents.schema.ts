import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type TimeEventDocument = HydratedDocument<TimeEvent>;
@Schema()
export class TimeEvent extends Document {
  @Prop( { required: true } )
  title: string;

  @Prop( { required: true } )
  date: Date;

  @Prop( { required: true } )
  description: string;

  @Prop( { required: true } )
  location: string;

  @Prop( { required: true } )
  category: string;

  @Prop( { required: true } )
  isHistorical: boolean;

  @Prop( { required: true } )
  importance: number;

  @Prop( { required: true } )
  era: string;

  @Prop( [String] )
  tags: string[];

  @Prop( { required: true } )
  source: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const TimeEventSchema = SchemaFactory.createForClass(TimeEvent);
