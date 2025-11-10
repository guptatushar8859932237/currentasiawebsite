import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from './Navbar'
import Homebanner from './Homebanner'
import Trackingsection from './Trackingsection'
import Trustedsection from './Trustedsection'
import Deliveredpackage from './Deliveredpackage'
import Howwehelp from './Howwehelp'
import Whychooseus from './Whychooseus'
import WhyWesafe from './WhyWesafe'
import Oursuppluchain from './Oursuppluchain'
import Footer from './Footer'
import Whatssapicon from './Whatssapicon'

export default function Homepage() {

  const handletop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    handletop()
  })

  return (
    <>
      <Topbar />
      <Navbar />
      <Whatssapicon />
      <Homebanner />
      <Trackingsection />
      <Trustedsection />
      <Deliveredpackage />  
      <Howwehelp />
      <Whychooseus />
      <WhyWesafe />
      <Oursuppluchain />
      <Footer />
    </>
  )
}
