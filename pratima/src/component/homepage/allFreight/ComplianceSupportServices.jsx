import React, { useEffect } from 'react'
// import image2 from '../../../assestss/airFrieght.png'
import air2 from "../../../assestss/warehouse.png"
import plane from "../../../assestss/check.jpg"
// import cap from "../../../assestss/cap1.webp"
import Navbar from '../Navbar';
import Footer from '../Footer';
export default function ComplianceSupportServices() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <section className=" bannerBg complience">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Compliance Support Services  </h1>
                            <h5>Compliance Support Services are the cornerstone of seamless shipping and logistics operations.
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt80 pb80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div data-aos="fade-right" className="aos-init aos-animate">
                                <div className="digitalTrusted pe25">
                                    <h1 className='safeHead'>Compliance Support Services </h1>
                                    <p className="paraSafe mt-4">
                                        Asia Direct’s Compliance Support Services are the cornerstone of seamless shipping and logistics operations. We specialize in navigating the complex landscape of permits, licenses, and regulatory compliance, ensuring your business operates smoothly and efficiently
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="digiTrust">
                                <div>
                                    <img src={air2} alt="hellow" />
                                </div>
                                <div className="ourTargetPos">
                                    <h5>
                                        Our team of experts provides unparalleled support in obtaining the necessary permits
                                    </h5>
                                    <div className="ourTargetComma">
                                        <i className="fi fi-rr-quote-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="whyChooseAir pb50">
                <div className="container">
                    <div className="row">
                        <h2>Why Asia Direct for Compliance Support?</h2>
                    </div>
                    <div className="row ">
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5>  Expert Guidance</h5>
                                <p>  Our team of experts provides unparalleled support in obtaining the necessary permits and licenses, tailored to your specific industry and operational needs.</p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5> Regulatory Liaison</h5>
                                <p>We act as your advocate, liaising with regulatory departments to ensure all your shipping requirements are met without any hitches</p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5> Seamless Integration</h5>
                                <p>Our services are designed to integrate effortlessly with your existing operations, providing a streamlined approach to compliance and documentation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="contetnPlain">
                            <h3>Ensuring Your Success</h3>
                            <p className='mt-2'>  With Asia Direct, you gain a partner that's dedicated to your business's compliance and success.</p>
                        </div>
                    </div>
                </div >
            </section >
            {/* <section className="capability pt50 pb50">
                <div className="container">
                    <div className="row text-center">
                        <h2> Our Warehousing Capabilities</h2>
                    </div>
                    <div className="row pt50">
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2> Smart Storage Solutions</h2>
                                <p className="paraSafe">Utilize our smart warehousing to improve inventory efficiency and rapid response to customer demands
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2> Inventory Management</h2>
                                <p className="paraSafe">
                                    With our advanced systems, keep track of your stock in real-time, ensuring accuracy and transparency</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2>Value-Added Services</h2>
                                <p className="paraSafe">
                                    From kitting and packaging to labeling and dispatch, we offer a range of services to enhance your warehousing experience
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2> Eco-Friendly Practices</h2>
                                <p className="paraSafe">
                                    We’re committed to sustainability, employing eco-friendly practices in our warehousing operations to minimize environmental impact
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" row pt50">
                        <div className="col-lg-12">
                            <h2>Your Partner in Growth</h2>
                            <p className="mt-3">
                                At Asia Direct, we’re more than just a warehousing provider; we’re your partner in growth
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            < Footer />
        </div >
    )
}
