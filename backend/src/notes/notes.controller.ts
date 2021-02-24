import {
   Body,
   Controller,
   Delete,
   Get,
   HttpStatus,
   Param,
   Post,
   Put,
   Res,
} from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { EditNoteDto } from "./dto/edit-note.dto";
import { NotesService } from "./notes.service";

@Controller("notes")
export class NotesController {
   constructor(private readonly notesService: NotesService) {}
   /* Obtener todas las notas
    */
   @Get()
   async getNotes(@Res() res) {
      const data = await this.notesService.findAll();
      return res.status(HttpStatus.OK).json(data);
   }
   @Get(":id")
   async getOneNote(@Param("id") id: string) {
      return await this.notesService.findOne(id);
   }
   @Post("/create")
   async createNote(@Res() res, @Body() createNoteDto: CreateNoteDto) {
      const data = await this.notesService.createNote(createNoteDto);
      return res.status(HttpStatus.OK).json(data);
   }

   @Put(":id")
   async editOne(@Param("id") id: string, @Body() dto: EditNoteDto) {
      const data = await this.notesService.updateNote(id, dto);
      return data;
   }

   @Delete(":id")
   async deleteOne(@Param("id") id: string) {
      const data = await this.notesService.deleteNote(id);
      return data;
   }
}
