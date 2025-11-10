import React from 'react'
import Topbar from './Topbar'
import Footer from './homepage/Footer'
import Navbar from './homepage/Navbar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <Topbar />
        <Navbar />
    <Outlet />
      <Footer />
    </div>
  )
}
