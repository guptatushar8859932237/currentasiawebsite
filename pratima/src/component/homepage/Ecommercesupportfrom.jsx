import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import expressImg from "../../assestss/seaBg.jpg"
// import truck from "../../assestss/truck.png"
// import shipFreight from "../../assestss/freight.jpg"
// import economic from "../../assestss/economic.png"
// import schedule from "../../assestss/schedule.png"
import bannerImage from "../../assestss/ecommerce.webp"
import Topbar from '../Topbar'
export default function Ecommercesupportfrom() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Topbar />
            <Navbar />
            <section
                className="bannerBg" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1> E-Commerce</h1>
                            <h5>
                                Asia Direct is your go-to partner for supporting your e-commerce store from China. With our strategic warehouse locations and robust freight services, we make it easy for you to fulfill client orders efficiently. Here's how we can help
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='expressSec pt80'>
                <div className="container">
                    <div className="row text-center">
                        <h3>Ideal Freight Services for E-commerce</h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="serviceEcard">
                                <h5>Air Freight</h5>
                                <p>For time-sensitive deliveries, our air freight services ensure your products reach customers swiftly.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="serviceEcard">
                                <h5>Sea Freight</h5>
                                <p>An economical option for larger shipments, sea freight is ideal for stocking up on inventory without breaking the bank.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="serviceEcard">
                                <h5>Express Courier</h5>
                                <p>Need something delivered ASAP? Our express courier options have got you covered </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="costFactor pt50">
                <div className="container">
                    <div className="row text-center">
                        <h3>When to Hold Stock</h3>
                        <p className='mt-3 text-center'> Holding stock is essential in the following scenarios </p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="costContent">
                                <h5>High Demand </h5>
                                <p>Keep bestsellers in stock to meet customer expectations without delay. </p>
                                <h5>Seasonal Sales</h5>
                                <p>Anticipate increased demand during peak seasons and stock up accordingly.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="costContent">
                                <h5>Custom Products</h5>
                                <p>For items that require customization, having a ready supply can reduce lead times significantly. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='needE' className="costFactorbottom pt80 pb80">
                <div className="container">
                    <div className="row text-center">
                        <h3> Why Asia Direct for Your E-commerce Needs?</h3>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="consolidated">

                                <h5> Strategic Locations </h5>
                                <p> Our warehouses in China are positioned to streamline your supply chain.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="consolidated">
                                <h5> Customized Solutions  </h5>
                                <p> Whether it's air, sea, or road, we tailor our services to your business needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="consolidated">

                                <h5> Inventory Management </h5>
                                <p> We help you decide when and how much stock to hold, optimizing your inventory levels</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="consolidated">

                                <h5>Seamless Integration </h5>
                                <p> Our services integrate smoothly with your e-commerce platform, making logistics hassle-free.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-4">
                            <p>Support your e-commerce store with AsiaDirect's comprehensive freight services. Visit <a style={{ color: "#d01b20" }} href="#">www.asiadirect.africa</a>  to optimize your logistics today!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}
