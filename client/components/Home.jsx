import React, { useEffect } from 'react'
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'
import House2 from '/assets/house2.jpg'
import Homepage from '/assets/homepage.jpg'
// import House1 from '/assets/houses/house-b.png'
import Kitchen from '/assets/kitchen-a.png'
import Carpark from '/assets/carpark.png'
import Toil from '/assets/toilet.png'

import { FaTools, FaComment } from 'react-icons/fa'
import Footer from './Footer'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className="Bodyhome">
      <div
        data-aos="fade-down"
        className="content-wrapper"
        style={{
          backgroundImage: `url(${Homepage})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '85vh',
          margin: 0,
          borderBottom: '5px solid darkred',
        }}
      >
        <div className="text-and-buttons">
          <h1 data-aos="fade-down-right" className="phome">
            Design & Installation of custom insulated panel solutions is our
            specialty. <br />
          </h1>
          <br />
        </div>
        <div className="scroll-down-container">
          <div>
            <p className="scroll-text">Scroll for more</p>
          </div>
          <FontAwesomeIcon className="arrow-home" icon={faArrowDown} />
        </div>
      </div>
      <div className="section2-home">
        <div className="texthome-section2">
          <h2 data-aos="fade-down-right" className="h2home-section2">
            {' '}
            We are here to help you build your new dream home or bach
          </h2>
          <div className="pics-3-home-section2">
            <img
              data-aos="fade-down-right"
              className="carpark"
              src={Carpark}
              alt="carpark"
            />
            <img data-aos="fade-right" className="toil" src={Toil} alt="toil" />
            <img
              data-aos="fade-down-right"
              className="kitchen"
              src={Kitchen}
              alt="kitchen"
            />
          </div>
        </div>
        <div className="image-container-home ">
          <img
            data-aos="fade-down-left"
            className="homepic"
            src={House2}
            alt="house2"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
