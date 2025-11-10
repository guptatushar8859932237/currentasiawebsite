import React, { useEffect } from "react";
import air2 from "../../../assestss/custom.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import plane from "../../../assestss//check.jpg";
import cap from "../../../assestss/customNew (1).png";
import Topbar from "../../Topbar";
import customImg from "../../../assestss/customImg.jpg";
import { useNavigate } from "react-router-dom";
const CustomClearing = () => {
  const getdatya = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    getdatya();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Topbar />
      <Navbar />
      <section
        className=" bannerBg"
        style={{ backgroundImage: `url(${customImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Custom Clearing </h1>
              <h5>
                {" "}
                Customs Clearing Services that streamline your import and export
                processes.
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
                  <h2 className="safeHead"> Custom Clearing</h2>
                  <p className="paraSafe mt-4">
                    At Asia Direct - Africa, we specialize in providing
                    top-tier Customs Clearing Services that streamline your
                    import and export processes. Based in South Africa, our
                    expertise in customs regulations and our commitment to
                    excellence ensure your goods move across borders without
                    delay.
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
                  <h5>Our Comprehensive Customs Clearing Solutions</h5>
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
            <h2>
              {" "}
              Why Partner with Asia Direct - Africa for Customs Clearing?
            </h2>
          </div>
          <div className="row ">
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  className="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Local Expertise, Global Standards:</h5>
                <p>
                  {" "}
                  Our deep understanding of South African customs regulations
                  combined with international compliance standards makes us the
                  preferred partner for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  className="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Efficient Process</h5>
                <p>
                  {" "}
                  We leverage cutting-edge technology and a skilled team to
                  expedite the customs clearing process, reducing wait times and
                  avoiding costly delays.
                </p>
              </div>
            </div>
            <div className="parentWhyChoose">
              <div className="airPlaneicon">
                <i
                  className="fa fa-check-square-o checkIcon"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="contetnPlain">
                <h5> Transparent Operations:</h5>
                <p>
                  {" "}
                  Our clients enjoy full visibility into the customs clearing
                  process, with real-time updates and proactive communication.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="capability pt50 pb50">
        <div className="container">
          <div className="row text-center">
            <h2>Our Comprehensive Customs Clearing Solutions</h2>
          </div>
          <div className="row pt50">
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i className="fi fi-tr-clear-alt" aria-hidden="true"></i>
                </div>
                <h2>Documentation Preparation</h2>
                <p className="paraSafe">
                  We meticulously prepare and review all necessary documentation
                  to ensure accuracy and compliance.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i className="fi fi-tr-clear-alt" aria-hidden="true"></i>
                </div>
                <h2>Duty and Tax Assessment</h2>
                <p className="paraSafe">
                  Our experts evaluate and advise on the most cost-effective
                  duty and tax options for your shipments
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i className="fi fi-tr-clear-alt" aria-hidden="true"></i>
                </div>
                <h2>Customs Inspection</h2>
                <p className="paraSafe">
                  Our proactive approach and expert management of inspections
                  and queries minimises delays and costs.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardFright airFreightCard">
                <div className="iconPlainFreCard">
                  <i className="fi fi-tr-clear-alt" aria-hidden="true"></i>
                </div>
                <h2> Regulatory Compliance</h2>
                <p className="paraSafe">
                  We navigate the complexities of trade regulations, ensuring
                  your goods comply with all legal requirements. We navigate the
                  complexities of trade regulations, ensuring your goods comply
                  with all legal requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt50 pb50">
        <div className="container">
          <div className=" row">
            <div className="col-lg-12">
              <h4>Seamless Integration with Your Supply Chain</h4>
              <p className="mt-3">
                Asia Direct - Africa’s customs clearing services are designed to
                integrate seamlessly with your existing supply chain. We handle
                every detail, from classification to clearance, allowing you to
                focus on your core business activities.
              </p>
            </div>
            <div className="col-lg-12 mt-4">
              <h4>Your Gateway to Efficient Global Trade</h4>
              <p className="mt-3">
                Choose Asia Direct - Africa for customs clearing services that
                are synonymous with efficiency, reliability, and expertise
              </p>
            </div>
            <div className="col-lg-12">
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
    </div>
  );
};
export default CustomClearing;
