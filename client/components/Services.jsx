import React, { useState, useEffect } from 'react'
import { Modal, Image } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Servisesbg from '../assets/bg/new--.png'
import Services1 from '/assets/services/Services1.png'
import Services2 from '/assets/services/Services2.png'
import Services3 from '/assets/services/Services3.png'
import Services4 from '/assets/services/Services4.png'
import Services5 from '/assets/services/services5.png'
import Services6 from '/assets/services/services6.jpg'
import Services7 from '/assets/services/services7.png'
import Services8 from '/assets/services/services8.png'
import Footer from './Footer'
import {
  FaTools,
  FaBuilding,
  FaDraftingCompass,
  FaHammer,
  FaTasks,
} from 'react-icons/fa'
import { FaWrench, FaAward } from 'react-icons/fa6'

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 550,
    })
  }, [])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [Services5, Services6, Services7, Services8]
  const openModal = (index) => {
    setSelectedImage(index)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className="containerservices">
      <div className="bannerservices">
        <div data-aos="fade-down-right" className="picbanserv">
          <div className="banner-content"></div>
          <h1 data-aos="fade-down-right" className="h1serv">
            <FaTools
              size={58}
              style={{ color: 'rgb(132, 11, 11)', marginRight: '8px' }}
            />
            Services
          </h1>
          <div>
            <br />
            <h3 data-aos="fade-up" className="h3serv">
              Building Construction
            </h3>
          </div>
        </div>
        {/* Service items */}
        <div
          className="textbanserv"
          style={{ width: '36%', paddingTop: '3em' }}
        >
          <h2 className="h2services">
            <FaBuilding size={31} style={{ marginRight: '5px' }} />
            Our Products And Services:
          </h2>
          <br />
          <h3 className="h3services">
            <FaAward size={31} style={{ marginRight: '5px' }} />
            Licensed Practising Builders (LPB), Building company.
          </h3>
          <p className="pbanner">
            We only use LPB builders on our sites along with experienced Hammer
            hands
          </p>
          <h3 className="h3services">
            <FaDraftingCompass size={31} style={{ marginRight: '5px' }} />
            Architectural specialists
          </h3>
          <p className="pbanner">
            We will work closely with either your preferred architect or we can
            recommend architects for you to talk directlty with{' '}
          </p>
          <div className="service-item">
            <h3 className="h3services">
              <FaHammer size={31} style={{ marginRight: '5px' }} />
              Engineering specialists
            </h3>
            <p className="pbanner">
              We have specialists engineers however, like the architectural, we
              can work with outside engineers if you have a preferance
            </p>
          </div>

          <div className="service-item">
            <h3 className="h3services">
              <FaWrench size={31} style={{ marginRight: '5px' }} />
              Plumbing and Electrical
            </h3>
            <p className="pbanner">
              We use Master Electrical and Plumbing companies so all parties are
              covered with there respective warranties
            </p>
          </div>

          <div className="service-item">
            <h3 className="h3services">
              <FaTasks size={31} style={{ marginRight: '5px' }} />
              Site Management
            </h3>{' '}
            <p className="pbanner">
              With these builds we do like the client to be present on a regular
              basis during the connstruction phase.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="services-body">
        <div className="text-top-body-service">
          <h2 data-aos="fade-down-left" className="h2servbody">
            DESIGN & INSTALLATION
            {/* For our clients we provide the following services: */}
          </h2>
          <br />
          <p data-aos="fade-down-right" className="pservebody">
            We pride ourselves on providing an extensive service covering all
            steps in initial consultations to final commissioning.
          </p>
        </div>
        <div className="services-wraper">
          <div className="section1-services">
            <div>
              <h2 data-aos="fade-down-left" className="h2serveboby">
                Free Standing
              </h2>
              <p data-aos="fade-down-left" className="pserve-section">
                A free-standing patio design offers an oasis away from the home
                positioned in front of a pool or a cozy spot in the yard perfect
                for weekend gatherings , family events, or regular outdoor
                dining. Your SolarSpan patio designer and installer can offer a
                gable or skillion roof design for a free-standing patio with a
                variety of exciting beam and post options to complement your
                home.
              </p>
            </div>
            <div>
              <img
                data-aos="fade-down-right"
                className="servicepic1"
                src={Services1}
                alt="Services1"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="section2-services">
            <img
              data-aos="fade-down-left"
              className="servicepic2"
              src={Services2}
              alt="Services2"
            />
            <div>
              <h2 data-aos="fade-down-left" className="h2serveboby">
                Property Extension
              </h2>
              <p data-aos="fade-down-right" className="pserve-section">
                A SolarSpan flyover roof creates an impressive open living area
                with high ceilings for additional headroom, airflow, daylight,
                and unrestricted views. Create architecturally pleasing roof
                lines to enhance your home and breathe new life into an existing
                deck or patio with new-found space and added comfort all year
                round.
              </p>
            </div>
          </div>
          <div className="section3-services">
            <div>
              <p data-aos="fade-down-left" className="pserve-section">
                <h2 data-aos="fade-down-left" className="h2serveboby">
                  Gable
                </h2>
                Create a grand opening to your outdoor living area with a
                SolarSpan gable roof while giving your patio additional height
                and ventilation of hot air. A variety of gable infill and beam
                options are available from your SolarSpan patio designer and
                installer to deliver an exciting patio design.
              </p>
            </div>

            <img
              data-aos="fade-down-right"
              className="servicepic3"
              src={Services3}
              alt="Services3"
            />
          </div>
          <br />
          <br />
          <div className="section4-services">
            <img
              data-aos="fade-down-left"
              className="servicepic4"
              src={Services2}
              alt="Services4"
            />
            <div>
              <p data-aos="fade-down-right" className="pserve-section">
                <h2 data-aos="fade-down-right" className="h2serveboby">
                  Attached Skillion
                </h2>
                For a quick, simple, and cost-effective addition to any home,
                SolarSpan's attached skillion roof will extend your living area,
                provide a multi-use carport, boat port, or general cover area
                which will protect you and your most valuable possessions from
                the heat and cold. Your SolarSpan designer and installer will be
                able to assist you in designing the perfect undercover area,
                adding value to any outdoor area of your home.
              </p>
            </div>
          </div>{' '}
        </div>
        <div className="section5-services">
          <div className="section-pic5and6">
            <h2
              data-aos="fade-down-right"
              className="h2serveboby"
              style={{ paddingTop: '2rem' }}
            >
              The ultimate in Patio & Pergola design options
            </h2>
            <p data-aos="fade-up-left" className="pserve-section5-6">
              A SolarSpan outdoor shaded living area offers the ultimate freedom
              in design. Select from a wide choice of modern COLORBOND steel
              colours for your SolarSpan roof, unique ceiling profiles, designer
              roofing accessories in COLORBOND and a selection of stylish posts
              and beams available in prepainted steel, aluminium or stained
              timber. SolarSpan creates wide open spaces with a ceiling-like
              finish due to its long unsupported spans. This allows home owners
              to further customise their design other lighting solutions. with
              ceiling accessories such as downlights, fans and SolarSpan truly
              allows you to create functional and beautiful outdoor living areas
              that complement your home and improve your outdoor lifestyle.
            </p>
            <div className="galpic">
              <div className="gallery-container">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="image-container"
                    onClick={() => openModal(index)}
                    onKeyDown={() => openModal(index)} // for accessibility
                    role="button" // indicates the div is a button
                    tabIndex="0" // allows keyboard navigation
                  >
                    <img
                      data-aos="fade-down-left"
                      src={image}
                      alt={`House ${index + 1}`}
                      className="gallery-image"
                    />
                    <div className="image-overlay" />
                  </div>
                ))}
              </div>
            </div>

            {modalVisible && (
              <Modal
                show={modalVisible}
                onHide={closeModal}
                dialogClassName="modal-container modal-xl"
              >
                <Modal.Body>
                  <Image
                    src={images[selectedImage]}
                    alt={`House ${selectedImage + 1}`}
                    className="modal-content "
                  />
                  <div className="arrow arrow-left" onClick={prevImage}>
                    &#11164;
                  </div>
                  <div className="arrow arrow-right" onClick={nextImage}>
                    &#11166;
                  </div>
                  <div className="download-button">
                    <a
                      href={images[selectedImage]}
                      download={`House_${selectedImage + 1}.png`}
                    >
                      Download
                    </a>
                    <div className="close" onClick={closeModal}>
                      &#10005;
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            )}
            {/* <div className="pic6-7-in-section5">
              <img className="servicepic6" src={Services6} alt="Services6" />
              <div>
                <img className="servicepic5" src={Services5} alt="Services5" />
              </div>
            </div> */}

            {/* <div>
              <img className="servicepic7" src={Services7} alt="Services7" />
            </div> */}
          </div>
        </div>
        {/* <div className="section8-services">
          <div>
            <img
              data-aos="fade-down-right"
              className="servicepic8"
              src={Services8}
              alt="Services8"
            />
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Services
