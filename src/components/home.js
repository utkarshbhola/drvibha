import React from 'react';
import './home.css';
import homeopathyImage from '../Assets/img.jpg'; // Adjust the path according to your project structure

const Home = () => {
  return (
    <div className="home-section">
      <img src={homeopathyImage} alt="Homeopathy" className="background-image" />
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Ashok Homeopathic clinic</h1>
        <p>Your one stop solution to all your health problems</p>
      </div>
    </div>
  );
};

export default Home;
