import React, { useState } from 'react'
import axios from 'axios'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import NZ1 from '../assets/nz1.png'

function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [errors, setErrors] = useState({})

  const handleNameChange = (e) => {
    setName(e.target.value)
    setShowPopup(false)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setShowPopup(false)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const validateForm = () => {
    const errors = {}

    if (!name.trim()) {
      errors.name = 'Name is required'
    }

    if (!email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format'
    }

    if (!message.trim()) {
      errors.message = 'Message is required'
    }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length === 0) {
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setShowPopup(true)

      try {
        const newUser = { name, email, phone, message }
        await axios.post('/api/add-user', newUser)
        // await axios.post('https://emailsender.com/', newUser)
      } catch (error) {
        console.error(error)
      }
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <div
      className="container-zone"
      style={{
        backgroundImage: `url(${NZ1})`,

        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="contact-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <h1 className="get-in-touch text-white">GET IN TOUCH</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            {/* <div className="company-info"> */}
            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <p className="contact-info text-white">Phone: 027 478 1672</p>
            </div>
            <div className="info-box2">
              <FaEnvelope className="icon" />
              <p className="contact-info text-red" style={{ color: 'red' }}>
                Email: info@atombuilding.co.nz
              </p>
            </div>
            <div className="info-box2">
              <FaMapMarkerAlt className="icon" />
              <p className="contact-info address text-white">
                Address: 23a Hereford Street, Te Atatu Peninsula, Auckland, 0610
                , New Zealand
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className="allform-col-md-6.5">
            <div className="contactform">
              <form
                onSubmit={handleSubmit}
                className="form-animation-container"
              >
                <div className="form-part">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleNameChange}
                      className={`form-control ${
                        errors.name ? 'is-invalid' : ''
                      }`}
                      style={{ width: '22em', height: '3em' }} // Set a wider width for the input
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`form-control ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                      style={{ width: '22em', height: '3em' }} // Set a wider width for the input
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="form-control"
                      style={{ width: '22em', height: '3em' }} // Set a wider width for the input
                    />
                  </div>
                </div>
                <div className="form-part">
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={handleMessageChange}
                      className={`form-control ${
                        errors.message ? 'is-invalid' : ''
                      }`}
                      required
                      style={{ height: '11em', width: '22em' }} // Set a wider width and the same height for the textarea
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <div
                    className="d-flex justify-content-center"
                    style={{
                      width: '8em',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div className="submit">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          background: 'darkred',
                          width: '8em',
                          justifyContent: 'center',
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {showPopup && (
                <div className="popup">
                  <p>
                    Thank you for contacting us!
                    <br />
                    <br /> We will get back to you as soon as possible.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
