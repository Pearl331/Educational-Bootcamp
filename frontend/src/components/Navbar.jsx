import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container fluid className="px-lg-5">
        {/* Only BOOTCAMP Logo with Modern Look */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-2 d-flex align-items-center">
          <span className="text-primary tracking-tighter">BOOT</span>
          <span className="text-dark">CAMP</span>
          <div className="ms-2 bg-primary" style={{width: '8px', height: '8px', borderRadius: '50%'}}></div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold align-items-center">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#courses" className="mx-2">Courses</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#mentors" className="mx-2">Mentors</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#testimonials" className="mx-2">Reviews</Nav.Link>
            
            <Link to="/enroll" className="btn btn-primary text-white ms-lg-4 px-4 shadow rounded-pill fw-bold">
              Enroll Now
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;