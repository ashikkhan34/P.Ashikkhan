import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import resume from '../../assets/RESUME.pdf'
import './navbar.css'

export default function Navbar() {
  const links = <>
  <NavLink to='/'><li><a>Home</a></li> </NavLink>
  <NavLink to='/aboutUs'><li><a>About Us</a></li> </NavLink>
  <NavLink to='/allProjects'><li><a>Projects</a></li> </NavLink>
  <NavLink to='/contact'><li><a>Contact Us</a></li> </NavLink>
  </>
  return (
    <div>
      <div className="navbar bg-indigo-950 fixed top-0 w-full z-40 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='flex ml-2 items-center'>
          <img className='w-10' src={logo} alt="" />
          <h1 className='text-2xl text-cyan-500 ml-3 font-bold'>Ashik khan</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        <button >
                            <a href={resume} target='_blank' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-blue-600 group">
                                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Download Resume</span>
                            </a>

                        </button>
        </div>
      </div>
    </div>
  )
}
