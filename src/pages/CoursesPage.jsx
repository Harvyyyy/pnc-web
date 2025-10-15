import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { coursesData } from '../data/coursesData';
import SectionHeader from '../components/SectionHeader';
import PNC5 from '../assets/pnc5.jpg';
import '../styles/CoursesPage.css';

const CoursesHero = () => (
  <div className="courses-hero-section" style={{ backgroundImage: `url(${PNC5})` }}>
    <div className="courses-hero-overlay"></div>
    <Container className="position-relative">
      <div className="courses-hero-content">
        <h1>Academic Programs</h1>
      </div>
    </Container>
  </div>
);

const CourseCard = ({ name, description }) => (
  <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch">
    <Card className="course-card w-100 shadow-sm card-hover">
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Body>
        <Card.Text>{description || "Detailed description of the course, its curriculum, and career opportunities."}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const CoursesPage = () => {
  const [selectedCollege, setSelectedCollege] = useState('All');

  const colleges = ['All', ...new Set(coursesData.map(course => course.college))];

  const filteredCourses = selectedCollege === 'All'
    ? coursesData
    : coursesData.filter(college => college.college === selectedCollege);

  return (
    <>
      <CoursesHero />
      <Container className="section-padding">
        <SectionHeader 
          title="Find Your Program"
          subtitle="Explore the wide range of programs designed to equip you for a successful future."
          align="center"
        />

        <div className="filter-buttons text-center mb-5">
          {colleges.map(college => (
            <Button
              key={college}
              variant={selectedCollege === college ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedCollege(college)}
            >
              {college}
            </Button>
          ))}
        </div>

        <div>
          {filteredCourses.map((college, index) => (
            <div key={index} className="mb-5">
              <h2 className="college-title mb-4">{college.college}</h2>
              <Row>
                {college.programs.map((program, progIndex) => (
                  <CourseCard key={progIndex} {...program} />
                ))}
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CoursesPage;