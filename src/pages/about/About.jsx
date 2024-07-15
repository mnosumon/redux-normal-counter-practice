import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  let recivedCount = useSelector((state) => state.counter.count)
  return (
    <>
      <h1 className='text-4xl'>{recivedCount}</h1>
    </>
  )
}

export default About