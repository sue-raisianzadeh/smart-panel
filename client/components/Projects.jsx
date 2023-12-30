import React from 'react'
import Bgproject from '/assets/1housesp.png'
// import Logo1 from '/assets/Logo1.png'

const Projects = () => {
  return (
    <div
      className="projectheader"
      style={{
        backgroundImage: `url(${Bgproject})`,
        position: 'relative',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <h1 className="h1proj">Smart Panel Homes Ltd</h1>
      <h2 className="h2proj">
        Turn your vision into a reality with planning and Design
      </h2>

      <div className="grid-wrapper">
        <div className="grid1">
          <div className="projectl">
            {/* <img className="logopic" src={Logo1} alt="Logo1" /> */}
            <h2 className="h2pro1">peoject1</h2>
            <p className="p4">this is project 1</p>
          </div>
        </div>
        <div className="grid2">
          {/* <img className="logopic" src={Logo1} alt="Logo1" /> */}
          <h2 className="h2pro2">project2</h2>

          <p className="pp4">
            please have a look on other projects at Atom Company
            <br />
            <a className="download2" href="https://atom.com">
              Atom Company
              {/* <ImDownload2
              size={28}
              color="white"
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                alignItems: 'center',
                justifySelf: 'center',
                textAlign: 'center',
              }}
            /> */}
            </a>
          </p>
        </div>

        <div className="grid3">
          {/* <img className="logopic" src={Logo1} alt="Logo1" /> */}
          <h2 className="h2pro2">
            {/* <RiFlashlightLine size={45} /> */}
            Project3
          </h2>
          <p className="p1"></p>

          <div className="Social social-container">
            <a
              className="social2"
              target="blank1"
              href="https://www.linkedin.com/in/sue-raisianzadeh/"
            >
              {/* <ImLinkedin size={35} color="white" /> */}
            </a>
            {/* <a className="social2" href="https://twitter.com"><ImTwitter /></a>
    <a className="social2" href="https://instagram.com/"><ImInstagram /></a>
    <a className="social2" href="https://Youtube.com"><ImYoutube /></a> */}
            <a
              className="social2"
              target="blank"
              href="https://github.com/sue-raisianzadeh?tab=repositories"
            >
              {/* <AiOutlineGithub size={35} color="white" /> */}
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Projects
