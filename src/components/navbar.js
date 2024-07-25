import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// Import your logo image
import logoImage from '../Assets/icon2.ico'; // Replace with your logo path

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo container */}
      <div className="logo-container">
        <img src={logoImage} alt="Your Company Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="./components/About" className="nav-link">About Us</Link>
        <Link to="./components/Testimonials" className="nav-link">Testimonials</Link>
        <Link to="./components/treatments" className="nav-link">Treatments</Link>
      </div>
    </nav>
  );
};

export default NavBar;
