
import { useState, useEffect } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Home from "./Home";
import NewEventForm from "./NewEventForm";
import EventLister from "./EventLister";
import LogIn from "./LogIn";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <NavBar />
        <Routes>
          <Route path ='/login'
          element={<LogIn />
          }
          />
          
          <Route path='/event-list'
          element={
            <EventLister />
          } 
          />

          <Route exact path='/' 
          element={
            <Home />
          }
          />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
