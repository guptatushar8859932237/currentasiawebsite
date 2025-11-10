import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import expressImg from "../../assestss/seaBg.jpg"
import truck from "../../assestss/truck.png"
import shipFreight from "../../assestss/freight.jpg"
import economic from "../../assestss/economic.png"
import schedule from "../../assestss/schedule.png"
import image2 from "../../assestss/slide5.jpg";
import Topbar from '../Topbar'
const ShippingMode = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Topbar />
            <Navbar />
            <section
                className="bannerBg"  style={{backgroundImage:`url(${image2})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1> Shipping Mode</h1>
                            <h5></h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='expressSec pt80'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="expressParent">
                                <div>
                                    <h5>Express Shipping </h5>
                                    <p className='mb-0'>Ideal for urgent needs, express shipping involves courier companies like DHL, UPS, and FedEx. This option is normally efficient normally assuring that you’ll receive your shipment within 2 to 5 business days from collection, however the cost is higher compared to other options. </p>
                                </div>
                            </div>
                            <div className="expressParent">
                                <div>
                                    <h5>Air Freight</h5>
                                    <p className='mb-0'>Balancing speed and cost, air freight is a reliable choice. It’s perfect for time-sensitive shipments, small cargo, and fragile goods. This option normally takes 7-10 days to deliver. The cost of this option typically varies based on urgency, service levels and cargo weight with charges normally ranging between $5 to $10 per kilogram for a 200kg shipment. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt50">
                        <div className="col-lg-7">
                            <div className='h-100'>
                                <div className="expressParent">
                                    <div>
                                        <h5>Sea Freight</h5>
                                        <p className='mb-0'> If you’re dealing with bulk goods, sea freight is your go-to option. Sea freight considers the option to make use of full container load shipping (FCL) or less than container load (LCL) shipping. The shared space approach works best for smaller packages and effectively allows you to pay for only the space used.  Shipping a 20ft container from the Port of Nansha to the Port of Durban might take +/- 23 days whilst an LCL takes 28-35 days. It’s cost-effective and reasonable in terms of transit times.</p>
                                    </div>
                                </div>
                                <div className="expressParent">
                                    <div>
                                        <h5>Road Freight</h5>
                                        <p>This option is essential for land connections. Road freight ensures efficient transportation within landscape, while rail freight offers an eco-friendly alternative. Dedicated full truck loads (FTL) are ideal for cargo that needs to move efficiently, whereas the option to consolidate less than truck loads (LTL) provide a cost cushion on smaller packages despite a slightly longer transit time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ImgExpress h-100">
                                <img src={shipFreight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="costFactor pt80">
                <div className="container">
                    <div className="row text-center">
                        <h3>Understanding the Cost Factors</h3>
                        <p className='mt-3 mb-0'> Estimating shipping costs involves considering several factors</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="costContent">
                                <h5 className='mb-0'>Shipping Mode</h5>
                                <p>Each mode (air, sea, express, rail, or road) balances speed and cost efficiency. </p>
                                <h5 className='mb-0'>Cargo Size and Volume</h5>
                                <p>Costs vary based on weight (for air freight) and container size (for sea freight)</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="costContent">
                                <h5 className='mb-0'> Customs, Insurance, and Fuel Surcharges</h5>
                                <p> These play significant roles in shaping the total expense.</p>
                                <h5 className='mb-0'>Port fees and other landside charges</h5>
                                <p> Depending on the mode of transport used, these charges are normally not considered by first time importers, however in some instances carry a large portion of the final cost of shipping.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="costFactorbottom pt80 pb80">
                <div className="container">
                    <div className="row text-center">
                        <h3> Strategies for Cost Reduction</h3>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <div className="consolidated">
                                <div className="imgTruck">
                                    <img src={truck} alt="" />
                                </div>
                                <h5>Consolidate Shipments</h5>
                                <p>Optimize container space by consolidating shipments</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="consolidated">
                                <div className="imgTruck">
                                    <img src={economic} alt="" />
                                </div>
                                <h5> Choose Economical Modes</h5>
                                <p> Select the most cost-effective shipping mode based on your needs</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="consolidated">
                                <div className="imgTruck">
                                    <img src={schedule} alt="" />
                                </div>
                                <h5> Off-Peak Scheduling</h5>
                                <p>Plan shipments during off-peak times to capitalize on lower rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}

export default ShippingMode
