import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-navy-600 mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <a href="tel:+48123456789" className="hover:text-navy-600">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:kontakt@letsglowbeautysalon.pl" className="hover:text-navy-600">
                  kontakt@letsglowbeautysalon.pl
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="h-4 w-4 mt-1" />
                <address className="not-italic">
                  ul. Warszawska 123<br />
                  11-500 Giżycko
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-navy-600 mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hairdressing" className="text-gray-600 hover:text-navy-600">
                  Fryzjerstwo
                </Link>
              </li>
              <li>
                <Link to="/facial-treatments" className="text-gray-600 hover:text-navy-600">
                  Zabiegi na twarz
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-navy-600">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-navy-600">
                  O nas
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-serif text-navy-600 mb-4">Godziny otwarcia</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Pon - Pt:</span> 9:00 - 19:00
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Sobota:</span> 9:00 - 16:00
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Niedziela:</span> Zamknięte
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-serif text-navy-600 mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-navy-600"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-navy-600"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Let's Glow Beauty Salon. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;