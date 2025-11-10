import React, { useEffect } from 'react';
// import image2 from '../../../assestss/airFrieght.png'
import air2 from "../../../assestss/roadfreight.avif"
import plane from "../../../assestss/check.jpg"
import cap from "../../../assestss/road.png"
import Navbar from '../Navbar';
import Footer from '../Footer';


const Roadfreight = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <section
                className=" bannerBg RoadBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Road Freight</h1>
                            <h5>
                                Road Freight Services are the backbone of commerce in South Africa and the SADC regions.
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
                                    <h2 className="safeHead"> Road Freight Services </h2>
                                    <p className="paraSafe mt-4">
                                        Asia Direct’s Road Freight Services are the backbone of commerce in South Africa and the SADC regions. We provide reliable and efficient transportation solutions that ensure your goods move smoothly across borders and reach their destinations safely.
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
                        <h2>Why Choose Asia Direct for Road Freight?</h2>
                    </div>
                    <div className="row ">
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5>   Extensive Coverage</h5>
                                <p> Our road services span the entirety of South Africa and extend across borders into the SADC regions, connecting you to a vast network of destinations.


                                </p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5> Customized Solutions</h5>
                                <p>  We understand that each shipment is unique. That’s why we offer tailored services to meet your specific road freight needs, whether it’s full truckloads (FTL) or less than truckloads (LTL).</p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5> Cross-Border Expertise </h5>
                                <p> Navigating the complexities of cross-border transportation is our specialty. We handle all customs and regulatory requirements, ensuring a hassle-free experience for you. </p>
                            </div>
                        </div>
                        <div className="parentWhyChoose">
                            <div className="airPlaneicon">
                                <img src={plane} alt="" />
                            </div>
                            <div className="contetnPlain">
                                <h5> Real-Time Tracking</h5>
                                <p>  With our advanced tracking systems, you’ll have real-time visibility of your shipment, giving you peace of mind and the ability to plan ahead.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="capability pt50 pb50">
                <div className="container">
                    <div className="row text-center">
                        <h2>Our Road Freight Capabilities</h2>
                    </div>
                    <div className="row pt50">
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2>Inland South Africa Transport </h2>
                                <p className="paraSafe">
                                    From the bustling cities to the remote corners, our domestic road freight services cover every inch of South Africa.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2>SADC Regional Transport</h2>
                                <p className="paraSafe">
                                    Our cross-border services extend your reach into the SADC regions, facilitating trade and commerce with neighbouring countries</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2> Dedicated Fleet</h2>
                                <p className="paraSafe">
                                    Our modern, well-maintained fleet is at your disposal, ensuring your goods are transported under the best conditions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2>    	Safety and Compliance</h2>
                                <p className="paraSafe">
                                    We prioritize the safety of your cargo and comply with all regional transportation regulations, ensuring your goods are in good hands.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className=" row pt50">
                        <div className="col-lg-12">
                            <h2> Connecting Commerce Across Borders</h2>
                            <p className="mt-3">
                                At Asia Direct, we’re not just about moving goods; we’re about connecting businesses and fostering growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Roadfreight
