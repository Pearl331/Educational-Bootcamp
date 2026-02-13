import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ title, price, image }) => {
  const navigate = useNavigate();

  return (
    <Card className="course-card h-100 border-0">
      <div className="course-img-wrapper">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <Card.Body className="p-4 d-flex flex-column">
        <h5 className="fw-bold mb-3 text-dark">{title}</h5>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div>
            <p className="text-muted small mb-0">Starting from</p>
            <span className="fw-bold text-primary fs-5">{price}</span>
          </div>
          <button 
            onClick={() => navigate('/enroll', { state: { courseName: title } })}
            className="btn btn-primary rounded-pill px-4 shadow-sm fw-bold"
          >
            Enroll Now
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;