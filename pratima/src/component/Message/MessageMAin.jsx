import React, { useEffect } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import MessageText from './MessageText'

export default function MessageMAin() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    return (
        <div>
            {/* <Topbar /> */}
            {/* <Navbar /> */}
            <MessageText />
            {/* <Footer /> */}
        </div>
    )
}
