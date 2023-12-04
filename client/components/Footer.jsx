import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [errors, setErrors] = useState({})

  return (
    <div className="container-footer">
      <div className="contact-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-justify">
            <h1 className="contact-information text-white">CONTACT US</h1>
            <div className="company-info-footer">
              <FaPhoneAlt className="icon" />
              <p className="contact-info text-white">Phone: 027 478 1672</p>

              <FaEnvelope className="icon" />
              <p className="contact-info text-red" style={{ color: 'white' }}>
                Email: info@atombuilding.co.nz
              </p>

              <FaMapMarkerAlt className="icon" />
              <p className="contact-info address text-white">
                Address: 23a Hereford Street, Te Atatu Peninsula, Auckland,
                0610, New Zealand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
