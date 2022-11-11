import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function About() {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1 className='border-x-amber-700'></h1><h1>About {count}</h1></div>
  )
}
