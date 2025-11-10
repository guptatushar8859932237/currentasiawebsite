import React from "react";
import image1 from "../../assestss/globe.svg";
import image2 from "../../assestss/trusted.jpg";
import { useNavigate } from "react-router-dom";
export default function Trustedsection() {
   const navigate = useNavigate();
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
                    At Asia Direct, we help businesses streamline their
                    logistics using cutting-edge transport and warehouse
                    management systems. Our solutions reduce operational costs,
                    increase delivery speed, and improve customer satisfaction
                  </p>
                  <div className="parentDigiTrust">
                    <div>
                      <img src={image1} alt="hellow" />
                    </div>
                    <div className="contentdigiTrust">
                      <h3>Global Service</h3>
                      <p className="paraSafe">
                        Providing global service can be challenging, but it's
                        also an opportunity to expand your business customer
                        base.
                      </p>
                    </div>
                  
                  </div>
                    <div className="btnLog">
                      <button onClick={()=>navigate("/contact-us")} className="btn_add_web">Get in Touch <i class="	fa fa-long-arrow-right"></i></button>
                     
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="digiTrust">
                <div>
                  <img src={image2} alt="hellow" />
                </div>
                <div className="ourTargetPos">
                  <h5>
                   Asia Direct powers your growth with technology-driven logistics.
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
  );
}
