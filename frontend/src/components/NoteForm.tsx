import React from "react";

function NoteForm() {
   return (
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
         <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
               <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                     <i className="far fa-sticky-note"></i>
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                     <h2 className="leading-relaxed">Crear una Nota</h2>
                     <p className="text-sm text-gray-500 font-normal leading-relaxed">
                        Introduce todos los campos
                     </p>
                  </div>
               </div>
               <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                     <div className="flex flex-col">
                        <label className="leading-loose">Nombre</label>
                        <input
                           type="text"
                           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           placeholder="Event title"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="leading-loose">Tags</label>
                        <input
                           type="text"
                           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           placeholder="#Tag"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="leading-loose">Url Imagen</label>
                        <input
                           type="text"
                           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           placeholder="Optional"
                        />
                     </div>
                     <div className="flex flex-col">
                        <label className="leading-loose">Descripción</label>
                        <textarea
                           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           placeholder="Describe esta nota"
                        />
                     </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                     <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                        <i className="fas fa-times mr-4"></i>Cancelar
                     </button>
                     <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                        Create
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NoteForm;
