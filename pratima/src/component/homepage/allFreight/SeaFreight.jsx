import { React, useEffect, useState } from 'react';
// import image2 from '../../../assestss/seaFreight.jpg'
import air2 from "../../../assestss/seaNew.jpg"
import plane from "../../../assestss/check.jpg"
import cap from "../../../assestss/sea-freight.webp"
import Navbar from '../Navbar';
import Footer from '../Footer';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GrassIcon from '@mui/icons-material/Grass';
import AnimationIcon from '@mui/icons-material/Animation';
const SeaFreight = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <section className="bannerBg seaBanner"  >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Sea Freight</h1>
                            <h5> Sea Freight Services offer a reliable and cost-effective solution for your global shipping needs.</h5>
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
                                    <h2 className="safeHead">  Sea Freight Services at Asia Direct</h2>
                                    <p className="paraSafe mt-4">
                                        Navigating the vast oceans to connect continents, Asia Direct’s Sea Freight Services offer a reliable and cost-effective solution for your global shipping needs. Specializing in routes from key Asian markets like China, India, Turkey, and Hong Kong, we ensure your cargo reaches its destination with precision and care.
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

            <section className="whyChooseAir capability pt50 pb50 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2> Why Asia Direct for Sea Freight?</h2>
                            <div className="parentWhyChoose">
                                <div className="airPlaneicon">
                                    <img src={plane} alt="" />
                                </div>
                                <div className="contetnPlain">
                                    <h5>Strategic Locations</h5>
                                    <p> Sea freight is an economical choice for transporting large volumes of goods, and we pass those savings on to you, making international trade more accessible
                                    </p>
                                </div>
                            </div>
                            <div className="parentWhyChoose">
                                <div className="airPlaneicon">
                                    <img src={plane} alt="" />
                                </div>
                                <div className="contetnPlain">
                                    <h5> Cost-Effectiveness</h5>
                                    <p>  Sea freight is an economical choice for transporting large volumes of goods, and we pass those savings on to you, making international trade more accessible </p>
                                </div>
                            </div>
                            <div className="parentWhyChoose">
                                <div className="airPlaneicon">
                                    <img src={plane} alt="" />
                                </div>
                                <div className="contetnPlain">
                                    <h5> Capacity and Flexibility</h5>
                                    <p> With a variety of container sizes and types, we handle all kinds of cargo, offering both Less than Container Load (LCL) and Full Container Load (FCL) options to meet your specific needs.
                                    </p>
                                </div>
                            </div>
                            <div className="parentWhyChoose">
                                <div className="airPlaneicon">
                                    <img src={plane} alt="" />
                                </div>
                                <div className="contetnPlain">
                                    <h5>Integrated Logistics:  </h5>
                                    <p> Beyond ocean transport, we provide comprehensive logistics solutions including warehousing, customs clearing, and compliance support, ensuring a seamless end-to-end service.
                                    </p>
                                </div>
                            </div>
                            <div className="parentWhyChoose">
                                <div className="airPlaneicon">
                                    <img src={plane} alt="" />
                                </div>
                                <div className="contetnPlain">
                                    <h5> Sustainability</h5>
                                    <p>Committed to eco-friendly practices, our sea freight services are designed to minimize environmental impact while maximizing efficiency.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="seaFreightSec pt50 pb50">
                <div className="container">
                    <div className="row text-center">
                        <h2> Our Sea Freight Capabilities</h2>
                    </div>
                    <div className="row pt50">
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2>  Direct Services from Asia</h2>
                                <p className="paraSafe">
                                    Leverage our direct shipping services from major Asian ports, ensuring faster transit times and reduced handling of your shipments.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2> Customized Solutions</h2>
                                <p className="paraSafe">
                                    Whether you’re shipping standard containers, oversized equipment, or temperature-sensitive goods, we tailor our services to your unique requirements
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2>  Advanced Tracking</h2>
                                <p className="paraSafe">
                                    Stay informed with our state-of-the-art tracking systems that provide real-time visibility into the status of your cargo
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cardFright">
                                <img src={cap} alt="" />
                                <h2> Expert Support  </h2>
                                <p className="mt-3 paraSafe">
                                    Our team of experts is well-versed in the intricacies of international shipping regulations, offering you unmatched support and guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="conntectingWord ">
                <div className="container">
                    <div className=" row ">
                        <div className="col-lg-12">
                            <h2> Connecting the World with Asia Direct</h2>
                            <p className='mt-3'>At Asia Direct, we bridge the gap between markets, delivering your goods safely across the seas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tabSea pt50">
                <div className="container">
                    <div className="row ">
                        <h2>Benefits </h2>
                    </div>
                    <div className="row mt-3">
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="FCL" value="1" />
                                    <Tab label="LCL" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="2">
                                <section class="whyChooseSec wow fadeInDown">
                                    <div class="row">
                                        <div className="row">
                                            <p>When you don’t have enough goods to fill a whole container, LCL is like carpooling for your cargo. It allows you to share container space with other shipments heading in the same direction. This way, you only pay for the space you use, making it a smart choice for smaller shipments or if you’re looking to save on costs</p>
                                            <h5>Benefits of LCL with Asia Direct:</h5>
                                        </div>
                                        <div class="row pt50">
                                            <div class="col-lg-4">
                                                <div class="whyChooseUs">
                                                    <div class="imgWhy">
                                                        <CardTravelIcon />
                                                    </div>
                                                    <h3>  Cost Savings</h3>
                                                    <p class="paraSafe"> Sharing a container means sharing the cost. It’s economical for smaller loads.</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="whyChooseUs">
                                                    <div class="imgWhy">
                                                        <GrassIcon />
                                                    </div>
                                                    <h3> Flexibility</h3>
                                                    <p class="paraSafe"> LCL offers the flexibility to ship goods as soon as they are ready, without waiting to fill a full container</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="whyChooseUs">
                                                    <div class="imgWhy">
                                                        <AnimationIcon />
                                                    </div>
                                                    <h3>  Convenience</h3>
                                                    <p class="paraSafe"> We handle all the logistics, from combining shipments to managing the paperwork, making it hassle-free for you</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </TabPanel>
                            <TabPanel value="1">
                                <p>FCL is like booking a private limousine for your goods. You get an entire container exclusively for your shipment, which is great for larger volumes. It offers more control over the handling and timing of your cargo, and it can be more cost-effective for bigger shipments.</p>
                                <h5>Benefits of FCL with Asia Direct</h5>
                                <div class="row pt50">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="whyChooseUs">
                                                <div class="imgWhy">
                                                    <CardTravelIcon />
                                                </div>
                                                <h3> Privacy</h3>
                                                <p class="paraSafe">  Your goods travel in their own space, with no other cargo to potentially cause damage or contamination</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="whyChooseUs">
                                                <div class="imgWhy">
                                                    <GrassIcon />
                                                </div>
                                                <h3>  Efficiency</h3>
                                                <p class="paraSafe">FCL can be faster since your container is not opened until it reaches its final destination</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="whyChooseUs">
                                                <div class="imgWhy">
                                                    <AnimationIcon />
                                                </div>
                                                <h3> Economical</h3>
                                                <p class="paraSafe"> For large quantities, FCL can be less expensive per unit because you’re utilizing the full container</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </TabPanel>
                        </TabContext>
                    </div>
                    <div className="row mt-4">
                        <h5>Tailored to Your Needs</h5>
                        <p className='mt-3 paraSafe'>Whether you choose LCL or FCL, Asia Direct tailors sea freight services to your specific needs. We ensure that your goods are shipped in the most efficient, secure, and cost-effective manner, with a commitment to quality service that sets us apart.</p>
                    </div>
                </div>
            </section >

            <Footer />
        </>
    )
}

export default SeaFreight