import React, { useEffect, useState } from 'react'
import mage1 from '../../assestss/logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Forgottenpaswwordnew() {
  const { token } = useParams();
  const handletop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    handletop()
  })

  const [data, setData] = useState({
    newPassword: "", confirmPassword: ""
  })
  const [error, setError] = useState([])
  const navigate = useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const handlevalidate = (value) => {
    let error = {}
    if (!value.newPassword) {
      error.newPassword = 'New password is required'
    } if (!value.confirmPassword) {
      error.confirmPassword = " Confirm passowrd Password is required"
    } else {
      apihit()
    }
    setError(error)
  }

  const handleclick = () => {
    handlevalidate(data)
  }
 
  const apihit = () => {
    const datauswer = {
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword
    };
    
    const token = localStorage.getItem("token");
    // Concatenate the token to the URL string
    axios.post(`${process.env.REACT_APP_BASE_URL}user-reset-password?token=${token}`, datauswer)
      .then((response) => {
        toast.success(response.data.msg);
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  };
  return (
    <div>
      <section className="loginSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="loginFormMain">
                  <div className="logoLogin">
                    <img src={mage1} alt="dfdfd" />
                  </div>
                  <div className='mb-3'>
                    <input type="email" placeholder="new password" name='newPassword' onChange={handlechange} />
                    <p className='text-danger'>{error.newPassword}</p>
                  </div>
                  <div className='mb-5'>
                    <input type="password" placeholder=" confirm Password" name='confirmPassword' onChange={handlechange} /><br />
                    <p className='text-danger'>{error.confirmPassword}</p>
                  </div>
                  <div className="btnLogin mb-5">
                    <button onClick={handleclick}>Change Password</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bgPosition"></div>
      </section>
      <ToastContainer />
    </div>
  )
}

