import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Utilisez le hook useLocation pour obtenir l'URL actuelle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/Images/logobik.jpg'} alt="BIK TRADING SARL" className="logo-img" />
          <p>BIK-Trading</p>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu'}></div>
          <div className={isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu'}></div>
          <div className={isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu'}></div>
        </div>

        <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-links ${location.pathname === '/services' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Product
            </Link>
          </li>

          <li className="nav-item">

            <Link 
              to="/galery" 
              className={`nav-links ${location.pathname === '/galery' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Galery
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Nav;
