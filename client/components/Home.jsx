import React from 'react'
import House2 from '../assets/house2.jpg'
import Kitchen from '../assets/bg/homebg4.jpg'
import { FaTools, FaComment } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="Bodyhome">
      <div
        className="content"
        style={{
          backgroundImage: `url(${Kitchen})`,
          // position: 'relative',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      >
        <p className="phome">
          Design & Installation of custom insulated panel solutions is our
          specialty. <br />
          <br />
          We are here to help you to build your new dream home or bach
        </p>
        <img className="homepic" src={House2} alt="house2" />
      </div>
      <div className="phome3">
        <a className="anav2" href="/Services">
          <FaTools size={27} style={{ marginRight: '5px' }} />
          Services
        </a>
        <span
          style={{
            paddingLeft: '2em',
            paddingRight: '2em',
          }}
        >
          <a className="anav2" href="/ContactUs">
            <FaComment size={27} style={{ marginRight: '5px' }} />
            Contact Us
          </a>
        </span>
      </div>
    </div>
  )
}

export default Home
