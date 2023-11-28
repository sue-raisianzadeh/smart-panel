import React, { useEffect, useState } from 'react'
import Homeabout from '../assets/1house 4.-1.png'

const AboutUs = () => {
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bodyabout" style={{ backgroundColor: ' #333' }}>
      <div className="containerabout">
        <div
          className="bannerabout"
          style={{ backgroundPositionY: `${scrollOffset * 0.5}px` }}
        >
          <div className="aboutpic">
            <img className="aboutpicc" src={Homeabout} alt="house2" />
          </div>
          <h1 className="habout">About Us</h1>
        </div>
        <div
          className="textabout"
          style={{ transform: `translateY(${scrollOffset * 0.3}px)` }}
        >
          <h2 className="h2about">we plan to create amazing times for you </h2>
          <p className="pabout">
            We started from 2021 and tried to use the latest technology for
            building houses. We started from 2021 and tried to use the latest
            technology for building houses. We started from 2021 and tried to
            use the latest technology for building houses. We started from 2021
            and tried to use the latest technology for building houses. We
            started from 2021 and tried to use the latest technology for
            building houses. We started from 2021 and tried to use the latest
            technology for building houses. We started from 2021 and tried to
            use the latest technology for building houses. We started from 2021
            and tried to use the latest technology for building houses. We
            started from 2021 and tried to use the latest technology for
            building houses. We started from 2021 and tried to use the latest
            technology for building houses. We started from 2021 and tried to
            use the latest technology for building houses. We started from 2021
            and tried to use the latest technology for building houses. We
            started from 2021 and tried to use the latest technology for
            building houses. We started from 2021 and tried to use the latest
            technology for building houses. We started from 2021 and tried to
            use the latest technology for building houses.We started from 2021
            and tried to use the latest technology for building houses. We
            started from 2021 and tried to use the latest technology for
            building houses. We started from 2021 and tried to use the latest
            technology for building houses. We started from 2021 and tried to
            use the latest technology for building houses. We started from 2021
            and tried to use the latest technology for building houses.We
            started from 2021 and tried to use the latest technology for
            building houses. We started from 2021 and tried to use the latest
            technology for building houses. We started from 2021 and tried to
            use the latest technology for building houses. We started from 2021
            and tried to use the latest technology for building houses. We
            started from 2021 and tried to use the latest technology for
            building houses.
            {/* Add more sentences here */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
