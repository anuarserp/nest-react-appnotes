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
      const notes = await this.notesService.findAll();
      return res.status(HttpStatus.OK).json({
         message: "Peticion recibida satisfactoriamente",
         notes,
      });
   }
   @Get(":id")
   async getOneNote(@Param("id") id: string) {
      return await this.notesService.findOne(id);
   }
   @Post("/create")
   async createNote(@Res() res, @Body() createNoteDto: CreateNoteDto) {
      const note = await this.notesService.createNote(createNoteDto);
      return res.status(HttpStatus.OK).json({
         message: "Nota creada satisfactoriamente",
         note,
      });
   }

   @Put(":id")
   async editOne(@Param("id") id: string, @Body() dto: EditNoteDto) {
      const data = await this.notesService.updateNote(id, dto);
      return { message: "Nota actulizada satisfactoriamente", data };
   }

   @Delete(":id")
   async deleteOne(@Param("id") id: string) {
      const data = await this.notesService.deleteNote(id);
      return { message: "Nota eliminada satisfactoriamente", data };
   }
}
