import axios from "axios";
import { Note } from "../interfaces/notes.interface";

export const getNotes = async () => {
   return await axios.get<Note[]>("http://localhost:4000/notes");
};
