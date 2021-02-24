import React from "react";
import { Props } from "../interfaces/notes.interface";

function NoteItem(props: Props) {
   const { note } = props;

   return (
      <div
         className="mx-2 mb-3 flex-1 transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out
    bg-white border-2 border-gray-300 py-4 px-6 rounded-xl tracking-wide shadow-lg"
      >
         <div id="header" className="flex items-center mb-4">
            {note.url ? (
               <img
                  alt="avatar"
                  className="w-20 rounded-full border-2 border-gray-300"
                  src={note.url}
               />
            ) : (
               <img
                  alt="avatar"
                  className="w-20 rounded-full border-2 border-gray-300"
                  src="https://t4america.org/wp-content/uploads/2016/10/Blank-User.jpg"
               />
            )}
            <div id="header-text" className="leading-5 ml-6 sm">
               <h4 id="name" className="text-xl font-semibold">
                  {note.name}
               </h4>
               <h5
                  id="job"
                  className="font-semibold text-blue-600 flex flex-wrap"
               >
                  {note.tags.map((tag) => {
                     return <div>{tag.toUpperCase()}</div>;
                  })}
               </h5>
            </div>
         </div>
         <div id="quote">
            <q className="italic text-gray-600">
               {note.description.slice(0, 50)}
            </q>
         </div>
      </div>
   );
}

export default NoteItem;
