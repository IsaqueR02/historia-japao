import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character extends Document {
    @Prop( { required: true } )
    name: string;

    @Prop( { required: true } )
    description: string;

    @Prop( { required: true } )
    period: string;

    @Prop( { required: true } )
    image: string;

    @Prop( { required: true } )
    birthDate: Date;

    @Prop( { required: true } )
    deathDate: Date;

    @Prop( { required: true } )
    achievements: string[];

    @Prop( { required: true } )
    historicalSignificance: string;

    @Prop( { required: true } )
    culturalImpact: string;

    @Prop( { required: true } )
    legacy: string;

    @Prop( { required: true } )
    createdAt: Date;

    @Prop( { required: true } )
    updatedAt: Date;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);