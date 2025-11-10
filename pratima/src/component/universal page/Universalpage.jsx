import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import image1 from "../../assestss/working.jpg"

export default function Universalpage() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className='container'>
        <img src={image1} alt=' shfjk' className='w-100' />
      </div>
      <p className='text-center my-5 fs-1 fw-bold '>404 page error </p>
      <Footer />
    </div>
  )
}
