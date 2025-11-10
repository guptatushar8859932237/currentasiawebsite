import React from 'react'
import image1 from "../../assestss/choose1.png"
import image2 from "../../assestss/choose2.png"
import image3 from "../../assestss/choose3.png"
export default function Whychooseus() {
  return (
    <div>
      <section className="whyChooseSec pb80 wow fadeInDown">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div data-aos="fade-up">
                <h2 className="safeHead text-center">Why Choose Us</h2>
                </div>
            </div>
        </div>
        <div data-aos="fade-up">
        <div className="row pt50">
            <div className="row">
                <div className="col-lg-4">
                    <div className="whyChooseUs">
                        <div className="imgWhy">
                            <img src={image1} alt="" />
                        </div>
                        <h3>User Friendliness</h3>
                        <p className="paraSafe">Experience our customer tailored solutions, transparent communication, and a customer-first approach. We ensure our systems offer seamless, efficient, and quality-assured logistics from Asia to your doorstep.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="whyChooseUs">
                        <div className="imgWhy">
                        <img src={image2} alt="" />
                        </div>
                        <h3>Experienced Technical Support</h3>
                        <p className="paraSafe">Trust us for expert forwarding support. Our seasoned team ensures compliance, efficiency, and a personalized service dedicated to ensuring a fluent customer experience and smooth shipping process.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="whyChooseUs">
                        <div className="imgWhy">
                        <img src={image3} alt="" />
                        </div>
                        <h3>We are here for you!</h3>
                        <p className="paraSafe">Your shipment is always important to us, and each one feels like it’s a whole new experience and we would love to be of service to you. Whilst we may have done this process a thousand times, we treat every delivery like its our first.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

</section>
    </div>
  )
}
