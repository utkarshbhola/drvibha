import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-orange-yellow shadow-md py-4 fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white font-bold text-2xl">dr. Vibha</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link hover:text-gray-200">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link hover:text-gray-200">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/treatments" className="nav-link hover:text-gray-200">Treatments</Link>
            </li>
            <li className="nav-item">
              <Link to="/consultation" className="nav-link hover:text-gray-200">Consultation</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link hover:text-gray-200">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link hover:text-gray-200">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



