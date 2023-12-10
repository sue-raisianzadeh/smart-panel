// NavBar.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo1 from '../assets/icons/logo-smart1.png'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaSchool,
  FaTools,
  FaBuilding,
  FaImage,
  FaComment,
} from 'react-icons/fa'

const NavBar = () => {
  const location = useLocation()

  const isDarkRedBackground = location.pathname === '/SpecificPage'
  const isActive = (pathname) => {
    return location.pathname === pathname ? 'active-link' : ''
  }

  return (
    <div className={`navbar-container ${isDarkRedBackground ? 'red' : ''}`}>
      {/* The top part with contact information */}
      <div className="top-line">
        <div className="logo-container">
          <img className="logopic" src={Logo1} alt="Logo1" />
        </div>
        <div className="contact-info1">
          <div className="contact-link-container">
            <FaEnvelope
              size={20}
              style={{ marginRight: '1em', color: 'white' }}
            />
            <a
              className="contact-link"
              href="mailto:info@smartpanelhomes.co.nz"
            >
              info@smartpanelhomes.co.nz
            </a>
          </div>
          <div className="contact-link-container">
            <FaPhoneAlt
              size={20}
              style={{ marginRight: '1em', color: 'white' }}
            />
            <a className="contact-link" href="tel:0274781672">
              027 478 1672
            </a>
          </div>
        </div>
      </div>
      {/* The main navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`}>
                <FaHome size={20} style={{ marginRight: '5px' }} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className={`nav-link ${isActive('/AboutUs')}`}
              >
                <FaSchool size={20} style={{ marginRight: '5px' }} />
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Services"
                className={`nav-link ${isActive('/Services')}`}
              >
                <FaTools size={20} style={{ marginRight: '5px' }} />
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/Projects"
                className={`nav-link ${isActive('/Projects')}`}
              >
                <FaBuilding size={20} style={{ marginRight: '5px' }} />
                Projects
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/Gallery"
                className={`nav-link ${isActive('/Gallery')}`}
              >
                <FaImage size={20} style={{ marginRight: '5px' }} />
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className={`nav-link ${isActive('/ContactUs')}`}
              >
                <FaComment size={20} style={{ marginRight: '5px' }} />
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
