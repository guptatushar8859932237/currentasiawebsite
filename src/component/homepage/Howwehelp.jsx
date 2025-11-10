import React, { useState } from "react";
import image1 from "../../assestss/tildImg.jpg";
import image2 from "../../assestss/help1.png";
import image3 from "../../assestss/help2.png";
export default function Howwehelp() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const helpItems = [
    {
      title: "Ultimate Data Protection",
      image: image2,
      description:
        "Asia Direct secures client shipping data using advanced encryption, secure cloud storage, and strict privacy compliance throughout all air and sea freight transactions.",
    },
    {
      title: "Easy and Quick Customer Service",
      image: image3,
      description:
        "Our support team offers 24/7 assistance through live chat, email, and phone, ensuring that your logistics concerns are resolved swiftly.",
    },
    // Add more items as needed
  ];

  return (
    <div>
      <section className="pt80 pb80 BusineSec">
        <div className="container">
          <div className="row">
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
                <h2 className="safeHead">
                  How We Help Businesses Across The World.
                </h2>
                <p className="paraSafe mt-4">
                  At Asia Direct, we support businesses across the globe with
                  tailored logistics and sourcing solutions. Our team ensures
                  transparent communication, reliable timelines, and full
                  visibility at every step of the process—regardless of your
                  location. Whether you're scaling operations or managing
                  complex supply chains, we provide the tools and support to
                  help you succeed internationally.
                </p>
                {helpItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="parentHelp">
                      <div className="helpImg">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="ultimateDate">
                        <h6>{item.title}</h6>
                      </div>
                    </div>

                    <div
                      className={`helpDescription ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
