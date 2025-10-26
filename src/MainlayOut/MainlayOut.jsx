import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

export default function MainlayOut() {
  return (
    <div className='text-white'>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
