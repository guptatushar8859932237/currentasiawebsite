import React from 'react'
import Footer from '../homepage/Footer'
import Navbar from '../homepage/Navbar'
import Topbar from '../Topbar'
import  image from '../../assestss/bloogs-6.jpg'
import  image2 from '../../assestss/logistics.png'
import  image3 from '../../assestss/gc-icon.svg'
import  image4 from '../../assestss/log-img.png'

export default function Aboutus() {
  return (
    <div>
       <>
            <Topbar />
            <Navbar />
            <>
                <section
                    className="bannerBg"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>About Us</h1>
                                <h5>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. illo quae
                                    vero{" "}
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="aboutSec pt80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <h1 className="safeHead">About Our Logistics</h1>
                                <p className="mt-4 paraSafe">
                                    Welcome to Logistics service, your trusted partner in logistics. We
                                    are a team of experienced professionals who are passionate about
                                    helping businesses streamline their supply chain operations and
                                    optimize their logistics processes.
                                </p>
                                <div className="aboutLogistic">
                                    <img src={image2} alt="" />
                                </div>
                                <p className="mt-4 paraSafe mb-0">
                                    Our transportation services include ground, air, and ocean freight,
                                    as well as intermodal and expedited shipping options. We leverage
                                    our carrier network and technology to provide you with the most
                                    cost-effective and efficient transportation solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="goalSec pt80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home"
                                            type="button"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >
                                            Our Goals
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile"
                                            aria-selected="false"
                                        >
                                            Our Story
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <p className="paraSafe">
                                            Our company was founded with a mission to simplify the logistics
                                            process for our customers, and we achieve this through our
                                            commitment to delivering exceptional service and innovative
                                            solutions that meet the unique needs of each client.
                                        </p>
                                        <p className="paraSafe mt-4">
                                            Our team of experienced logistics professionals work closely
                                            with our clients to understand their needs, develop customized
                                            logistics solutions, and provide ongoing support throughout the
                                            entire transportation process.
                                        </p>
                                        <div className="row mt-4">
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                        <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                        <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                        <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                        <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        <p className="paraSafe">
                                            Our company was founded with a mission to simplify the logistics
                                            process for our customers, and we achieve this through our
                                            commitment to delivering exceptional service and innovative
                                            solutions that meet the unique needs of each client.
                                        </p>
                                        <p className="paraSafe mt-4">
                                            Our team of experienced logistics professionals work closely
                                            with our clients to understand their needs, develop customized
                                            logistics solutions, and provide ongoing support throughout the
                                            entire transportation process.
                                        </p>
                                        <div className="row mt-4">
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                      <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                      <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                      <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="parentAbout">
                                                    <div className="imgAssistance">
                                                      <img src={image3} alt="" />
                                                    </div>
                                                    <p className="paraSafe mb-0">Transportation assistance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ps-5">
                                <div className="aboutLogisticImg">
                                    <img src={image4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
<div style={{marginTop:"20px"}}>
{/* 
            <Whychooseus />

            <ClienbtTrust /> */}
            
</div>
            <Footer />
            </>
    </div>
  )
}
