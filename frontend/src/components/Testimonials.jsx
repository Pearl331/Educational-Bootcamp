import React from 'react';

const Testimonials = () => {
  const reviews = [
    { name: "Ali Raza", text: "The curriculum is outstanding. I went from knowing nothing to landing a job as a Junior Developer in just 4 months!", stars: 5 },
    { name: "Fatima Noor", text: "Best decision of my career! The mentors are highly supportive and the projects are real-world industry standards.", stars: 5 },
    { name: "Hamza Sheikh", text: "Professional environment and top-notch training. Highly recommended for anyone looking to enter the tech field.", stars: 5 },
    { name: "Sana Javed", text: "The UI/UX course was eye-opening. The portfolio I built here helped me get my first international freelance client.", stars: 5 },
    { name: "Usman Ghani", text: "Cyber Security sessions were intense and practical. I feel much more confident in my technical skills now.", stars: 5 },
    { name: "Hina Pervez", text: "A truly transformative experience. The career guidance sessions helped me prepare for tough technical interviews.", stars: 5 }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="section-tag">Success Stories</span>
        <h2 className="section-title">What Our Alumni Say</h2>
      </div>
      <div className="row g-4">
        {reviews.map((r, i) => (
          <div key={i} className="col-md-4">
            <div className="p-4 h-100 shadow-sm border-0 bg-white" style={{ borderRadius: '25px', borderBottom: '5px solid #0062ff' }}>
              <div className="mb-3 text-warning">
                {[...Array(r.stars)].map((_, i) => <i key={i} className="bi bi-star-fill me-1"></i>)}
              </div>
              <p className="text-secondary mb-4" style={{ fontStyle: 'italic', lineHeight: '1.6' }}>"{r.text}"</p>
              <h6 className="fw-bold text-dark mb-0">— {r.name}</h6>
              <small className="text-muted">Verified Student</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;