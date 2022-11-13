import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Register/>
      <Home/>
      <About/>
      {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes> */}
    </div>
  );
}
