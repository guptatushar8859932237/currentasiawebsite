import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import Pdfform from './Pdfform'

export default function Downloadpdf() {
  useEffect(()=>{
    window.scrollTo(0,0)
    },[])
  return (
    <div>
<Topbar />
<Navbar />
<Pdfform />
<Footer />
    </div>
  )
}
