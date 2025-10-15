import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { galleryImages } from '../data/galleryData';
import SectionHeader from '../components/SectionHeader';
import { ZoomIn } from 'react-bootstrap-icons';

import '../styles/GalleryPage.css';

const GalleryHero = () => (
  <div className="gallery-hero-section">
    <div className="gallery-hero-overlay"></div>
    <Container className="position-relative">
      <div className="gallery-hero-content">
        <h1>Campus Moments</h1>
      </div>
    </Container>
  </div>
);

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleImageClick = (src) => setSelectedImage(src);
  const handleCloseModal = () => setSelectedImage(null);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <GalleryHero />
      <Container className="section-padding">
        <SectionHeader
          title="Explore Our Gallery"
          subtitle="A glimpse into the vibrant life at Pamantasan ng Cabuyao."
          align="center"
        />

        {/* Filter Buttons */}
        <div className="filter-buttons text-center mb-5">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'primary' : 'outline-primary'}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <Row className="g-4">
          {filteredImages.map(image => (
            <Col key={image.id} md={6} lg={4}>
              <div className="gallery-item" onClick={() => handleImageClick(image.src)}>
                <img src={image.src} alt={image.alt || image.category} />
                <div className="gallery-overlay">
                  <ZoomIn />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal Component */}
      <Modal show={selectedImage !== null} onHide={handleCloseModal} centered size="lg" className="lightbox-modal">
        <Modal.Body>
          <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryPage;