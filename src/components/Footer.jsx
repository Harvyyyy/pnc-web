import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GeoAltFill, TelephoneFill, EnvelopeFill, Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import PncLogo from '../assets/pnc-logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container className="py-3">
        <Row>
          <Col lg={4} md={12} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <img src={PncLogo} alt="PNC Logo" width="50" height="50" />
              <h5 className="ms-2 mb-0 text-white">Pamantasan ng Cabuyao</h5>
            </div>
            <p>
              Pamantasan ng Cabuyao (PNC), also known as the University of Cabuyao, was established through Municipal Ordinance 2003-059 on April 16, 2003.
            </p>
            <div className="social-icons mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          <Col lg={6} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Contact Us</h5>
            <div className="footer-contact-info">
              <div className="info-item">
                <GeoAltFill />
                <span>Katapatan Mutual Homes, Brgy. Banay-banay, Cabuyao, Laguna</span>
              </div>
              <div className="info-item">
                <TelephoneFill />
                <span>(049) 531-5623</span>
              </div>
              <div className="info-item">
                <EnvelopeFill />
                <span>info@pnc.edu.ph</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;