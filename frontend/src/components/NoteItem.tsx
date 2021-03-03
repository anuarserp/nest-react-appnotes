import React from "react";
import { Props } from "../interfaces/notes.interface";

function NoteItem(props: Props) {
   const { note } = props;

   return (
      <div
         className="relative mx-2 mb-3 flex-1 transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out
    bg-white border border-red-400 py-4 px-6 rounded-xl tracking-wide shadow-lg"
      >
         <div className="pb-12">
            <div id="header" className="flex items-center mb-4">
               {note.imgUrl ? (
                  <img
                     alt="avatar"
                     className="w-20 rounded-full border-2 border-gray-300"
                     src={note.imgUrl}
                  />
               ) : (
                  <img
                     alt="avatar"
                     className="w-20 rounded-full border-2 border-gray-300"
                     src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"
                  />
               )}
               <div id="header-text" className="leading-5 ml-6 sm">
                  <h4 id="name" className="text-xl font-semibold">
                     {note.name}
                  </h4>
                  <h5
                     id="tag"
                     className="font-semibold text-blue-600 flex flex-wrap"
                  >
                     {note.tags.map((tag) => {
                        return (
                           <a href="#" className="mr-1">
                              {tag.toUpperCase()}
                           </a>
                        );
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
         <div className="flex fixed bottom-0 right-0 m-2">
            <button className="inline-block uppercase p-4 items-center flex  bg-green-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full m-1 w-12 h-12">
               <i className="fas fa-check"></i>
            </button>
            <button className="inline-block uppercase items-center p-4 flex bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full m-1 w-12 h-12">
               <i className="fas fa-edit"></i>
            </button>
            <button className="inline-block uppercase p-4 items-center flex  bg-red-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full m-1 w-12 h-12">
               <i className="fas fa-trash"></i>
            </button>
         </div>
      </div>
   );
}

export default NoteItem;
