import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              O Nas
            </h1>
            <p className="text-lg max-w-xl">
              Poznaj nasz zespół i historię salonu Let's Glow Beauty Salon w Giżycku
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif mb-6">Nasza Historia</h2>
          <p className="text-gray-600 mb-8">
            Let's Glow Beauty Salon to miejsce stworzone z pasji do piękna i dbania o innych. 
            Od 2015 roku nieustannie rozwijamy się, aby zapewnić naszym klientkom 
            najwyższej jakości usługi fryzjerskie i kosmetyczne. Nasz salon 
            w sercu Giżycka to przestrzeń, gdzie każda klientka może poczuć się 
            wyjątkowo i zadbać o siebie w przyjemnej atmosferze.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-navy-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-2">Pasja</h3>
            <p className="text-gray-600">
              Kochamy to, co robimy i nieustannie doskonalimy nasze umiejętności
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-navy-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-2">Jakość</h3>
            <p className="text-gray-600">
              Używamy tylko najlepszych produktów i stosujemy sprawdzone metody
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-navy-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif mb-2">Ludzie</h3>
            <p className="text-gray-600">
              Tworzymy przyjazną atmosferę i dbamy o każdą klientkę
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-center mb-12">Nasz Zespół</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Anna - Stylistka"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Anna</h3>
              <p className="text-gray-600">Główna Stylistka</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Magda - Kosmetolog"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Magda</h3>
              <p className="text-gray-600">Kosmetolog</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Tomek - Stylista"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Tomek</h3>
              <p className="text-gray-600">Stylista</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Dołącz do naszej społeczności
          </h2>
          <p className="text-gray-600 mb-8">
            Umów się na wizytę i przekonaj się, dlaczego klientki nam ufają
          </p>
          <a 
            href="https://booksy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-navy-600 text-white px-8 py-3 rounded-md hover:bg-navy-700 transition-colors"
          >
            Zarezerwuj wizytę
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;