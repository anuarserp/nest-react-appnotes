import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { NotesModule } from "./notes/notes.module";

@Module({
   imports: [
      MongooseModule.forRoot("mongodb://localhost/notes-app"),
      NotesModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
