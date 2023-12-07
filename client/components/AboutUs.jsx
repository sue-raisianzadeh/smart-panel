import React, { useEffect } from 'react'
import { Element, animateScroll as scroll } from 'react-scroll'
import About1 from '../assets/about/about.jpg'
import About2 from '../assets/about/about3.jpg'
import About3 from '../assets/about/15.jpg'
import About4 from '../assets/about/I8.jpg'
import About5 from '../assets/about/16.jpg'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="section1-about">
        <div className="text-animation-container">
          <h2 className="h2about">About Us</h2>
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
            <br /> This local manufacturer is also well placed to supply
            products that:
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
          </p>
        </div>

        <div className="picabout1-animation-container">
          <div className="pic-2-section1">
            <img className="about1" src={About1} alt="About1" />
            <img className="about1" src={About2} alt="About2" />
          </div>
          {/* <div className="divabout1-1"> */}
          <img className="about1-1" src={About3} alt="About3" />
          {/* </div> */}
        </div>
      </div>
      <div
        className="section2-about"
        style={{
          backgroundImage: `url(${About4})`,

          width: '99vw',
          height: '55vh',
        }}
      >
        {/* <img className="picabout2" src={About4} alt="About4" /> */}
        <div className="text">
          {/* <h2 className="h2about-section2">Smart Panel Homes Ltd</h2> */}
          <h2 className="h2about2-section2">
            Your Trust Is Our Responsibility <br />
            <span className="spansection2" style={{ paddingTop: '3em' }}>
              Our rich expertise allows us to deliver all the assigned projects
            </span>
            placidly
          </h2>
        </div>
      </div>
      {/* Section 3 */}
      <div className="section3">
        <div className="text">
          <h2 className="h2about3">We Have Worked With Brands</h2>
          <p className="pabout4">
            We have had the privilege of helping many companies with cold
            storage, freezers...
          </p>
        </div>
        <img className="about3" src={About5} alt="About5" />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
