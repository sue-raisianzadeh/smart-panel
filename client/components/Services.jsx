import React from 'react'
import Servisesbg from '../assets/bg/new2-1.png'
import Services1 from '../assets/services/Services1.png'
import Services2 from '../assets/services/Services2.png'
import Services3 from '../assets/services/Services3.png'
import Services4 from '../assets/services/Services4.png'
import Services5 from '../assets/services/services5.png'
import Services6 from '../assets/services/services6.jpg'
import Services7 from '../assets/services/services7.png'
import Services8 from '../assets/services/services8.png'
import Footer from './Footer'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   FaBuilding,
//   FaHardHat,
//   FaDraftingCompass,
//   FaHammer,
//   FaWrench,
//   FaHome,
//   FaTasks,
//   FaMailBulk,
// } from '@fortawesome/free-solid-svg-icons'

// import BuildingIcon from '../assets/icons/building-icon.png'
// import ArchitectIcon from '../assets/icons/architect-icon.png'
// import EngineeringIcon from '../assets/icons/engineering-icon.png'
// import ConstructionIcon from '../assets/icons/construction-icon.png'
// import PlumbingIcon from '../assets/icons/plumbing-icon.png'
// import ElectricalIcon from '../assets/icons/electrical-icon.png'
// import SiteManagementIcon from '../assets/icons/site-management-icon.png'
// import BuildingConstructionIcon from '../assets/icons/building-construction-icon.png'

