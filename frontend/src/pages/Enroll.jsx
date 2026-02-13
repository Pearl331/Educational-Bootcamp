import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Enroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const courseData = {
    "Full Stack Web Dev": "PKR 20,000",
    "Data Science & AI": "PKR 25,000",
    "UI/UX Design": "PKR 15,000",
    "Cyber Security": "PKR 22,000",
    "Mobile App Dev": "PKR 30,000",
    "Digital Marketing": "PKR 12,000"
  };

  const initialCourse = location.state?.courseName || "";
  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const [price, setPrice] = useState(courseData[initialCourse] || "0");
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setPrice(courseData[course] || "0");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { course: selectedCourse, ...formData };

    try {
      const response = await axios.post('http://localhost:5000/api/enroll', payload);
      alert(response.data.message);
      navigate('/');
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error: Server connect nahi ho raha. Pehle backend start karein!");
    }
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow-lg p-5 rounded-4 bg-white border-0">
          <h2 className="text-center fw-bold mb-4 text-primary">ADMISSION FORM</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="fw-bold">Select Track</label>
              <select className="form-select" value={selectedCourse} onChange={handleCourseChange} required>
                <option value="">Choose your course...</option>
                {Object.keys(courseData).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            
            <div className="alert alert-primary py-2 text-center fw-bold">Total Fee: {price}</div>

            <div className="mb-3">
              <label className="fw-bold">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="mb-3">
              <label className="fw-bold">Email Address</label>
              <input type="email" className="form-control" placeholder="Email@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </div>
            <div className="mb-3">
              <label className="fw-bold">Phone Number</label>
              <input type="tel" className="form-control" placeholder="03xx-xxxxxxx" onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-3 fw-bold mt-3 shadow">SUBMIT REGISTRATION</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enroll;