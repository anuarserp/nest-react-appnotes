import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoteDocument = Note & Document;

@Schema({ timestamps: true })
export class Note {
   @Prop({ required: true })
   name: string;

   @Prop({ required: true })
   description: string;

   @Prop([String])
   tags: string[];

   @Prop({ default: false })
   done: boolean;

   @Prop({ required: false, default: null })
   imgUrl: string;

   updatedAt: Date;
   createdAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
