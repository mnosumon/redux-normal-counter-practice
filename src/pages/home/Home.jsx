import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../feature/counterSlice/CounterSlice'

const Home = () => {
  let [count, setCount] = useState(0)
  let dispatch = useDispatch()
  let handleIncrement = ()=>{
    dispatch(increment(setCount((prev)=> prev +1)))

  }
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default Home