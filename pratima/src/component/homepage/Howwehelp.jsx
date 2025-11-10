import React from 'react'
import image1 from '../../assestss/help.png'
import image2 from '../../assestss/help1.png'
import image3 from '../../assestss/help2.png'
export default function Howwehelp() {
  return (
    <div>
      <section className="pt80 pb80 BusineSec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <div data-aos="fade-right">
                <div className="helpBusiness">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              {/* <div data-aos="fade-left"> */}
              <div className="digitalTrusted pe25">
                <h2 className="safeHead">How We Help Businesses Across The World.</h2>
                <p className="paraSafe mt-4">
                  {" "}
                  To become a digital logistics company, you'll need to invest in the
                  latest technology. This includes transportation management systems
                  (TMS), warehouse management systems (WMS), and other software that
                  can help you streamline your operations, reduce costs, and improve
                  customer service.
                </p>
                <div className="parentHelp">
                  <div className="helpImg">
                    <img src={image2} alt="" />
                  </div>
                  <div className="ultimateDate">
                    <h6>Ultimate Data Protection</h6>
                  </div>
                </div>
                <div className="parentHelp">
                  <div className="helpImg">
                    <img src={image3} alt="" />
                  </div>
                  <div className="ultimateDate">
                    <h6>Easy and Quick Customer service</h6>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
