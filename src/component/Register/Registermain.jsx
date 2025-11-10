import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import Registerform from './Registerform'

export default function Registermain() {

  const handletop = () =>{
    window.scrollTo(0,0 )
  }
    useEffect(()=>{
      handletop()
    })
  return (
    <div>
      <Topbar />
      <Navbar />
      <Registerform />
      <Footer />
    </div>
  )
}
