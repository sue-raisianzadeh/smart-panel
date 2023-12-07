import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div className="container-footer">
      <div className="contact-container-footer">
        <div className="row justify-content-center align-items-center footer-row">
          <div className="col-md-6 text-justify contact-footer-colum">
            <div className="info-box-footer">
              <h1 className="contact-us text-white">CONTACT US</h1>
              <div className="company-info-footer">
                <FaPhoneAlt className="icon footer-icons" />
                <p className="company-info text-white">Phone: 027 478 1672</p>

                <FaEnvelope className="icon footer-icons" />
                <p className="company-info text-white">
                  Email: info@atombuilding.co.nz
                </p>

                <FaMapMarkerAlt className="icon footer-icons" />
                <p className="company-info address text-white">
                  Address: 23a Hereford Street, Te Atatu Peninsula, Auckland,
                  0610, New Zealand
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-justify">
            <div className="about-box-footer">
              <h1 className="about text-white">ABOUT</h1>
              <div className="company-info-footer">
                <p className="company-info text-white">
                  Atom building and construction ltd are a New Zealand designer,
                  manufacturer, and installer of complete insulated panel
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
