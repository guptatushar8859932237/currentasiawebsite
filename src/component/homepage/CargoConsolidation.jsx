import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import expressImg from "../../assestss/seaBg.jpg"
import truck from "../../assestss/truck.png"
import shipFreight from "../../assestss/freight.jpg"
import economic from "../../assestss/economic.png"
import schedule from "../../assestss/schedule.png"
import cargoImg from "../../assestss/cargoCon.jpg"
import Topbar from '../Topbar'
export default function CargoConsolidation() {
    useEffect(()=>{
        window.scrollTo(0,0)
},[])
  return (
    <div>
          <Topbar />
    <Navbar />
    <section
        className="bannerBg" style={{backgroundImage:`url(${cargoImg})`}} >
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1> Cargo Consolidation</h1>
                    <h5>
                      
                    </h5>
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
                            <h5>Cargo Consolidation </h5>
                            <p>Whether you’re shipping goods from multiple suppliers or need to streamline your supply chain, consolidation services ensure efficiency and cost-effectiveness. Here’s why you should consider consolidating your supply chain, </p>
                        </div>
                    </div>
                    <div className="expressParent">

                        <div>
                            <h5>Efficient Handling </h5>
                            <p> An experienced team carefully consolidates your shipments, minimizing handling and reducing the risk of damage.</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="row pt50">
                <div className="col-lg-7">

                    <div className='h-100'>
                        <div className="expressParent">

                            <div>
                                <h5> Cost Savings</h5>
                                <p>  By combining multiple shipments into one, you benefit from reduced shipping costs and fewer administrative hassles.</p>
                            </div>
                        </div>
                        <div className="expressParent">
                         
                            <div>
                                <h5>  Custom Solutions</h5>
                                <p>  The consolidation process is tailored to your specific needs, ensuring seamless coordination and timely deliveries.</p>
                            </div>
                        </div>
                        <div className="expressParent">
                         
                            <div>
                                <h5>Transparency </h5>
                                <p> You’ll receive real-time updates on your consolidated cargo, so you’re always in the loop.</p>
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
    {/* <section className="costFactor pt80">
        <div className="container">
            <div className="row text-center">
                <h3> Quality Inspection and Repackaging</h3>
                <p className='mt-3'> </p>
               
            </div>
            <div className="row mt-4">
                <div className="col-lg-6">
                    <div className="costContent">
                        <h5></h5>
                        <p> </p>
                        <h5></h5>
                        <p> </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="costContent">
                        <h5>3.Repackaging Solutions</h5>
                        <p> </p>
                        {/* <h5>Port fees and other landside charges</h5>
                        <p> Depending on the mode of transport used, these charges are normally not considered by first time importers, however in some instances carry a large portion of the final cost of shipping.</p> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}
        {/* </div> */}
    {/* </section> */} 
    <section className="costFactorbottom pt80 pb80">
        <div className="container">
            <div className="row text-center">
                <h3>Quality Inspection and Repackaging</h3>
                <p className='mt-3'> We understand the supply chains risks involved especially where Quality matters, and that’s why we offer comprehensive quality inspection services. Experts meticulously examine your goods to ensure they meet the highest standards as well as your desired specifications. Here’s what is involved</p>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <div className="consolidated">
                        <div className="imgTruck">
                            <img src={truck} alt="" />
                        </div>
                        <h5>Thorough Inspections</h5>
                        <p>From product specifications to packaging, no detail is unchecked. Our goal is to maintain quality throughout the batch. </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="consolidated">
                        <div className="imgTruck">
                            <img src={economic} alt="" />
                        </div>
                        <h5>Customized Reports</h5>
                        <p> Receive detailed inspection reports, including photos, so you can make informed decisions.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="consolidated">
                        <div className="imgTruck">
                            <img src={schedule} alt="" />
                        </div>
                        <h5>    Repackaging Solutions</h5>
                        <p> If any issues are identified, provide repackaging is performed to ensure your goods comply with packaging requirements and are ready for safe transport. </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <Footer />
</div >
  )
}
