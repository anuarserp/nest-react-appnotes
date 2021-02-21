import {
   IsString,
   IsBoolean,
   IsArray,
   IsOptional,
   IsDate,
} from "class-validator";

export class CreateNoteDto {
   @IsString()
   name: string;

   @IsString()
   description: string;

   @IsOptional()
   @IsString()
   imgUrl: string;

   @IsString({ each: true })
   @IsArray()
   tags: string[];

   @IsOptional()
   @IsBoolean()
   done: boolean;
}
