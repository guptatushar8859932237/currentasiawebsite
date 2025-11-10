
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import shipFreight from "../../assestss/freight.jpg" // corrected typo in the path
import faqImg from "../../assestss/custom.jpg" // corrected typo in the path
import Topbar from '../Topbar';

export default function Customfaq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Topbar />
      <Navbar />
      <section className="bannerBg" style={{ backgroundImage: `url(${faqImg})`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Customs clearing</h1>
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
                  <h5>Customs clearing </h5>
                  <p>
                    Customs clearing is the process of ensuring that your goods comply with legal requirements when crossing international borders. It’s like a passport for your cargo, allowing it to smoothly transition from one country to another. Here’s what you need to know

                  </p>
                </div>
              </div>
              <div className="expressParent">
                <div>
                  <h5>Documentation </h5>
                  <p>
                    Before your products leave China, they must go through customs there. Proper documentation ensures that the right packages with the correct paperwork reach the customs authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt50">
            <div className="col-lg-7">
              <div className='h-100'>
                <div className="expressParent">
                  <div>
                    <h5>Import Tax and Duties </h5>
                    <p>
                      When importing from China, you’ll encounter import taxes and duties. These are fees imposed by the government to which the goods are being imported into. The tariff rates vary based on the HS codes (tariff numbers) related to each product category. The range can be from 0% (duty-free) up to 60%. It’s essential to know the specific rates for your goods.
                    </p>
                  </div>
                </div>

                <div className="expressParent">
                  <div>
                    <h5>Logistics Costs </h5>
                    <p>
                      Shipping costs include freight charges, handling fees, and other logistics expenses. Calculating the landed cost (the total cost of getting your goods to their final destination) is crucial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ImgExpress h-100">
                <img src={shipFreight} alt="Freight" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="costFactor pt80">
        <div className="container">
          <div className="row text-center">
            <h3>Common Challenges</h3>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="costContent">
                <h5> Customs Documentation</h5>
                <p>
                  Incomplete or incorrect paperwork can lead to delays or even confiscation. Ensure all necessary documents (such as invoices, packing lists, and certificates) are accurate and complete.
                </p>
                <h5>Tariff Classification </h5>
                <p>
                  Determining the correct HS code for your product is essential. Misclassification can result in overpayment or penalties.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="costContent">
                <h5>Customs Inspections</h5>
                <p>
                  Random inspections happen. Be prepared for physical checks of your cargo. Compliance with regulations is critical.
                </p>
                <h5>Delays</h5>
                <p>
                  Customs processes take time. Factor in potential delays when planning your shipments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
