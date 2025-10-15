import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import PNC4 from '../assets/pnc4.jpg';
import PNC2 from '../assets/pnc2.jpg';
import COM1 from '../assets/com1.jpg';
import COM2 from '../assets/com2.jpg';
import COM3 from '../assets/com3.jpg';
import COM4 from '../assets/com4.jpg'; 
import COM5 from '../assets/com5.jpg';
import COM6 from '../assets/com6.jpg';
import COM7 from '../assets/com7.jpg';
import '../styles/AboutPage.css';

const AboutHero = () => (
  <div className="about-hero-section" style={{ backgroundImage: `url(${PNC2})` }}>
    <div className="about-hero-overlay"></div>
    <Container className="position-relative">
      <div className="about-hero-content">
        <h1>Our Legacy and Leadership</h1>
      </div>
    </Container>
  </div>
);

const HistorySection = () => (
  <Container className="section-padding">
    <Row className="align-items-center g-5">
      <Col lg={6}>
        <Image 
          src={PNC4}
          alt="PNC Historical Building" 
          fluid 
          className="history-image" 
        />
      </Col>
      <Col lg={6}>
        <SectionHeader title="Our History" align="start" />
        <p className="lead">
          Pamantasan ng Cabuyao (PNC), also known as the University of Cabuyao, was established through Municipal Ordinance 2003-059 on April 16, 2003.
        </p>
        <p>
          Founded under the visionary leadership of Mayor Proceso “Etok” D. Aguillo, it was inaugurated on July 31, 2003. Since its inception, PNC has been strengthened by succeeding administrations that have continuously improved its educational systems, policies, and facilities, cementing its role as a cornerstone of higher education in the region.
        </p>
      </Col>
    </Row>
  </Container>
);

const OfficerCard = ({ name, position, imageUrl }) => (
  <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch">
    <Card className="officer-card w-100 text-center shadow-sm card-hover">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{position}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const TeamSection = () => {
  const officers = [
    { name: 'Dr. Roberto F. Rañola', position: 'University President', imageUrl: COM1 },
    { name: 'Dr. Renelina D. Mañabo', position: 'VP for Academic Affairs', imageUrl: COM2 },
    { name: 'Dr. George Lambot', position: 'Executive Vice President', imageUrl: COM7 },
    { name: 'Dr. Zandra N. Maningas', position: 'VP for Planning, Research and Extension', imageUrl: COM6 },
    { name: 'Dr. Florante A. Magnaye', position: 'VP for Student Development and Auxiliary Services ', imageUrl: COM5 },
    { name: 'Dr. Corazon B. Bebong', position: 'VP for Administration and Finance', imageUrl: COM3 },
    { name: 'Ms. Gina S. Navarez', position: 'University Secretary', imageUrl: COM4 },
  ];

  return (
    <Container fluid className="bg-light section-padding">
      <Container>
        <SectionHeader 
          title="PNC Management Comittees" 
          subtitle="Guiding the university towards a future of excellence and innovation."
          align="center"
        />
        <Row className="justify-content-center">
          {officers.map((officer, index) => (
            <OfficerCard key={index} {...officer} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <HistorySection />
      <TeamSection />
    </>
  );
};

export default AboutPage;