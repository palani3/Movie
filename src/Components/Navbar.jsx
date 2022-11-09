import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
    const [open ,setopen] = useState(false)
  return (
    <header className="border-b border-gray-300 py-2">
      <div className="flex items-center justify-between container px-1 mx-auto flex-wrap w-full">
        <div className="flex justify-between items-center">
          <img className="w-12 h-12 mr-2 rounded-full" src={logo} alt="logo" />
          {/* <p className="text-sm font-semibold">Movie</p> */}
        </div>
        <FaBars className="lg:hidden block h-6 w-6 cursor-pointer" onClick={()=> {setopen(!open)}}/>
        <nav  className={`${open ? "block" :"hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
          <ul className="lg:flex lg:justify-between text-base text-gray-700">
            <li>
              <a className="lg:px-5 py-2 font-semibold hover:text-blue-700 block" href="/">Home</a>
            </li > 
            <li>  
              <a className="lg:px-5 py-2 font-semibold hover:text-blue-700 block" href="/">Movies</a>
            </li>
            <li> 
              <a className="lg:px-5 py-2 font-semibold hover:text-blue-700 block" href="/">Search</a>
            </li>
            <li> 
              <a className="lg:px-5 py-2 text-white bg-blue-700 rounded-full block text-center" href="/">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}