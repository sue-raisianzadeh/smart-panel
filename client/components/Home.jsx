import React from 'react'
import House2 from '../assets/house2.jpg'
import House1 from '../assets/houses/house-b.png'
import Kitchen from '../assets/houses/kitchen-a.png'
import Carpark from '../assets/houses/carpark.png'
import Toil from '../assets/houses/toilet.png'

import { FaTools, FaComment } from 'react-icons/fa'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="Bodyhome">
      <div
        className="content-wrapper"
        style={{
          backgroundImage: `url(${House1})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '85vh',
          margin: 0,
        }}
      >
        <div className="text-and-buttons">
          <p className="phome">
            Design & Installation of custom insulated panel solutions is our
            specialty. <br />
          </p>
          <br />
          <div className="button-row">
            <a className="anav2" href="/Services">
              <FaTools size={27} style={{ marginRight: '5px' }} />
              Services
            </a>
            <a className="anav2" href="/ContactUs">
              <FaComment size={27} style={{ marginRight: '5px' }} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="section2-home">
        <div className="texthome-section2">
          <h2 className="h2home-section2">
            {' '}
            We are here to help you build your new dream home or bach
          </h2>
          <div className="pics-3-home-section2">
            <img className="carpark" src={Carpark} alt="carpark" />
            <img className="toil" src={Toil} alt="toil" />
            <img className="kitchen" src={Kitchen} alt="kitchen" />
          </div>
        </div>
        <div className="image-container">
          <img className="homepic" src={House2} alt="house2" />
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default Home
