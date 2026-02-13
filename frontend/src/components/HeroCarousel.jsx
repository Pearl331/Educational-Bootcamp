import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  return (
    <Carousel fade indicators={true} interval={4000}>
      <Carousel.Item style={{ height: '85vh' }}>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80"
          alt="Tech"
          style={{ objectFit: 'cover' }}
        />
        <Carousel.Caption className="text-start container">
          <h1 className="display-2 fw-bold text-white mb-4">Master Coding <br/><span className="text-primary">Skills.</span></h1>
          <p className="lead fs-4 mb-5 w-75 text-light">Learn industry-standard tech from experts.</p>
          <div className="d-flex gap-3">
            <Link to="/enroll" className="btn btn-primary btn-lg px-5 rounded-pill shadow">Enroll Now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '85vh' }}>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80"
          alt="Mentorship"
          style={{ objectFit: 'cover' }}
        />
        <Carousel.Caption className="text-start container">
          <h1 className="display-2 fw-bold text-white mb-4">Live Career <br/><span className="text-primary">Guidance.</span></h1>
          <p className="lead fs-4 mb-5 w-75 text-light">Get 1-on-1 mentorship to land your dream job.</p>
          <div className="d-flex gap-3">
            <Link to="/enroll" className="btn btn-primary btn-lg px-5 rounded-pill shadow">Start Today</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;