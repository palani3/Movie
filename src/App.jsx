import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Newmovies from "./pages/Newmovies";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Register" element={ <Register/> } />

        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="Newmovies" element={ <Newmovies/> } />
      </Routes>
      {/* <Navbar/> */}
      {/* <Login/>
      <Register/>
      <Home/>
      <About/> */}
      
    </div>
  );
}
