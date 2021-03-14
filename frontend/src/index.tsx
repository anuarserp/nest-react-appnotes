import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <div className="bg-gray-100">
            <div className="container mx-auto">
               <Switch>
                  <Route exact path="/" component={NoteList} />
                  <Route exact path="/newnote" component={NoteForm} />
                  <Route exact path="/update/:id" component={NoteForm} />
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
