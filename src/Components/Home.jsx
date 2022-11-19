import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Counter';
import HeroSection from './HeroSection';
import MovieCard from './Card/MovieCard';

import {HiMenuAlt3} from 'react-icons/hi'
import {MdOutlineDashboard} from 'react-icons/md'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {FiMessageSquare,FiFolder,FiShoppingCart} from 'react-icons/fi'
import {TbReportAnalytics} from 'react-icons/tb'
import {RiSettings4Line} from 'react-icons/ri'



export default function Home() {
  const [open ,setopen] = useState(true)
  const Menus =[
    {name:"Dashboard",link:"/",icon:MdOutlineDashboard},
    {name:"User",link:"/",icon:AiOutlineUser},
    {name:"Message",link:"/",icon:FiMessageSquare},
    {name:"Analytics",link:"/",icon:TbReportAnalytics},
    {name:"File Manager",link:"/",icon:FiFolder},
    {name:"Cart",link:"/",icon:FiShoppingCart},
    {name:"Saved",link:"/",icon:AiOutlineHeart},
    {name:"Setting",link:"/",icon:RiSettings4Line},
]
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <section className='flex gap-6  bg-red-800'>
      <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72':'w-16'} duration-500 text-gray-100 px-4`}>
        <div className='py-3 flex justify-end'> 
        <HiMenuAlt3 size={26} className="cursor-pointer"
         onClick={()=>{setopen(!open)}}/> 
          {/* <p className='text-gray-50'>sasdasdasdsadss</p> */}
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {
          Menus?.map((menu ,i)=>(
            <Link to={menu?.link} key={i} className=" group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-900 rounded-md">
            <div>
              {React.createElement(menu?.icon,{size:"20"})}
            </div>
            <h2 style={{transitionDelay:`${i+3}00ms`}} className={`whitespace-pre duration-500 ${!open ? "opacity-0 translate-x-28 overflow-hidden":""}`}>{menu?.name}
            </h2>
            <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold
            whitespace-pre text-gray-900 rounded-md drop-shadow-lg
            px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
{menu?.name}
            </h2>
          
          </Link>
          ))
         
            }
        </div>
     

      </div>
    <div className="m-3 text-xl font-semibold text-gray-900 bg-amber-800">
      Hello palani
    </div>
  </section>


 


  )
}



 // <div>


    {/* <h1>This is the home page</h1> */}
    {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}
    {/* <Link to="about">Click to view our about page</Link>
    <Link to="contact">Click to view our contact page</Link>


    <div className='sm:px-28 text-center'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        className='bg-sky-500 hover:bg-red-700'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className='sm:text-center'>palani</div>
      <MovieCard/> */}
  


      


  {/* </div> */}
  