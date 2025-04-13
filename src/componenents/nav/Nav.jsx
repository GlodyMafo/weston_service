import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Product' },
    { to: '/galery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={`${process.env.PUBLIC_URL}/Images/west-logo.png`} alt="Weston Boss Services" className="logo-img" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {['', '', ''].map((_, index) => (
            <div key={index} className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} />
          ))}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to} className="nav-item">
              <Link 
                to={to}
                className={`nav-links ${location.pathname === to ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
