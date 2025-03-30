import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1554189097-ffe88e998a2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Kontakt
            </h1>
            <p className="text-lg max-w-xl">
              Skontaktuj się z nami i umów wizytę w dogodnym terminie
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif mb-8">Informacje kontaktowe</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-navy-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <a href="tel:+48662080875" className="text-gray-600 hover:text-navy-600">
                    +48 662 080 875
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-navy-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:info.letsglowbeautysalon@gmail.com" className="text-gray-600 hover:text-navy-600">
                    info.letsglowbeautysalon@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-navy-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Adres</h3>
                  <address className="text-gray-600 not-italic">
                    ul. Mickiewicza 47,<br />
                    11-500 Giżycko
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-navy-600 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Godziny otwarcia</h3>
                  <div className="text-gray-600">
                    <p>Poniedziałek – Piątek: 9:00 - 18:00</p>
                    <p>Sobota: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Znajdź nas online</h3>
                <ul className="text-navy-600 space-y-1">
                  <li>
                    <a 
                      href="https://www.instagram.com/letsglow_beautysalon/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.facebook.com/p/Lets-Glow-Beauty-Salon-100090762961737/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://booksy.com/pl-pl/189282_let-s-glow-beauty-salon_salon-kosmetyczny_5694_gizycko#ba_s=seo" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      Booksy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://maps.app.goo.gl/RZnnoRQGx4wJs9YT9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      Google Maps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] bg-gray-100 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5387.804335896696!2d21.77073027826152!3d54.03730447249766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e187036a6d6349%3A0x1b24f8e3b1cc4bd9!2sLet&#39;s%20Glow%20Beauty%20Salon%20Fryzjer%20Kosmetyczka%20Kosmetolog%20Kobido!5e1!3m2!1sen!2spl!4v1743353750263!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Gotowa umówić wizytę?
          </h2>
          <p className="text-gray-600 mb-8">
            Zarezerwuj termin online lub zadzwoń do nas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://booksy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-navy-600 text-white px-8 py-3 rounded-md hover:bg-navy-700 transition-colors"
            >
              Zarezerwuj online
            </a>
            <a 
              href="tel:+48662080875"
              className="inline-block border-2 border-navy-600 text-navy-600 px-8 py-3 rounded-md hover:bg-navy-50 transition-colors"
            >
              Zadzwoń do nas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;