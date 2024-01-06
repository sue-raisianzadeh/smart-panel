import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div className="container-footer">
      <div className="contact-container-footer">
        <div className="row justify-content-center align-items-center footer-row">
          <div className="col-md-6 text-justify contact-footer-colum">
            <div className="info-box-footer">
              <h1 className="contact-us2 text-white">CONTACT US</h1>
              <div className="company-info-footer">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                  }}
                >
                  <FaPhoneAlt className="icon footer-icons" />
                  <p className="company-info text-white">Phone: 027 478 1672</p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: '1rem',
                  }}
                >
                  <FaEnvelope className="icon footer-icons" />
                  <p className="company-info text-white">
                    Email: info@smartpanelhomes.co.nz
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <FaMapMarkerAlt className="icon footer-icons" />
                  <p className="company-info address text-white">
                    Address: 23a Hereford Street, Te Atatu Peninsula, Auckland,
                    0610, New Zealand
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-justify">
            <div className="about-box-footer">
              <h1 className="about text-white">ABOUT</h1>
              <div className="company-info-footer">
                <p className="company-info text-white">
                  Smart Panel Homes Limited is an installer of insulated panel
                  (Cool Room Panel), for use in Homes and Bachs{' '}
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
