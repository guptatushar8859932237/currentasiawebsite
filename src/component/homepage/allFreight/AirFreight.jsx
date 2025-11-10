import React, { useEffect } from "react";
import air2 from "../../../assestss/air2.webp";
import plane from "../../../assestss/check.jpg";
import cap from "../../../assestss/cap1.webp";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
const AirFreight = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className="bannerBg airBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Air Freight</h1>
              <h5>
                Air Freight Services are designed to meet your most demanding
                logistics needs
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
                  <h2 className="safeHead">
                    {" "}
                    Air Freight Services at Asia Direct - Africa
                  </h2>
                  <p className="paraSafe mt-4">
                    At Asia Direct - Africa, we understand that time is of the essence.
                    Our Air Freight Services are designed to meet your most
                    demanding logistics needs, providing a swift and secure
                    transportation solution that connects you to destinations
                    worldwide.
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
                    Our Target to Esay Solution of Busniess Progress &amp;
                    Customer Satisfaction
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
            <h2>Why Choose Asia Direct - Africa for Air Freight?</h2>
          </div>
          <div className="row ">
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  class="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Speed</h5>
                <p>
                  Our air freight services are the fastest way to move your
                  goods. Whether it’s urgent medical supplies or time-critical
                  contracts, we ensure your cargo arrives on time, every time.
                </p>
              </div>
            </div>
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  class="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Reliability</h5>
                <p>
                  {" "}
                  We pride ourselves on the reliability of our services. With an
                  extensive network and experienced team, we navigate the
                  complexities of air freight so you don’t have to.
                </p>
              </div>
            </div>
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  class="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Global Reach </h5>
                <p>
                  {" "}
                  No destination is out of reach with Asia Direct - Africa. Our services
                  span the globe, ensuring your products can be delivered to
                  nearly any location, no matter how remote.
                </p>
              </div>
            </div>
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  class="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Security</h5>
                <p>
                  {" "}
                  We take the safety of your cargo seriously. Our air freight
                  services come with enhanced security measures, giving you
                  peace of mind that your goods are protected throughout their
                  journey.
                </p>
              </div>
            </div>
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  class="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Efficiency</h5>
                <p>
                  {" "}
                  Our air freight solutions are tailored to reduce your
                  inventory costs. By minimizing transit times, we help you
                  optimize your supply chain and keep your business moving
                  forward
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="capability pt50 pb50">
        <div className="container">
          <div className="row text-center">
            <h2>Our Air Freight Capabilities</h2>
          </div>
          <div className="row pt50">
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i class="fi fi-rr-plane" aria-hidden="true"></i>
                </div>
                <h2> Express Air Freight</h2>
                <p className="paraSafe">
                  {" "}
                  For shipments that need to move quickly, our express service
                  offers the fastest transit times
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i class="fi fi-rr-plane" aria-hidden="true"></i>
                </div>
                <h2>Consolidated Air Freight</h2>
                <p className="paraSafe">
                  {" "}
                  Ideal for cost-effective shipping, our consolidated services
                  combine your shipment with others to save you money.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i class="fi fi-rr-plane" aria-hidden="true"></i>
                </div>
                <h2> Full-Charter Air Freight</h2>
                <p className="paraSafe">
                  {" "}
                  When you need a dedicated solution, our full-charter services
                  provide an aircraft exclusively for your cargo.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i class="fi fi-rr-plane" aria-hidden="true"></i>
                </div>
                <h2>Door-to-Door Air Freight</h2>
                <p className="paraSafe">
                  {" "}
                  We handle everything from pickup to delivery, ensuring a
                  hassle-free experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i class="fi fi-rr-plane" aria-hidden="true"></i>
                </div>
                <h2> Temperature-Controlled Air Freight</h2>
                <p className="paraSafe">
                  {" "}
                  For sensitive shipments, our temperature-controlled options
                  maintain the integrity of your products
                </p>
              </div>
            </div>
          </div>
          <div className=" row pt50">
            <div className="col-lg-12">
              <h2>Committed to Excellence</h2>
              <p className="mt-3">
                At Asia Direct - Africa, we’re committed to delivering excellence in
                every aspect of our air freight services.
              </p>
              <button
                class="btn_add_web"
                onClick={() => navigate("/Contact-us")}
              >
                Get in Touch <i class="	fa fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AirFreight;
