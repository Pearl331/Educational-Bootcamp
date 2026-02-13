import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Components
import NavigationBar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CourseCard from './components/CourseCard';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Enroll from './pages/Enroll';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const courses = [
    { title: "Full Stack Web Dev", price: "PKR 20,000", image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Data Science & AI", price: "PKR 25,000", image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "UI/UX Design", price: "PKR 15,000", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Cyber Security", price: "PKR 22,000", image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Mobile App Dev", price: "PKR 30,000", image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Digital Marketing", price: "PKR 12,000", image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Course Section */}
      <section id="courses" className="py-5 bg-light">
        <div className="container px-4">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-tag">Learning Tracks</span>
            <h2 className="section-title">Our Popular Programs</h2>
          </div>
          <div className="row g-4">
            {courses.map((c, i) => (
              <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 100}>
                <CourseCard title={c.title} price={c.price} image={c.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-5" data-aos="fade-up">
        <Mentors />
      </section>

      {/* Reviews Section */}
      <section id="testimonials" className="py-5 bg-light" data-aos="fade-up">
        <Testimonials />
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enroll" element={<Enroll />} />
          </Routes>
        </main>

        <footer className="footer-main">
          <div className="container px-4">
            <div className="row g-5">
              <div className="col-lg-4 col-md-12">
                <h2 className="fw-bold text-primary mb-4">BOOTCAMP<span className="text-white">.</span></h2>
                <p className="text-secondary small mb-4" style={{lineHeight: '1.8'}}>
                  Empowering the next generation of tech leaders in Pakistan. 
                  Join us to transform your passion into a professional career.
                </p>
                <div className="d-flex gap-3 fs-5">
                  <i className="bi bi-facebook text-secondary"></i>
                  <i className="bi bi-linkedin text-secondary"></i>
                  <i className="bi bi-instagram text-secondary"></i>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-4 col-6">
                <h6 className="footer-heading">PROGRAMS</h6>
                <ul className="list-unstyled">
                  <li><a href="#courses" className="footer-link small">Web Development</a></li>
                  <li><a href="#courses" className="footer-link small">UI/UX Design</a></li>
                  <li><a href="#courses" className="footer-link small">Data Science</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <h6 className="footer-heading">RESOURCES</h6>
                <ul className="list-unstyled">
                  <li><Link to="/" className="footer-link small">Success Stories</Link></li>
                  <li><Link to="/enroll" className="footer-link small">Admissions</Link></li>
                  <li><a href="#mentors" className="footer-link small">Our Mentors</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4">
                <h6 className="footer-heading">OFFICE</h6>
                <p className="text-secondary small mb-2"><i className="bi bi-geo-alt text-primary me-2"></i> I-8 Markaz, Islamabad</p>
                <p className="text-secondary small mb-2"><i className="bi bi-envelope text-primary me-2"></i> contact@bootcamp.pk</p>
                <p className="text-secondary small"><i className="bi bi-telephone text-primary me-2"></i> +92 51 1234567</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-5">
            <div className="container text-center">
              <p className="text-secondary small mb-0 opacity-50">© 2026 Bootcamp Academy. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;