import React, { useState } from 'react'
// import mage1 from '../assestss/logo.png'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Navbarcontaint() {


  const navigate = useNavigate()
  const currentuser = JSON.parse(localStorage.getItem("data"))
  const [data, setData] = useState({
    id: currentuser.id,
    oldpassword: "", newpassword: "", confirmpassword: ""

  })
  const [error, setError] = useState({})
  const handlechange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })

  }

  const handlevalidate = (value) => {
    let error = {};
    if (!value.oldpassword) {
      error.oldpassword = "Old password is required"
    }
    if (!value.newpassword) {
      error.newpassword = "Confirm password is required"
    }
    if (!value.confirmpassword) {
      error.confirmpassword = "New password is required"
    } else {
      apihit()
    }
    setError(error)
  }


  const handleclick = () => {
    handlevalidate(data)
  }
const apihit=()=>{
 
}
 

  return (
    <div>
      <section className="changePass">
        <div className="container">
          <div className="row">
            <div className="mainDiv">
              <div className="cardStyle">
                <form action="" method="post" name="signupForm" id="signupForm">
                  {/* <img src={mage1} id="signupLogo" /> */}
                  <h2 className="formTitle">Change Password</h2>
                  <div className="inputDiv">
                    <label className="inputLabel" htmlFor="password1">
                      Old Password
                    </label>
                    <input
                      type="password"
                      id="password1"
                      name="oldpassword"
                      required=""
                      onChange={handlechange}
                    />
                    <p className='text-danger'>{error.oldpassword}</p>
                  </div>
                  <div className="inputDiv">
                    <label className="inputLabel" htmlFor="password">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="newpassword"
                      required=""
                      onChange={handlechange}

                    />
                    <p className='text-danger'>{error.newpassword}</p>
                  </div>
                  <div className="inputDiv">
                    <label className="inputLabel" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmpassword"
                      onChange={handlechange}
                    />
                    <p className='text-danger'>{error.newpassword}</p>
                  </div>
                  <div className="btnLogin">
                    <button onClick={handleclick}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  )
}

