export interface Note {
   description: string;
   tags: string[];
   name: string;
   url: string;
   _id?: string;
}

export interface Props {
   note: Note;
   loadNotes: () => void;
}
