import axios from "axios";
import { Note } from "../interfaces/notes.interface";

export const getNotes = async () => {
   return await axios.get<Note[]>("http://localhost:4000/notes");
};

export const createNote = async (note: Note) => {
   return await axios.post("http://localhost:4000/videos", note);
};

export const getOneNote = async (id: string) => {
   return await axios.get<Note>(`http://localhost:4000/videos/${id}`);
};

export const updateNote = async (id: string, note: Note) => {
   return await axios.put<Note>(`http://localhost:4000/videos/${id}`, note);
};

export const deleteNote = async (id: string) => {
   return await axios.delete<Note>(`http://localhost:4000/videos/${id}`);
};
