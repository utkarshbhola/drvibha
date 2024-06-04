import React from 'react';
import './App.css';
import NavBar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './aboutus';
import Treatments from './treatments';
import Consultation from './consultation';
import Blog from './blog';


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
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
