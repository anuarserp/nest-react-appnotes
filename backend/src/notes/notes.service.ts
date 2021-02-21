import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Note, NoteDocument } from "./schema/notes.schema";
import { CreateNoteDto } from "./dto/create-note.dto";
import { EditNoteDto } from "./dto/edit-note.dto";

@Injectable()
export class NotesService {
   constructor(
      @InjectModel(Note.name) private noteModel: Model<NoteDocument>
   ) {}

   async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
      const createdNote = await new this.noteModel(createNoteDto);
      return await createdNote.save();
   }

   async findAll(): Promise<Note[]> {
      return this.noteModel.find();
   }
   async findOne(id: string): Promise<Note> {
      const note = await this.noteModel.findById(id);
      return note;
   }
   async deleteNote(id: string): Promise<Note> {
      const deletedNote = await this.noteModel.findByIdAndDelete(id);
      return deletedNote;
   }
   async updateNote(id: string, editNoteDto: EditNoteDto): Promise<Note> {
      const updateNote = await this.noteModel.findByIdAndUpdate(
         id,
         editNoteDto,
         {
            new: true,
         }
      );
      return updateNote;
   }
}
