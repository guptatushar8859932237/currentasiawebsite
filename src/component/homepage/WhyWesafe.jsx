import React from "react";
import Slider from "react-slick";
import image1 from "../../assestss/client1.png";

import image2 from "../../assestss/GLENCORE.png";
import image3 from "../../assestss/Health.png";
import image4 from "../../assestss/SHANTU.png";
import image5 from "../../assestss/SULZER.png";
import image6 from "../../assestss/SUPRAHEALTH.png";
import image7 from "../../assestss/TGOOD.png";
import image8 from "../../assestss/TOPTECH.png";
export default function WhyWesafe() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="owlSec pb80 wow fadeInDown">
        <div className="container">
          <div className="row">
            <div data-aos="fade-up">
              <div className="text-center">
                <small>CLIENTS THAT TRUST US</small>
              </div>
              <h2>OUR CLIENTS</h2>
            </div>
          </div>
          <div className="row pt50">
            <div id="newSlider" className="owl-carousel">
              <div>
                <Slider {...settings}>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image1} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image2} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image3} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image4} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image5} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image6} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image7} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image8} alt="hellow" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
