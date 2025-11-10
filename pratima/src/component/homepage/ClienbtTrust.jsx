import React from 'react'
import image1 from '../../assestss/team-1.png'
import image2 from '../../assestss/team-3.png'
import image3 from '../../assestss/team-2.png'
import image4 from '../../assestss/team-4.png'
export default function ClienbtTrust() {
  return (
    <div>
      <section className="whyteamSec pb80 pt80 wow fadeInDown">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <div data-aos="fade-up">
        <h2 className="safeHead text-center">Our Dedicated Team</h2>
      </div>
      </div>
    </div>
    <div className="row pt50">
      <div className="row">
        <div className="col-lg-3">
          <div className="team">
            <div className="teamImg">
              <img src={image4} alt='hellow' />
            </div>
            <h5>Brooklyn Simmons</h5>
            <p>Marketing Coordinator</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="team">
            <div className="teamImg">
              <img src={image1} alt='hellow' />
            </div>
            <h5>Brooklyn Simmons</h5>
            <p>Marketing Coordinator</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="team">
            <div className="teamImg">
              <img src={image2} alt='hellow' />
            </div>
            <h5>Brooklyn Simmons</h5>
            <p>Marketing Coordinator</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="team">
            <div className="teamImg">
              <img src={image3} alt='hellow' />
            </div>
            <h5>Brooklyn Simmons</h5>
            <p>Marketing Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
