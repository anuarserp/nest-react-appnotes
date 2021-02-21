import { PartialType, OmitType } from "@nestjs/swagger";
import { CreateNoteDto } from "./create-note.dto";

export class EditNoteDto extends PartialType(
   OmitType(CreateNoteDto, ["tags"] as const)
) {}
