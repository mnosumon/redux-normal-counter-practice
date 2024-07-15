import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-3 bg-slate-400 items-center'>
      <div className=''>
        <h1 className='text-3xl '>hello</h1>
      </div>
      <ul className='flex justify-end gap-8 px-10'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/reducer">Reducer</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar