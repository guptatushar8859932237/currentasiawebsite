import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import LoginForm from './LoginForm'
import Footer from '../homepage/Footer'

export default function Login() {
  
  return (
    <div>
      <Topbar />
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  )
}
