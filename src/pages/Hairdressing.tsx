import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Clock, Star } from 'lucide-react';

const Hairdressing = () => {
  const treatments = [
    {
      name: 'Masaż twarzy',
      description: 'Relaksujący masaż twarzy, szyi i dekoltu. Poprawia krążenie i napięcie skóry.',
      price: 'od 120 zł',
      time: '45 min',
    },
    {
      name: 'Zabieg nawilżający',
      description: 'Intensywne nawilżenie z użyciem kwasu hialuronowego i witamin.',
      price: 'od 180 zł',
      time: '60 min',
    },
    {
      name: 'Peeling chemiczny',
      description: 'Złuszczanie martwego naskórka, redukcja przebarwień i blizn.',
      price: 'od 200 zł',
      time: '45 min',
    },
    {
      name: 'Mikrodermabrazja',
      description: 'Mechaniczne złuszczanie naskórka, wygładzenie i rozjaśnienie cery.',
      price: 'od 150 zł',
      time: '60 min',
    },
    {
      name: 'Kobido Starożytną Drogą do Piękna',
      description: 'Tradycyjna technika masażu twarzy poprawiająca jędrność i krążenie.',
      price: '220 zł',
      time: '60 min',
    },
    {
      name: 'Kobido Exclusive z Nanozłotem',
      description: 'Ekskluzywna wersja masażu Kobido z dodatkiem nanozłota dla jeszcze lepszych efektów.',
      price: '250 zł',
      time: '75 min',
    },
    {
      name: 'Kobido Royal',
      description: 'Luksusowy masaż Kobido zapewniający głęboki relaks i lifting.',
      price: '300 zł',
      time: '75 min',
    },
    {
      name: 'Kobido Deep Touch z Elementami Transbukalnymi',
      description: 'Zaawansowany masaż Kobido z technikami transbukalnymi dla maksymalnego efektu liftingu.',
      price: '280 zł',
      time: '75 min',
    },
    {
      name: 'Hydro Therapy',
      description: 'Zabieg intensywnego nawilżenia z efektem „glass skin”.',
      price: '180-250 zł',
      time: '40-60 min',
    },
    {
      name: 'Glow Therapy',
      description: 'Zabieg rozświetlający, poprawiający koloryt i blask skóry.',
      price: '180-250 zł',
      time: '40-60 min',
    },
    {
      name: 'Pure Skin Therapy',
      description: 'Oczyszczający zabieg regulujący wydzielanie sebum i zwężający pory.',
      price: '180-250 zł',
      time: '40-60 min',
    },
    {
      name: 'Peeling Kawitacyjny + Sonoforeza + Maska',
      description: 'Złuszczanie martwego naskórka z ultradźwiękami i odżywcza maska.',
      price: '170 zł',
      time: '40 min',
    },
    {
      name: 'Timeless Therapy',
      description: 'Zabieg anti-aging z peptydami i kwasem hialuronowym.',
      price: '180-250 zł',
      time: '40-60 min',
    },
    {
      name: 'BioRePeel Advanced Therapy',
      description: 'Zabieg z użyciem innowacyjnego peelingu medycznego BioRePeel.',
      price: '300 zł',
      time: '40 min',
    },
    {
      name: 'Access Bars',
      description: 'Sesja relaksacyjna usuwająca blokady emocjonalne i stres.',
      price: '220 zł',
      time: '60 min',
    },
    {
      name: 'Indywidualna Lekcja Jogi Twarzy',
      description: 'Osobista lekcja ćwiczeń liftingujących twarz.',
      price: '500 zł',
      time: '120 min',
    },
    {
      name: 'Relaksacyjny Masaż Głowy',
      description: 'Odpoczynek dla ciała i umysłu poprzez delikatny masaż skóry głowy.',
      price: '180 zł',
      time: '40 min',
    },
    {
      name: 'Terapia Enzymatyczna 1# / Zabieg Wstępny',
      description: 'Pierwszy etap terapii enzymatycznej DMK dla przygotowania skóry.',
      price: '350 zł',
      time: '60 min',
    },
    {
      name: 'Terapia Enzymatyczna #1 i #2',
      description: 'Rozszerzony zabieg enzymatyczny z dwoma etapami aplikacji.',
      price: '400 zł',
      time: '75 min',
    },
    {
      name: 'Potrójna Maska Enzymatyczna',
      description: 'Zaawansowana terapia z użyciem trzech masek enzymatycznych.',
      price: '450 zł',
      time: '90 min',
    },
    {
      name: 'Oczyszczenie Skóry z Głębokim Nawilżeniem',
      description: 'Zabieg oczyszczający połączony z intensywnym nawilżeniem.',
      price: '250 zł',
      time: '60 min',
    },
    {
      name: 'Cryo-Peeling Ekspresowy Lifting Skóry',
      description: 'Zimny peeling pobudzający mikrokrążenie i liftingujący.',
      price: '300 zł',
      time: '45 min',
    },
    {
      name: 'Atraumatyczne Oczyszczanie Skóry',
      description: 'Delikatne oczyszczanie skóry bez podrażnień.',
      price: '400 zł',
      time: '60 min',
    },
    {
      name: 'Usuwanie Martwych Komórek Skóry',
      description: 'Eksfoliacja martwego naskórka dla wygładzenia i odświeżenia cery.',
      price: '400 zł',
      time: '60 min',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/40"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Usługi Fryzjerskie
            </h1>
            <p className="text-lg max-w-xl">
              Profesjonalne strzyżenie i koloryzacja w przyjaznej atmosferze. 
              Nasi styliści pomogą Ci osiągnąć wymarzony efekt.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {treatments.map((treatment, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-serif mb-4 text-navy-700">{treatment.name}</h3>
              <ul className="space-y-4">
                <li className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-navy-600 p-2 rounded-full">
                      <Scissors className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{treatment.name}</h4>
                      <p className="text-gray-600 text-sm">{treatment.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          {treatment.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-navy-600" />
                          {treatment.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Gotowa na zmianę?
          </h2>
          <p className="text-gray-600 mb-8">
            Umów się na konsultację i pozwól nam zadbać o Twoje włosy
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

export default Hairdressing;