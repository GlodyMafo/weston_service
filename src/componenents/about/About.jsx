import React from 'react';
import './About.css';
import { FaTools, FaHardHat, FaMicrochip, FaFlask, FaCogs, FaBoxes, FaTachometerAlt, FaLaptopCode, FaBoxOpen, FaBroom } from 'react-icons/fa';
import Services from '../UX/Services';
import { Link, useNavigate } from 'react-router-dom';

const services = [
  { icon: <FaMicrochip />, label: 'Electrical Instrumentation' },
  { icon: <FaCogs />, label: 'Mechanical Motors & Gearboxes' },
  { icon: <FaTools />, label: 'Mechanical Seals & Spare Parts' },
  { icon: <FaTachometerAlt />, label: 'Valves, Pressure & Temp. Transmitters' },
  { icon: <FaFlask />, label: 'Laboratory Reagents' },
  { icon: <FaLaptopCode />, label: 'IT Products & Equipment' },
  { icon: <FaHardHat />, label: 'Personal Protective Equipment (PPE)' },
  { icon: <FaBoxes />, label: 'Conveyor Belt Accessories' },
  { icon: <FaBoxOpen />, label: 'Industrial-Grade Food Supplies' },
  { icon: <FaBroom />, label: 'Cleaning & Maintenance Services' },
];

const About = () => {
  return (
    <div className="about-container">
      <header className="hero-section">
        <div className='hero-vide'></div>
        <div className="hero-content about-hero">
          <h2>About</h2>
          <h1>WESTON BOSS <br />SERVICE</h1>
  
          <p className="subtitle" >
            Founded in 2025, we provide cutting-edge industrial solutions tailored for the mining and heavy industry sectors across the Democratic Republic of Congo.
          </p>
          <button className='hero-btn' >Let's start</button>
        </div>

        </header>

      <section className="history-section">
        <h2>Our Mission</h2>
        <p>
         WESTON BOSS SERVICE began with a vision to provide high-quality industrial products and services to the mining and heavy industry sectors. 
          As a civil establishment, our mission is to empower industries with innovative tools, technical reliability, and unmatched service delivery.
        </p>
        <img src="/Images/industry-and-construction-photography-62.jpg" alt="Company History" className="history-image" />
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We build trust by always doing the right thing.</li>
          <li><strong>Quality:</strong> We are committed to delivering high-quality products and services.</li>
          <li><strong>Innovation:</strong> We embrace technology to provide cutting-edge solutions.</li>
          <li><strong>Customer-Centric:</strong> We prioritize our clients' needs in every project.</li>
          <li><strong>Excellence:</strong> We continually strive for excellence in all we do.</li>
        </ul>
      </section>

      <section className="extra-section">
    
        <div className="extra-content">
        <h2>Why Choose Us</h2>
          <p>
            We believe in more than just delivering products  we deliver peace of mind. <br />With a sharp focus on quality, reliability, and speed, we serve as strategic partners to our clients, helping them navigate challenges with confidence and clarity.
          </p>
        </div>
        <img src="/Images/pump (2).jpg" alt="Empowering industry" className="extra-image" />
        
      </section>
    </div>
  );
};

export default About;
