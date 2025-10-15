// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { GeoAltFill, TelephoneFill, EnvelopeFill, CheckCircleFill } from 'react-bootstrap-icons';
import SectionHeader from '../components/SectionHeader';
import PNC6 from '../assets/pnc6.jpg';

// Import the new styles
import '../styles/ContactPage.css';

// --- Section Components for a Cleaner Structure ---

// 1. Hero Section for the Contact Page
const ContactHero = () => (
  <div className="contact-hero-section" style={{ backgroundImage: `url(${PNC6})` }}>
    <div className="contact-hero-overlay"></div>
    <Container className="position-relative">
      <div className="contact-hero-content">
        <h1>Get In Touch</h1>
      </div>
    </Container>
  </div>
);

// 2. Reusable Contact Info Card
const InfoCard = ({ icon, title, text }) => (
  <div className="contact-info-card">
    <div className="contact-icon">{icon}</div>
    <div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  </div>
);

// --- Main ContactPage Component ---
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      // Basic validation, can be enhanced
      alert('Please fill out all fields.');
      return;
    }
    setFormStatus('submitting');
    console.log('Form submitted:', formData);

    // Simulate an API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1000); // 1-second delay
  };

  return (
    <>
      <ContactHero />
      <Container className="section-padding">
        <Row className="g-5">
          {/* Column 1: Contact Information */}
          <Col lg={5}>
            <SectionHeader title="Contact Information" align="start" />
            <InfoCard icon={<GeoAltFill />} title="Address" text="Katapatan Mutual Homes, Brgy. Banay-banay, Cabuyao, Laguna" />
            <InfoCard icon={<TelephoneFill />} title="Phone" text="(049) 531-5623" />
            <InfoCard icon={<EnvelopeFill />} title="Email" text="info@pnc.edu.ph" />
          </Col>

          {/* Column 2: Contact Form & Map */}
          <Col lg={7}>
            <SectionHeader title="Send Us a Message" align="start" />
            {formStatus === 'success' ? (
              <div className="form-success-message">
                <CheckCircleFill size={30} className="mb-3" />
                <h4>Thank You!</h4>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
              </div>
            ) : (
              <Card className="p-4 shadow-sm border-0 contact-form">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName"><Form.Label>Full Name</Form.Label><Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required /></Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail"><Form.Label>Email address</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required /></Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage"><Form.Label>Message</Form.Label><Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Your message" required /></Form.Group>
                    <Button type="submit" size="lg" className="hero-button-primary" disabled={formStatus === 'submitting'}>
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            )}
            
            {/* Embedded Google Map */}
            <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.582845347285!2d121.1396116146931!3d14.277884890001944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d8601f0e47a1%3A0x8e83b4a2e5554f6!2sPamantasan%20ng%20Cabuyao!5e0!3m2!1sen!2sph!4v1668000000000!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;