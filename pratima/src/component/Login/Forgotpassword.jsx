import React, { useEffect, useState } from 'react'
import mage1 from '../../assestss/logo.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'


export default function LoginForm() {
    const handletop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        handletop()
    })

    const [data, setData] = useState({
        email: ""
    })
    const [error, setError] = useState([])
    const navigate = useNavigate()

    const handlechange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const handlevalidate = (value) => {
        let error = {}
        if (!value.email) {
            error.email = 'Email is required'
        } else if (!isValidEmail(value.email)) { // Add email format validation
            error.email = 'Please Enter a valid email';
        } else {
            apihit()
        }
        setError(error)
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleclick = () => {
        handlevalidate(data)
    }

    const apihit = () => {
        axios.post(`${process.env.REACT_APP_BASE_URL}user-forgot-password`, { email: data.email }).then((response) => {
           localStorage.setItem("token",response.data.token)
            toast.success(response.data.msg)
        }).catch((error) => {
            toast.error(error.response.data.msg)
        })
    }
    
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
                                    {/* <p className='my-3 fs-5 fw-bold' style={{color:"#212529"}}>Forgoteen Password</p> */}
                                    <p className='text-center mb-4'>Please enter the existing email to link</p>
                                    <div className='mb-3'>
                                        <label className=''>Enter Email</label><br></br>
                                        <input type="email" placeholder="Email" name='email' onChange={handlechange} />
                                        <p className='text-danger'>{error.email}</p>
                                    </div>

                                    <div className="btnLogin mb-3">
                                        <button onClick={handleclick}>Submit</button>
                                    </div>
                                    <div className="btnLogin mb-2">
                                        <Link to={'/login'} >back to login</Link >
                                    </div>
                                    {/* <span className="RegisLink">
                      Don't have an account? <Link to={"/register"}> Sign Up</Link>
                    </span> */}
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