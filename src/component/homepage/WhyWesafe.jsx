import React from "react";
import Slider from "react-slick";
import image1 from "../../assestss/client1.png";

import image2 from "../../assestss/client2.png";
import image3 from "../../assestss/client-logo_05.png";
import image4 from "../../assestss/client-logo4.png";
import image5 from "../../assestss/client5.png";
import image6 from "../../assestss/logo1new.png";
import image7 from "../../assestss/logo_2.png";
import image8 from "../../assestss/logo_3.png";
import image9 from "../../assestss/logo_4.png";
import image10 from "../../assestss/logo_5.png";
import image11 from "../../assestss/logo_6.png";

// import image5 from '../../assestss/client5.png'
// import image5 from '../../assestss/client5.png'
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
                  <div>
                    <div className="LogoOpacity">
                      <img src={image9} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image10} alt="hellow" />
                    </div>
                  </div>
                  <div>
                    <div className="LogoOpacity">
                      <img src={image11} alt="hellow" />
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
