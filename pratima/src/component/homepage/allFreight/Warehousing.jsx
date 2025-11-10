import React, { useEffect } from 'react';
import air2 from "../../../assestss/warehouse.png"
import plane from "../../../assestss/check.jpg"
import cap from "../../../assestss/ware.png"
import Navbar from '../Navbar';
import Footer from '../Footer';


const Warehousing = () => {
    const getdata = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <Navbar />
            <section
                className=" bannerBg RoadBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 >Warehousing </h1>
                            <h5>   Warehousing Solutions tailored to the dynamic needs of businesses in South Africa and beyond.
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
                                    <h1 className='safeHead'>Warehousing </h1>
                                    <p className="paraSafe mt-4">
                                        Asia Direct offers state-of-the-art Warehousing Solutions tailored to the dynamic needs of businesses in South Africa and beyond. Our facilities are designed to provide secure, efficient, and scalable storage options that integrate seamlessly with your supply chain
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
                                        Our Target to Esay Solution of Busniess Progress &amp; Customer
                                        Satisfaction
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
                        <h2> Why Choose Asia Direct for Warehousing?</h2>
                    </div>
                    <div className="row ">
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5>  Strategic Locations</h5>
                                <p> Our strategically located to ensure easy access and swift distribution across South Africa and the SADC regions
                                </p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5>  Advanced Security</h5>
                                <p>  We prioritize the safety of your goods with high-security measures, including 24/7 surveillance and controlled access.</p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5> Customizable Storage</h5>
                                <p>  Whether you need short-term or long-term storage, our flexible solutions can accommodate any volume of goods </p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5>   Integrated Services</h5>
                                <p> Our warehousing is just one part of a comprehensive suite of logistics services, including transportation, customs clearing, and compliance support.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="capability pt50 pb50">
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
            </section>
            <Footer />
        </>
    )
}

export default Warehousing
