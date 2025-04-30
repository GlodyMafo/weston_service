import React from 'react';
import './About.css';
import {
  FaTools, FaHardHat, FaMicrochip, FaFlask, FaCogs,
  FaBoxes, FaTachometerAlt, FaLaptopCode, FaBoxOpen, FaBroom
} from 'react-icons/fa';
import Services from '../UX/Services';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaMicrochip />, label: 'Electrical Instrumentation' },
  { icon: <FaCogs />, label: 'Motors & Gearboxes' },
  { icon: <FaTools />, label: 'Seals & Spare Parts' },
  { icon: <FaTachometerAlt />, label: 'Valves, Pressure & Temp Sensors' },
  { icon: <FaFlask />, label: 'Laboratory Reagents' },
  { icon: <FaLaptopCode />, label: 'IT Equipment' },
  { icon: <FaHardHat />, label: 'Protective Equipment (PPE)' },
  { icon: <FaBoxes />, label: 'Conveyor Accessories' },
  { icon: <FaBoxOpen />, label: 'Industrial Food Supplies' },
  { icon: <FaBroom />, label: 'Cleaning & Maintenance' },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section-about">
        <div className='hero-vide'></div>
        <div className="hero-content about-hero">
          <h2>About</h2>
          <h1>WESTON BOSS <br />SERVICE</h1>

          <p className="subtitle">
            Established in 2025, we deliver advanced industrial solutions tailored to the mining and heavy industry sectors throughout the Democratic Republic of Congo.
          </p>
          <Link to="/Contact">
            <button className='hero-btn'>Let's Start</button>
          </Link>
        </div>
      </section>

      <section className="history-section">
        <h2>Our Mission</h2>
        <p>
          WESTON BOSS SERVICE was born from a vision: to deliver top-tier industrial products and services to the mining and heavy industry. <br />
          As a civil establishment, we aim to empower our clients with innovative solutions, trusted expertise, and consistent service excellence.
        </p>
        <img src="/Images/industry-and-construction-photography-62.jpg" alt="Company History" className="history-image" />
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We earn trust through transparency and ethical conduct.</li>
          <li><strong>Quality:</strong> Excellence is at the heart of every product and service we deliver.</li>
          <li><strong>Innovation:</strong> We integrate technology to stay ahead of industry demands.</li>
          <li><strong>Client Focus:</strong> We listen, adapt, and act in the best interests of our partners.</li>
          <li><strong>Excellence:</strong> We push boundaries to exceed expectations every step of the way.</li>
        </ul>
      </section>

      <section className="extra-section">
        <div className="extra-content">
          <h2>Why Choose Us</h2>
          <p>
            We’re more than a supplier — we’re a partner you can count on. <br />
            Our commitment to quality, dependability, and speed means you gain more than just products — you gain peace of mind and a strategic ally for your industrial success.
          </p>
        </div>
        <img src="/Images/pump (2).jpg" alt="Empowering industry" className="extra-image" />
      </section>
    </div>
  );
};

export default About;
