import React from "react";

function NoteAdd() {
   return (
      <div>
         <div
            className="relative mx-2 mb-3 flex justify-center  transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out
                        bg-white border-2 border-gray-300 py-4 px-6 rounded-xl tracking-wide shadow-lg"
         >
            <a
               href="#"
               className="p-6 bg-gray-300 text-white max-w-max shadow-sm hover:shadow-lg rounded-full"
            >
               <i className="fas fa-plus-circle fa-8x"></i>
            </a>
         </div>
      </div>
   );
}

export default NoteAdd;
