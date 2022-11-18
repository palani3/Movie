import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Counter';
import HeroSection from './HeroSection';
import MovieCard from './Card/MovieCard';


export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>


    <h1>This is the home page</h1>
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
    <Link to="about">Click to view our about page</Link>
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
      <MovieCard/>
  


      


  </div>
  )
}
