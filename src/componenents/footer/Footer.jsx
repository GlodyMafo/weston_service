import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
        <img src={`${process.env.PUBLIC_URL}/Images/west-logo.png`} alt="Weston Boss Services" className="logo-img" />
        <p>RCCM: CD/KNM/RCCM/25-A-05574</p>
          <p>ID NAT: 01-S9502-N63324H</p>
          <p>Tax ID: A2537691W</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">Who We Are</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
         
          <p>Email: info@westonboss.cd</p>
          <p>Phone: +243 820 000 000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EST WESTON BOSS SERVICE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
