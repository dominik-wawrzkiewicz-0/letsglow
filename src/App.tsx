import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hairdressing from './pages/Hairdressing';
import FacialTreatments from './pages/FacialTreatments';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hairdressing" element={<Hairdressing />} />
            <Route path="/facial-treatments" element={<FacialTreatments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;