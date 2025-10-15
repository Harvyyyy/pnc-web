import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Book, PeopleFill, Building, ChevronDown } from 'react-bootstrap-icons';
import SectionHeader from '../components/SectionHeader';
import PNC1 from '../assets/pnc1.jpg';
import PNC2 from '../assets/pnc2.jpg';
import PNC3 from '../assets/pnc3.jpg';
import '../styles/HomePage.css';

const HeroSection = () => (
  <div className="hero-section" style={{ backgroundImage: `url(${PNC3})` }}>
    <div className="hero-overlay"></div>
    <Container className="hero-content">
      <h1>Shape Your Future at PNC</h1>
      <p>Join a community dedicated to excellence, leadership, and national development.</p>
      <div>
        <Button as={Link} to="/courses" size="lg" className="hero-button-primary me-2 mb-2 mb-md-0">
          Explore Courses
        </Button>
        <Button as={Link} to="/admission" size="lg" className="hero-button-secondary">
          Apply Now
        </Button>
      </div>
    </Container>
    <div className="scroll-down-indicator"><ChevronDown /></div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    { icon: <Book className="feature-icon" />, title: 'Quality Education', text: 'Offering industry-aligned academic programs to foster globally-competitive professionals.' },
    { icon: <PeopleFill className="feature-icon" />, title: 'Experienced Faculty', text: 'Learn from a dedicated team of educators and practitioners with real-world experience.' },
    { icon: <Building className="feature-icon" />, title: 'Vibrant Campus Life', text: 'Engage in a nurturing community with diverse student organizations and events.' },
  ];
  return (
    <Container className="section-padding">
      <SectionHeader title="Why Choose Pamantasan ng Cabuyao?" align="center" />
      <Row>
        {features.map((feature, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 border-0 shadow card-hover">
              <Card.Body className="p-4 text-center">
                {feature.icon}
                <Card.Title as="h4">{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const FeaturedGallerySection = () => (
  <Container fluid className="bg-light section-padding">
    <Container>
      <SectionHeader title="Glimpse of Our Campus" align="center" />
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={PNC1} alt="PNC Main Building" />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h3>PNC Main Building</h3>
            <p>Main building of PNC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={PNC2} alt="Student Events" />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h3>PNC Main Building</h3>
            <p>Main building of PNC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={PNC3} alt="Library and Study Areas" />
          <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
            <h3>PNC Main Building</h3>
            <p>Main building of PNC</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  </Container>
);

const VisionMissionSection = () => {
  const coreValues = [
    { initial: 'P', text: 'Personal Dignity' },
    { initial: 'N', text: 'Nurturing Community' },
    { initial: 'C', text: 'Commitment to Excellence' },
  ];
  return (
    <Container className="section-padding">
      <Row className="g-5 align-items-center mb-5 pb-4">
        <Col lg={6}>
          <h3>Our Vision</h3>
          <p className="lead">A premier institution of higher learning in Region IV, developing globally-competitive and value-laden professionals and leaders instrumental to community development and nation building.</p>
        </Col>
        <Col lg={6}>
          <h3>Our Mission</h3>
          <p className="lead">As an institution of higher learning, PnC (UC) is committed to equip individuals with knowledge, skills, and values that will enable them to achieve their professional goals and provide leadership and service for national development.</p>
        </Col>
      </Row>
      
      <SectionHeader title="Our Core Values" align="center" />
      <Row className="justify-content-center g-4">
        {coreValues.map((value, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100 card-hover shadow-sm border-0">
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center text-center">
                <div className="core-value-initial mb-3">{value.initial}</div>
                <Card.Title as="h5" className="fw-bold">{value.text}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const CtaSection = () => (
  <div className="cta-section section-padding text-center">
    <Container>
      <SectionHeader title="Ready to Start Your Journey?" align="center" />
      <p className="lead my-3">
        Discover more about our admission process and become part of the PNC community.
      </p>
      <Button as={Link} to="/contact" size="lg" className="hero-button-primary">
        Contact Us Today
      </Button>
    </Container>
  </div>
);

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedGallerySection />
      <VisionMissionSection />
      <CtaSection />
    </>
  );
};

export default HomePage;