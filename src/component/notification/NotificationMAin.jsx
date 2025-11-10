import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import Notification from './Notification'

export default function NotificationMAin() {
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

<Notification />
      <Footer />
    </div>
  )
}
