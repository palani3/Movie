import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Redux/Counter";
import HeroSection from "./HeroSection";
import MovieCard from "./Card/MovieCard";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard,MdLocalMovies,MdSubscriptions } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {  GrLanguage} from "react-icons/gr";
import { FaLanguage } from "react-icons/fa";
import { FiMessageSquare, FiFolder, FiShoppingCart,FiSearch } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiSettings4Line ,RiMovie2Line} from "react-icons/ri";
import Newmovies from "../pages/Newmovies";



export default function Navbar() {
    // const [open ,setopen] = useState(false)
    const [open, setopen] = useState(false);
  const Menus = [
    { name: "New Movies", link: "/Newmovies", icon: RiMovie2Line },
    { name: "Trending Movies", link: "/", icon: MdLocalMovies },   
    { name: "Search Movies", link: "/", icon: FiSearch },
    { name: "Saved Movies", link: "/", icon: AiOutlineHeart },
    { name: "Language", link: "/", icon: FaLanguage },
    { name: "subscription", link: "/", icon: MdSubscriptions },
    { name: "User", link: "/Login", icon: AiOutlineUser },
    { name: "Cart", link: "/", icon: FiShoppingCart },  
    { name: "Setting", link: "/about", icon: RiSettings4Line },
  ];
  return (
    // <header className="border-b border-gray-300 py-1">
    //   <div className="flex items-center justify-between container px-1 mx-auto flex-wrap w-full">
    //     <div className="flex justify-between items-center">
    //       <img className="w-12 h-12 mr-2 rounded-full" src={logo} alt="logo" />
    //       {/* <p className="text-sm font-semibold">Movie</p> */}
    //     </div>
    //     <FaBars className="lg:hidden block h-6 w-6 cursor-pointer" onClick={()=> {setopen(!open)}}/>
    //     <nav  className={`${open ? "block" :"hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
    //       <ul className="lg:flex lg:justify-between text-base text-gray-700">
    //         <li>
    //         <Link to="/" className="lg:px-5 py-2 font-semibold hover:text-blue-700 block">Home</Link>
    //         </li > 
    //         <li>  
    //         <Link to="/"className="lg:px-5 py-2 font-semibold hover:text-blue-700 block" href="/">Movies</Link>
    //         </li>
    //         <li>  
    //         <Link to="/about"className="lg:px-5 py-2 font-semibold hover:text-blue-700 block" href="/">About</Link>
    //         </li>
    //         {/* <li> 
    //         <Link to="/"className="lg:px-5 py-2 font-semibold hover:text-blue-700 block" href="/">Search</Link>
    //         </li> */}
    //         <li> 
    //         <Link to="Login" className="lg:px-5 py-2 text-white bg-blue-700 rounded-full block text-center"> Login</Link>
    //         </li>
            
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <section className="flex  ">
      <div
      // w-48
        className={` min-h-screen ${open ? "w-48" : "w-10"} duration-500  px-2 pb-5`}
      >
        <div className="pb-3 flex justify-end ">
          {/* <HiMenuAlt3
            size={26}
            color={"red"}
           
            className="cursor-pointer fixed "
            // onClick={() => {
            //   setopen(!open);
            // }}
          /> */}
          {/* <p className='text-gray-50'>sasdasdasdsadss</p> */}
        </div>
        <div className="mt-4 flex flex-col gap-9  fixed">
          {Menus?.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className="  border-gray-900 group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-black hover:text-gray-50 rounded-md"
            >
              <div className="">{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 1}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open ? "opacity-0 translate-x-28 overflow-hidden" : ""
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-black font-semibold
            whitespace-pre text-gray-50 rounded-md drop-shadow-lg
            px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
