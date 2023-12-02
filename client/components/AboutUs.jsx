import React, { useEffect, useState } from 'react'
import Homeabout from '../assets/house8-1.png'

const AboutUs = () => {
  return (
    <div className="bodyabout" style={{ backgroundColor: ' #333' }}>
      <div className="containerabout">
        <div className="bannerabout">
          <div className="aboutpic">
            <img className="aboutpicc" src={Homeabout} alt="house2" />
          </div>
          <h1 className="habout">About Us</h1>
        </div>
        <div className="textabout">
          <h2 className="h2about">ABOUT US </h2>
          <p className="pabout">
            Smart Panel Homes come about after I built a commercial building
            using insulated panel and was instantly impressed with the ease of
            build, halving the current build times.
            <br /> From there my research took me to Australia to look at the
            innovation currently being marketed and built across the Australian
            continent.
            <br />
            <br /> This experience led me to make the following important
            discoveries It is critical to use local manufacturers, so the
            technical experience is close at hand.
            <br />
            <b>
              {' '}
              This local manufacturer is also well placed to supply products
              that:
            </b>
            <br />
            <br />
            a. Survive the test of time.
            <br />
            <br />
            b. Provide a solid warranty product, that protects all parties
            <br />
            <br />
            c. Able implement Research and Development, continually improving
            the product to suit NZ conditions. <br />
            <br />
            In addition to the above we have also developed relationships with a
            key architect and Building company, more details on these companies
            will be included on other pages
            {/* Add more sentences here */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
