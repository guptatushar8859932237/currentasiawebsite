import React from "react";
import Slider from "react-slick"
import image2 from '../../assestss/slide5.jpg'
import image3 from '../../assestss/slidenew1.jpg'
import image4 from '../../assestss/slidenew3.jpeg'
import image5 from '../../assestss/subscribe-1.png'
import { useNavigate } from "react-router-dom";
export default function Oursuppluchain() {
  
  const navigate = useNavigate()

  const showShipMode = () => {
    navigate("/shippingmode")
  }
  const hyabndleclickCustom = () =>{
    navigate('/custom-Faq')
  }
  const handleclickconsoli =()=>{
    navigate('/CargoConsolidration')
  }
  const handleclickEcomm =()=>{
    navigate('/E-commerce')
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <section className="blogHome pb80 wow fadeInDown">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="news-slider" className="owl-carousel">
                <Slider {...settings}>
                  <div className="mx-2">
                    <div className="post-slide">
                      <div className="post-img">
                        <img src={image2} alt='hellow' />
                        <p className="over-layer">
                          <i className="fa fa-link" />
                        </p>
                      </div>
                      <div className="post-content">
                        <h3 className="post-title">
                          <p>
                          Shipping Modes: Your Choices
                          </p>
                        </h3>
                        <p className="post-date" onClick={showShipMode}>
                          {" "}
                          Read More <i className="	fa fa-long-arrow-right" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-2">
                    <div className="post-slide">
                      <div className="post-img">
                        <img src={image5} alt='hellow' />
                        <p className="over-layer">
                          <i className="fa fa-link" />
                        </p>
                      </div>
                      <div className="post-content">
                        <h3 className="post-title">
                          <p>
                          Customs Clearing: The costs & the challenges
                          </p>
                        </h3>
                        <a className="post-date" onClick={hyabndleclickCustom}>
                          {" "}
                          Read More <i className="	fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mx-2">
                    <div className="post-slide">
                      <div className="post-img">
                        <img src={image3} alt='hellow' />
                        <p className="over-layer">
                          <i className="fa fa-link" />
                        </p>
                      </div>
                      <div className="post-content">
                        <h3 className="post-title">
                          <p>
                          Cargo Consolidation
                          </p>
                        </h3>
                        <a className="post-date" onClick={handleclickconsoli}>
                          {" "}
                          Read More <i className="	fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mx-2">
                    <div className="post-slide">
                      <div className="post-img">
                        <img src={image4} alt='hellow' />
                        <p className="over-layer">
                          <i className="fa fa-link" />
                        </p>
                      </div>
                      <div className="post-content">
                        <h3 className="post-title">
                          <p>
                          E-commerce Support from China
                          </p>
                        </h3>
                        <a className="post-date" onClick={handleclickEcomm}>
                          {" "}
                          Read More <i className="	fa fa-long-arrow-right"  />
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
