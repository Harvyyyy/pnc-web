import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import PncLogo from '../assets/pnc-logo.png';
import '../styles/Navbar.css';

const AppNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = isScrolled ? 'navbar-scrolled' : 'navbar-transparent';

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${navbarClasses} ${isScrolled ? 'navbar-light' : 'navbar-dark'}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={PncLogo}
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="PNC Logo"
          />
          <span className="d-none d-sm-inline-block">Pamantasan ng Cabuyao</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/admission" className="ms-lg-3">
              <Button className="cta-button">Admission</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;