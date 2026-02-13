import React from 'react';

const Mentors = () => {
  const mentors = [
    { name: "Sarah Ahmed", role: "Senior Web Developer", company: "Google", img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Zain Malik", role: "Data Scientist", company: "Amazon", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Ayesha Khan", role: "UI/UX Designer", company: "Adobe", img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Omar Farooq", role: "Cyber Security Expert", company: "Microsoft", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Emaan Fatima", role: "Mobile App Lead", company: "Meta", img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Bilal Hassan", role: "DevOps Engineer", company: "Netflix", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="section-tag">Expert Guidance</span>
        <h2 className="section-title">Meet Our Industry Experts</h2>
      </div>
      <div className="row g-4">
        {mentors.map((m, i) => (
          <div key={i} className="col-lg-4 col-md-6 text-center">
            <div className="mentor-card p-4 shadow-sm bg-white h-100" style={{ borderRadius: '30px' }}>
              <img src={m.img} alt={m.name} className="rounded-circle mb-3" style={{ width: '130px', height: '130px', objectFit: 'cover', border: '5px solid #0062ff' }} />
              <h5 className="fw-bold mb-1">{m.name}</h5>
              <p className="text-primary small fw-bold mb-1">{m.role}</p>
              <p className="text-muted small">Previously at {m.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;