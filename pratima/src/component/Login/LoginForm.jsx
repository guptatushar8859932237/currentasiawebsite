import React, { useContext, useEffect, useState } from 'react';
import mage1 from '../../assestss/logo.png'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../MyContext';

export default function LoginForm() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const {text,setText}=useContext(MyContext)
  const [session, setSession] = useState('');
  const [data, setData] = useState({
    password: '',
    email: ''
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleValidate = (value) => {
    let errors = {};
    if (!value.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(value.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!value.password) {
      errors.password = 'Password is required';
      toast.error('Password is required');
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    if (handleValidate(data)) {
      loginApiCall();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  const getSessionData = sessionStorage.getItem('document_name');
  const loginApiCall = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}customer-login`, data)
      .then((response) => {
        setText(response.data.data.profile)
        if (response.data.success) {
          toast.success('Login successful');
          localStorage.setItem('data', JSON.stringify(response.data.data));
          localStorage.setItem('profile', JSON.stringify(response.data.data.profile));

          if (getSessionData !== null && getSessionData !== undefined) {
            const sessionKeys = [
           "freight",
   "freight_option",
   "destination",
   "is_Import_Export",
   "is_cong_shipp",
   "loading_country",
   "discharge_country",
   "port_of_loading",
   "port_of_discharge",
   "goods_desc",
   "nature_of_goods",
   "packing_type",
   "total_dimension",
   "total_box",
   "total_weight",
   "document_name",
   "comment_on_docs",
   "document"
            ];
            const sessionData = sessionKeys.reduce((acc, key) => {
              const value = sessionStorage.getItem(key);
              if (value) {
                acc[key] = value;
              }
              return acc;
            }, {});

            if (Object.keys(sessionData).length > 0) {
              const datapost = {
                user_id: JSON.parse(localStorage.getItem('data')).id,
                customer_ref:"",
                ...sessionData
              };
              axios.post(`${process.env.REACT_APP_BASE_URL}add-clearing-customer`, datapost)
                .then((response) => {
                  if (response.data.success) {
                    setSession(response.data.data);
                    saveClearanceData();
                  }
                })
                .catch((error) => {
                  console.error(error);
                  toast.error(error.response.data.message);
                });
            } else {
              navigate('/');
            }
          } else {
            navigate('/');
          }
        } else {
          toast.error('Enter valid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };


  const saveClearanceData = () => {
    const sessionKeys = Object.keys(sessionStorage).filter(key => key.startsWith('reqdata_'));
    sessionKeys.forEach((key) => {
      const sessionData = JSON.parse(sessionStorage.getItem(key));
      const clearanceData = [{
        clearance_id: session,
        client_id: JSON.parse(localStorage.getItem('data')).id,
        ...sessionData
      }];
      axios.post(`${process.env.REACT_APP_BASE_URL}calculate-clearance`, { data: clearanceData })
        .then((response) => {
          console.log(response.data);
          navigate('/');
          sessionStorage.clear();
        })
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    });
  };

  return (
    <div>
      <section className="loginSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">

              <div className="loginFormMain">
                <div className="logoLogin">
                  <img src={mage1} alt="Logo" />
                </div>
                <div className="mb-3">
                  <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                  <p className="text-danger">{error.email}</p>
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                  />
                  <p className="text-danger" style={{ marginBottom: '0px' }}>{error.password}</p>
                  <Link to={'/forgot-password'} style={{ fontSize: '15px', color: '#000' }}>
                    Forgot Password?
                  </Link>
                </div>
                <div className="btnLogin mb-3">
                  <button onClick={handleClick}>Submit</button>
                </div>
                <span className="RegisLink text-center">
                  Don't have an account? <Link to={'/register'}>Sign Up</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bgPosition"></div>
      </section>
      <ToastContainer />
    </div>
  );
}

