import React from 'react'
import Servisesbg from '../assets/bg/cosyhome11.png'
import Services1 from '../assets/services/Services1.png'
import Services2 from '../assets/services/Services2.png'
import Services3 from '../assets/services/Services3.png'
import Services4 from '../assets/services/Services4.png'
import Services5 from '../assets/services/services5.png'
import Services6 from '../assets/services/services6.jpg'

import Services7 from '../assets/services/services7.png'

import Services8 from '../assets/services/services8.png'
const Services = () => {
  return (
    <div className="containerservices">
      <div className="bannerservices">
        <div
          className="picbanserv"
          style={{
            backgroundImage: `url(${Servisesbg})`,
            position: 'relative',
            backgroundSize: 'cover',
            width: '70%',
            height: 'auto',
          }}
        >
          <div className="banner-content">
            <h1 className="h1serv">Services</h1>
            <h3 className="h3serv">Building Construction</h3>
          </div>
        </div>
        <div className="textbanserv">
          <h2>Our Services</h2>
          <br />
          <div className="service-item">
            <h3>Licensed practising builders (LPB), Building company.</h3>
            <p>We make the best you want</p>
          </div>
          <div className="service-item">
            <h3>Architectural specialists</h3>
            <p>We make the best you want</p>
          </div>
          <div className="service-item">
            <h3>Engineering specialists</h3>
            <p>We make the best you want</p>
          </div>
          <div className="service-item">
            <h3>Civil Construction, All Foundation</h3>
            <p>We make the best you want</p>
          </div>
          <div className="service-item">
            <h3>Plumming and Electrical</h3>
            <p>We make the best you want</p>
          </div>
          <div className="service-item">
            <h3>Building Construction</h3>
            <p>We build the best you want</p>
          </div>

          <div className="service-item">
            <h3>Site Management</h3>
            <p>We make the best you want</p>
          </div>
        </div>
      </div>
      <div className="services-details">
        <div className="gridservice1">
          <h2>For our clients we provide the following services:</h2>
          <p>
            Our team made the first construction website example! I love the
            content blocks; it’s very structured. Good website structure is
            crucial for SEO. Even if your other SEO efforts are excellent — you
            use keywords correctly, have accurate meta tags, and so on — if your
            site’s structure isn’t robust, those efforts won’t bring the rewards
            you desire. Definitely inspiring!
          </p>
          <img className="servicepic1" src={Services1} alt="Services1" />
        </div>
        <div className="gridservice2">
          <img className="servicepic2" src={Services2} alt="Services2" />

          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
        </div>
        <div className="gridservice3">
          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
          <img className="servicepic3" src={Services3} alt="Services3" />
        </div>
        <div className="gridservice4">
          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
          <img className="servicepic4" src={Services4} alt="Services4" />
        </div>
        <div className="gridservice5">
          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
          <img className="servicepic5" src={Services5} alt="Services5" />
        </div>
        <div className="gridservice6">
          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
          <img className="servicepic6" src={Services6} alt="Services6" />
        </div>
        <div className="gridservice7">
          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
          <img className="servicepic7" src={Services7} alt="servicepic7" />
        </div>
        <div className="gridservice8">
          <p>
            We started from 2021 and tried to use the latest technology for
            building houses.
          </p>
          <img className="servicepic8" src={Services8} alt="servicepic8" />
        </div>
      </div>
    </div>
  )
}

export default Services
