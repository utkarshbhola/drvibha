import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';  // Ensure this matches the file name
import Treatments from './components/treatments';
import Consultation from './components/consultation';
import Blog from './components/blog';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
