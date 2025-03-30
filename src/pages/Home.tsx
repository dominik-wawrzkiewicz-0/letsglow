import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Calendar, Phone } from 'lucide-react';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/40"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Odkryj swoje naturalne piękno w Let's Glow Beauty Salon
            </h1>
            <p className="text-lg mb-8">
              Profesjonalne usługi fryzjerskie i zabiegi na twarz w sercu Giżycka
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://booksy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-navy-600 px-8 py-3 rounded-md text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Umów wizytę online
              </a>
              <a 
                href="tel:+48123456789"
                className="border-2 border-white text-white px-8 py-3 rounded-md text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Zadzwoń do nas
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Nasze Usługi</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Usługi fryzjerskie" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-4">Usługi Fryzjerskie</h3>
                <p className="text-gray-600 mb-4">
                  Od strzyżenia po kompleksową metamorfozę. Nasi styliści pomogą Ci 
                  osiągnąć wymarzony wygląd.
                </p>
                <Link 
                  to="/hairdressing"
                  className="text-navy-600 hover:text-navy-700 font-medium"
                >
                  Zobacz więcej →
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Zabiegi na twarz" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-4">Zabiegi na Twarz</h3>
                <p className="text-gray-600 mb-4">
                  Profesjonalne zabiegi pielęgnacyjne, które odświeżą i odmłodzą 
                  Twoją skórę.
                </p>
                <Link 
                  to="/facial-treatments"
                  className="text-navy-600 hover:text-navy-700 font-medium"
                >
                  Zobacz więcej →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">
            Zarezerwuj swoją wizytę już dziś
          </h2>
          <p className="mb-8 text-lg">
            Pierwsze konsultacje są bezpłatne. Zadbaj o siebie!
          </p>
          <a 
            href="https://booksy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Umów się na wizytę
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;