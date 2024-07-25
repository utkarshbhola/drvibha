import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Treatments from './components/treatments';
import Footer from './components/footer';
import Blog from './components/blog';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Home />
        <About />
        <Testimonials/>
        <Treatments/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;