import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar'
import Navbar from '../homepage/Navbar'
import Footer from '../homepage/Footer'
import image from "../../assestss/slide5.jpg"
import logoprofile from '../../assestss/logoasia.png'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

export default function Profile() {

  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0)
  }, [])

  const handleclicknavi = () => {
    navigate('/update-profile')
  }

  const location = useLocation()
  console.log(location?.state?.dataloc)
  const userdata = JSON.parse(localStorage.getItem('data'))
  console.log(userdata)
  const fetchData = () => {
    const user = JSON.parse(localStorage.getItem('data'));
    axios.post(`${process.env.REACT_APP_BASE_URL}client-details`, {
      client_id: user?.id
    }).then((response) => {
      console.log(response.data.data)
      setUserData(response?.data?.data)
    }).catch((error) => { toast.error(error.response.data.message) })
  };
  return (
    <div>
      <Topbar />
      <Navbar />
      <>
        <section
          className="bannerBg"
          style={{ backgroundImage: `url(${image})`, position: "relative" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Profile Details</h1>
                {/* <h5>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. illo quae
                  vero{" "}
                </h5> */}
              </div>
            </div>
          </div>
        </section>
        <section className="profileDetails">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="leftProfile">
                  <div className="leftProfileImg">
                    {
                      userData.profile ? (
                        <img src={`${process.env.REACT_APP_BASE_URL_image}${userData?.profile}`} alt="apifdgdfg" style={{ objectFit: "cover" }} />
                      ) : (
                        <img src={logoprofile} alt="tushardgdfg" style={{ objectFit: "cover" }} />
                      )
                    }
                  </div>
                  <h3 className='text-capitalize'>{userdata?.full_name}</h3>
                  <div className="bgContactLeft">
                    <h5>Contact</h5>
                  </div>
                  <div className="contactDetailsWidth">
                    <p>
                      {" "}
                      <span>Email:</span>{userdata.email}
                    </p>
                    <p>
                      {" "}
                      <span>Tele Phone:</span> {userData.telephone}
                    </p>
                    <p>
                      {" "}
                      <span>Cell Phone:</span> {userdata.cellphone}
                    </p>
                    <p>
                      {
                        userData ? (
                          <>
                            <span>Address 1:</span>{userData?.address_1}
                          </>

                        ) : (
                          <>
                            <span>Address 1:</span>{userdata?.address_1}
                          </>
                        )
                      }
                    </p>
                    <p>
                      {" "}
                      {
                        userData ? (
                          <>
                            <span>Address 2:</span>{userData?.address_2}
                          </>

                        ) : (
                          <>
                            <span>Address 2:</span>{userdata?.address_2}
                          </>
                        )
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="profileRight">
                  <div className="profileSummary">
                    <h5>Profile Summary</h5>
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                      magni ex quis repellendus temporibus accusamus architecto facere
                      corporis corrupti obcaecati similique incidunt minus, vel
                      dolores placeat commodi blanditiis nihil mollitia?
                    </p> */}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>City :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p>{ userData ? userData.city :  userdata.city}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>Province :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p>{userData ? userData.province :  userdata.province}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>Country :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p>{userData.country_name	?userData.country_name	:userdata.country_name	}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>Code :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p>{userData.code?userData.code:userdata.code}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>Company Id :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p>{userData.company_id?userData.company_id:userdata.company_id}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>Importers Reference :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p>{userData.importers_ref?userData.importers_ref:userdata.importers_ref}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="parantClientRf">
                          <div className="me-3">
                            <p>
                              {" "}
                              <strong>Tax Reference :</strong>{" "}
                            </p>
                          </div>
                          <div>
                            <p> {userdata.tax_ref?userdata.tax_ref:userData.tax_ref}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex text-align-center'>
                    <button className='fre_up_btn' onClick={handleclicknavi}>Update Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <ToastContainer />
      <Footer />
    </div>
  )
}
