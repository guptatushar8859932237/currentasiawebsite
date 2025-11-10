import React from 'react'
import image1 from "../../assestss/globe.svg"
import image2 from "../../assestss/trusted.jpg"
export default function Trustedsection() {
  return (
    <>
      <section className="pt80 pb80 col-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div data-aos="fade-right">
                <div className="digitalTrusted pe25">
                  <h2 className="safeHead">
                    Digital &amp; Trusted Transport Logistic Company
                  </h2>
                  <p className="paraSafe mt-4">
                    {" "}
                    To become a digital logistics company, you'll need to invest in the
                    latest technology. This includes transportation management systems
                    (TMS), warehouse management systems (WMS), and other software that
                    can help you streamline your operations, reduce costs, and improve
                    customer service.
                  </p>
                  <div className="parentDigiTrust">
                    <div>
                      <img src={image1} alt='hellow' />
                    </div>
                    <div className="contentdigiTrust">
                      <h3>Global Service</h3>
                      <p className="paraSafe">
                        Providing global service can be challenging, but it's also an
                        opportunity to expand your business customer base.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="digiTrust">
                <div>
                  <img src={image2} alt='hellow' />
                </div>
                <div className="ourTargetPos">
                  <h5>
                    Our Target to Easy Solution of Business Progress &amp; Customer
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
    </>
  )
}
