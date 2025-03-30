import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/LET’S GLOW Beauty Salon.png" 
                alt="Let's Glow Beauty Salon Logo" 
                className="h-64 object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/hairdressing" className="text-gray-600 hover:text-navy-600">Fryzjerstwo</Link>
            <Link to="/facial-treatments" className="text-gray-600 hover:text-navy-600">Zabiegi na twarz</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-navy-600">Galeria</Link>
            <Link to="/about" className="text-gray-600 hover:text-navy-600">O nas</Link>
            <Link to="/contact" className="text-gray-600 hover:text-navy-600">Kontakt</Link>
            <a 
              href="https://booksy.com/pl-pl/189282_let-s-glow-beauty-salon_salon-kosmetyczny_5694_gizycko#ba_s=seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-600 text-white px-4 py-2 rounded-md hover:bg-navy-700 transition-colors"
            >
              Umów wizytę
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-navy-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/hairdressing" 
              className="block px-3 py-2 text-gray-600 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Fryzjerstwo
            </Link>
            <Link 
              to="/facial-treatments" 
              className="block px-3 py-2 text-gray-600 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Zabiegi na twarz
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-gray-600 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-600 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              O nas
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-600 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <a 
              href="https://booksy.com/pl-pl/189282_let-s-glow-beauty-salon_salon-kosmetyczny_5694_gizycko#ba_s=seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 bg-navy-600 text-white text-center rounded-md hover:bg-navy-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Umów wizytę
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;