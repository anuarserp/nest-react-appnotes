export interface Note {
   description: string;
   tags: string[];
   name: string;
   imgUrl: string;
   _id?: string;
}

export interface Props {
   note: Note;
   loadNotes: () => void;
}

export interface Params {
   id?: string;
}
