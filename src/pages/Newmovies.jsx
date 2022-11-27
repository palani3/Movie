import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Trendingmovie from "../Components/Subpage/Trendingmovie";

export default function Newmovies() {
  const [data,setdata]=useState([]);

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setdata(res.data))
    console.log(data);
  },[])
  return (
    <section className=" bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <div className="flex">
          <div className="flex w-16 ">
            <Navbar />
          </div>
        </div>
        <div className=" w-full">
          <div className={jumbotron}>sadsads</div>
          <div className=" md:mx-5 mt-5   bg-yellow-900">
            <p className="bg-pink-800">New movies</p>
            <div className="flex flex-row">
              <div>01</div>
              <div>02</div>
              <div>03</div>
            </div>
          </div>
          <div className=" md:mx-5 mt-5   bg-red-900">
            <p className="bg-green-800">Trending movies</p>
            <div className="flex flex-row">
              <div>01</div>
              <div>02</div>
              <div>03</div>
            </div>
          </div>
          {data.map((data,index)=>(<p key={index}>{data.name}</p>))}
          
        </div>
      </div>
    </section>
  );
}
const jumbotron =
  " h-96 md:bg-yellow-800 lg:bg-red-900 lg:mt-2 md:mx-5 sm: sm:bg-green-700  ";
