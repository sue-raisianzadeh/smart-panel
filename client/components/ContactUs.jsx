import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import NZ1 from '/assets/nz1.jpg'
// import Footer from './Footer'

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 850,
    })
  }, [])
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
          <div data-aos="fade-down-right" className="col-md-6 text-center">
            <h1
              className="get-in-touch text-white"
              style={{ paddingTop: '2em' }}
            >
              GET IN TOUCH
            </h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <div data-aos="fade-down-right" className="info-box">
              <FaPhoneAlt className="icon" />
              <p className="contact-info text-white">Phone: 027 478 1672</p>
            </div>
            <div data-aos="fade-down-right" className="info-box2">
              <FaEnvelope className="icon" />
              <p className="contact-info text-red" style={{ color: 'red' }}>
                Email: info@smartpanelhomes.co.nz
              </p>
            </div>
            <div data-aos="fade-down-left" className="info-box2">
              <FaMapMarkerAlt className="icon" />
              <p
                className="contact-info text-white"
                style={{ paddindLeft: '1.75rem', paddindRight: '1.75rem' }}
              >
                Address: 23a Hereford Street, Te Atatu Peninsula, Auckland, 0610
                , New Zealand
              </p>
            </div>
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
                      style={{ width: '22em', height: '3em' }}
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
                      style={{ width: '22em', height: '3em' }}
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
                      style={{ width: '22em', height: '3em' }}
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
                      style={{ height: '11em', width: '22em' }}
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
