import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type PeriodsDocument = HydratedDocument<Periods>;
@Schema()
export class Periods extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  startYear: number;

  @Prop( { required: true } )
  endYear: number;

  @Prop( { required: true } )
  description: string;

  @Prop([String])
  keyEvents: string[];

  @Prop( { required: true } )
  culturalSignificance: string;

  @Prop( { required: true } )
  politicalStructure: string;

  @Prop({ default: Date.now } )
  createdAt: Date;

  @Prop( { default: Date.now } )
  updatedAt: Date;

  @Prop( { default: Date.now } )
  finalizedAt: Date;
  
}

export const PeriodsSchema = SchemaFactory.createForClass(Periods);