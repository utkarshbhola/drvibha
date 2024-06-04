import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/treatments" className="nav-link">Treatments</Link>
      <Link to="/consultation" className="nav-link">Consultation</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
    </nav>
  );
};

export default NavBar;