const Services = () => {
  return (
    <div className="containerservices">
      <div className="bannerservices">
        <div
          className="picbanserv"
          style={{
            backgroundImage: `url(${Servisesbg})`,
            backgroundSize: 'cover',
            width: '63%',
            height: 'auto',
          }}
        >
          <div className="banner-content">
            <h1 className="h1serv">Services</h1>
            <br />
            <h3 className="h3serv">Building Construction</h3>
          </div>
        </div>
        {/* Service items */}
        <div
          className="textbanserv"
          style={{ width: '37%', paddingTop: '3em' }}
        >
          <h2 className="h2serv">
            {/* <FontAwesomeIcon
              icon={FaBuilding}
              size={20}
              style={{ marginRight: '5px' }}
            /> */}
            Products And Services:
          </h2>
          <br />

          <h3 className="h3services">
            {/* <FontAwesomeIcon
              icon={FaHardHat}
              size={20}
              style={{ marginRight: '5px' }}
            /> */}
            Licensed Practising Builders (LPB), Building company.
          </h3>
          <p className="pbanner">
            We only use LPB builders on our sites along with experienced Hammer
            hands
          </p>

          <h3 className="h3services">
            {/* <FontAwesomeIcon
              icon={FaDraftingCompass}
              size={20}
              style={{ marginRight: '5px' }}
            /> */}
            Architectural specialists
          </h3>
          <p className="pbanner">We make the best you want</p>

          <div className="service-item">
            <h3 className="h3services">
              {/* <FontAwesomeIcon
                icon={FaHammer}
                size={20}
                style={{ marginRight: '5px' }}
              /> */}
              Engineering specialists
            </h3>
            <p className="pbanner">We make the best you want</p>
          </div>
          <div className="service-item">
            <h3 className="h3services">
              {/* <FontAwesomeIcon
                icon={FaWrench}
                size={20}
                style={{ marginRight: '5px' }}
              /> */}
              Civil Construction, All Foundation
            </h3>
            <p className="pbanner">We make the best you want</p>
          </div>
          <div className="service-item">
            <h3 className="h3services">
              {/* <FontAwesomeIcon
                icon={FaTasks}
                size={20}
                style={{ marginRight: '5px' }}
              /> */}
              Plumbing and Electrical
            </h3>
            <p className="pbanner">We make the best you want</p>
          </div>
          <div className="service-item">
            <h3 className="h3services">
              {/* <FontAwesomeIcon
                icon={FaHome}
                size={20}
                style={{ marginRight: '5px' }}
              /> */}
              Building Construction
            </h3>
            <p className="pbanner">We build the best you want</p>
          </div>
          <div className="service-item">
            <h3 className="h3services">
              {/* <FontAwesomeIcon
                icon={FaTasks}
                size={20}
                style={{ marginRight: '5px' }}
              /> */}
              Site Management
            </h3>{' '}
            <p className="pbanner">We make the best you want</p>
          </div>
        </div>
      </div>
      <div className="services-details">
        <h2 className="h2services">
          For our clients we provide the following services:
        </h2>
        <p
          className="pserve"
          style={{ fontSize: '1.5em', paddingBottom: '2em' }}
        >
          rrttyuigdhtfjykjhgfdsdfghmj,,
        </p>
        <br />
        <div className="container-wraper">
          <div className="row">
            <div className="col-md-6 gridservice1">
              <h2>Free Standing</h2>
              <p
                className="pserve"
                style={{
                  fontSize: '1.5em',
                  paddingBottom: '2em',
                  paddingLeft: '2em',
                }}
              >
                A free-standing patio design offers an oasis away from the home
                positioned in front of a pool or a cozy spot in the yard perfect
                for weekend gatherings, family events, or regular outdoor
                dining. Your SolarSpan patio designer and installer can offer a
                gable or skillion roof design for a free-standing patio with a
                variety of exciting beam and post options to complement your
                home.
              </p>
              <img
                className="img-fluid servicepic1"
                src={Services1}
                alt="Services1"
              />
            </div>
            <div className="col-md-6 gridservice1">
              <img
                className="img-fluid servicepic2"
                src={Services2}
                alt="Services2"
              />
            </div>
          </div>
          <h2>Property Extension</h2>
          <p
            className="pserve"
            style={{ fontSize: '1.5em', paddingBottom: '2em' }}
          >
            A SolarSpan flyover roof creates an impressive open living area with
            high ceilings for additional headroom, airflow, daylight, and
            unrestricted views. Create architecturally pleasing roof lines to
            enhance your home and breathe new life into an existing deck or
            patio with new-found space and added comfort all year round.
          </p>
          <div className="col-md-6 gridservice1">
            <h2>Gable</h2>
            <p
              className="pserve"
              style={{ fontSize: '1.5em', paddingBottom: '2em' }}
            >
              Create a grand opening to your outdoor living area with a
              SolarSpan gable roof while giving your patio additional height and
              ventilation of hot air. A variety of gable infill and beam options
              are available from your SolarSpan patio designer and installer to
              deliver an exciting patio design.
            </p>
            <img
              className="img-fluid servicepic3"
              src={Services3}
              alt="Services3"
            />
          </div>
          <div className="gridservice1">
            <h2>Attached Skillion</h2>
            <p
              className="pserve"
              style={{ fontSize: '1.5em', paddingBottom: '2em' }}
            >
              For a quick, simple, and cost-effective addition to any home,
              SolarSpan's attached skillion roof will extend your living area,
              provide a multi-use carport, boat port, or general cover area
              which will protect you and your most valuable possessions from the
              heat and cold. Your SolarSpan designer and installer will be able
              to assist you in designing the perfect undercover area, adding
              value to any outdoor area of your home.
            </p>
            <img
              className="img-fluid servicepic4"
              src={Services4}
              alt="Services4"
            />
          </div>
          <div className="gridservice5">
            <img
              className="img-fluid servicepic5"
              src={Services5}
              alt="Services5"
            />
          </div>
          <div className="gridservice1">
            <p
              className="pserve"
              style={{ fontSize: '1.5em', paddingBottom: '2em' }}
            >
              We started from 2021 and tried to use the latest technology for
              building houses.
            </p>
            <img
              className="img-fluid servicepic6"
              src={Services6}
              alt="Services6"
            />
          </div>
          <div className="gridservice1">
            <p
              className="pserve"
              style={{ fontSize: '1.5em', paddingBottom: '2em' }}
            >
              We started from 2021 and tried to use the latest technology for
              building houses.
            </p>
            <img
              className="img-fluid servicepic7"
              src={Services7}
              alt="Services7"
            />
            {/* </div>
          <div className="gridservice1"> */}
            <p
              className="pserve"
              style={{ fontSize: '1.5em', paddingBottom: '2em' }}
            >
              We started from 2021 and tried to use the latest technology for
              building houses.
            </p>
            <img
              className="img-fluid servicepic8"
              src={Services8}
              alt="Services8"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
