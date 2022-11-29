import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Newmovies from "./pages/Newmovies";
import PrivateRoute from "./utilis/PrivateRoute";


export default function App() {
  return (
    <div className="App">
      {/* <Router>   */}
            <Routes>
        <Route path="/" element={ <Navbar/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Register" element={ <Register/> } />
        <Route element={<PrivateRoute/>}>
        <Route path="about" element={ <About/> } />
        <Route path="Newmovies" element={ <Newmovies/> } />
        </Route>

        
        <Route path="contact" element={ <Contact/> } />
        
      </Routes>
      {/* </Router> */}

            {/* <Navbar/> */}
      {/* <Login/>
      <Register/>
      <Home/>
      <About/> */}
      
    </div>
  );
}
