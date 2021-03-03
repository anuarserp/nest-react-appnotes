import React from "react";
import ReactDOM from "react-dom";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      <div className="bg-gray-100">
         <div className="container mx-auto">
            <NoteList />
         </div>
      </div>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
