import React, { useState, useEffect } from 'react'
import { Modal, Image } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import House1 from '/assets/renovate.jpg'
import House2 from '/assets/interior-design.jpg'
import House3 from '/assets/building.jpg'
import House4 from '/assets/modern-roof.jpg'
import House5 from '/assets/house5.jpg'
import House6 from '/assets/house.jpg'
import House7 from '/assets/house4.jpg'
import House8 from '/assets/house3.jpg'
import House9 from '/assets/roof.jpg'
import House10 from '/assets/house11.jpg'
import House11 from '/assets/building2.jpg'
import House12 from '/assets/solarspan.jpg'
import Footer from './Footer'

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 680,
    })
  }, [])

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [
    House3,
    House9,
    House4,
    House2,
    House1,
    House11,
    House12,
    House10,
    House5,
    House6,
    House7,
    House8,
  ]

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

  const handleKeyDown = (index, event) => {
    if (event.key === 'Enter') {
      openModal(index)
    }
  }

  return (
    <div className="gallerybody">
      <h1 className="hgallery">GALLERY</h1>
      <p className="pgallery">
        Disclaimer: The imagery and video footage provided in this gallery are
        available for media download and use, and must be credited to Metalcraft
        or the photographer specified in the image caption. They cannot be used
        for advertising, marketing, or to imply endorsement.
      </p>
      <div className="galpic">
        <div className="gallery-container blur">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-container modal-lg"
              onClick={() => openModal(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === 'Space') {
                  openModal(index)
                }
              }}
              role="button"
              tabIndex="0"
            >
              <LazyLoadImage
                src={image}
                alt={`House ${index + 1}`}
                effect="blur"
                className="gallery-image"
                placeholder={<div className="image-placeholder" />}
              />
              <div className="image-overlay"></div>
            </div>
          ))}
        </div>
      </div>
      {modalVisible && (
        <Modal
          show={modalVisible}
          onHide={closeModal}
          dialogClassName="modal-container modal-lg"
        >
          <Modal.Body>
            <Image
              src={images[selectedImage]}
              alt={`House ${selectedImage + 1}`}
              className="modal-content"
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
                &#10006;
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <Footer />
    </div>
  )
}

export default Gallery
