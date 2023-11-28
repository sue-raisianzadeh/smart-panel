import React from 'react'
import Servisesbg from '../assets/servisesbg.jpg'

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
            <h1>Services</h1>
            <h3>Building Construction</h3>
          </div>
        </div>
        <div className="textbanserv">
          <h2>Our Services</h2>
          <div className="service-item">
            <h3>Building Construction</h3>
            <p>We build the best you want</p>
            {/* You can add an icon here if needed */}
          </div>
          <div className="service-item">
            <h3>Foundation Work</h3>
            <p>We make the best you want</p>
            {/* You can add an icon here if needed */}
          </div>
          <div className="service-item">
            <h3>Tear-down & Haul-offs</h3>
            <p>We make the best you want</p>
            {/* You can add an icon here if needed */}
          </div>
          <div className="service-item">
            <h3>Site Management</h3>
            <p>We make the best you want</p>
            {/* You can add an icon here if needed */}
          </div>
        </div>
      </div>
      <div className="services-details">
        <div className="gridservice1">
          <h1>Construction Services</h1>
          <p>
            Our team made the first construction website example! I love the
            content blocks; it’s very structured. Good website structure is
            crucial for SEO. Even if your other SEO efforts are excellent — you
            use keywords correctly, have accurate meta tags, and so on — if your
            site’s structure isn’t robust, those efforts won’t bring the rewards
            you desire. Definitely inspiring!
          </p>
        </div>
        <div className="gridservice2">
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
        </div>
      </div>
    </div>
  )
}

export default Services
