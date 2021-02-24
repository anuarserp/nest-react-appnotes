import React, { useEffect, useState } from "react";
import { Note } from "../interfaces/notes.interface";
import { getNotes } from "../services/notes.services";

function NoteList() {
   const [notes, setNotes] = useState<Note[]>([]);
   const loadNotes = async () => {
      const res = await getNotes();
      setNotes(res.data);
      console.log(res.data.);
   };

   useEffect(() => {
      loadNotes();
   }, []);
   return (
      <div>
         <div className="min-h-screen flex justify-center">
            <div className="mt-4">
               <div className="grid grid-cols-4 gap-4">
                  {/*notes.map((note) => {
                     return (
                        <NoteItem
                           loadNotes={loadNotes}
                           key={note._id}
                           note={note}
                        />
                     );
                  })*/}
               </div>
            </div>
         </div>
      </div>
   );
}

export default NoteList;
