import React, { useState } from 'react';

// Inline SVG for quote icon (no external modules)
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.17 8.33A3.33 3.33 0 0 1 10.5 5H12v2.5h-1.5a.83.83 0 0 0-.83.83v.84a.83.83 0 0 0 .83.83H12v4.17a3.33 3.33 0 0 1-3.33 3.33H6.83A.83.83 0 0 1 6 17.17v-3.34a.83.83 0 0 1 .83-.83H8V11.5H6.83A.83.83 0 0 1 6 10.67v-2.34c0-.46.37-.83.83-.83h.34Zm10 0A3.33 3.33 0 0 1 20.5 5H22v2.5h-1.5a.83.83 0 0 0-.83.83v.84c0 .46.37.83.83.83H22v4.17a3.33 3.33 0 0 1-3.33 3.33h-1.84a.83.83 0 0 1-.83-.83v-3.34c0-.46.37-.83.83-.83H18V11.5h-1.17a.83.83 0 0 1-.83-.83v-2.34c0-.46.37-.83.83-.83h.34Z" />
    </svg>
  );
}

interface Review {
  name: string;
  comment: string;
}

const Reviews = () => {
  // Example data
  const beautyReviews: Review[] = [
    { name: 'Aneta', comment: 'Cudowny relaks na kobido...' },
    { name: 'Paulina', comment: 'Bardzo polecam!...' },
    { name: 'Wiola', comment: 'Polecam Panią Weronikę...' },
    { name: 'Emilia', comment: 'Polecam salon z całego serca...' },
    { name: 'Magdalena', comment: 'Wyszłam z salonu bardzo zadowolona...' },
    { name: 'Karolina', comment: 'Masaż Kobido wykonany rewelacyjnie...' },
    { name: 'Joanna', comment: 'Polecam !!! Masaż kobido...' },
    { name: 'Anna', comment: 'Kobido wspaniały zabieg...' },
    { name: 'Agnieszka', comment: 'Zabieg na twarz - rewelacja...' },
    { name: 'Katarzyna', comment: 'Polecam !!! Masaż kobido...' },
    { name: 'Joanna', comment: 'Polecam całym sercem...' },
  ];

  const hairdresserReviews: Review[] = [
    { name: 'Arleta', comment: 'Polecam z całego serca!...' },
    { name: 'Kamila', comment: 'Pani Ewa – przemiła kobieta...' },
    { name: 'Emilia', comment: 'Ten salon to ZŁOTO!...' },
    { name: 'Joanna', comment: 'Pierwszy raz i wiem, że nie ostatni...' },
    { name: 'Martyna', comment: 'Polecajka 100%! Fryzjerki...' },
    { name: 'Olga', comment: 'Relaks, delikatność, świetnie...' },
    { name: 'Marika', comment: 'Bardzo polecam. Miła atmosfera...' },
    { name: 'Patrycja', comment: 'Pani fryzjerska ekspert...' },
    { name: 'Magdalena', comment: 'Farbowanie i regeneracja...' },
    { name: 'Anna', comment: 'Dekoloryzacja wykonana...' },
    { name: 'Milena', comment: 'Pani Ewa robi mistrzostwo...' },
  ];

  const allReviews = [...beautyReviews, ...hairdresserReviews];

  // Number of reviews to show at once
  const slidesToShow = 20;

  // React state to track the current slide (start at 0)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    if (currentSlide < allReviews.length - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Move to the previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(allReviews.length - slidesToShow);
    }
  };

  // Generate an array for dot navigation
  const totalSlides = allReviews.length - slidesToShow + 1;
  const dots = Array.from({ length: totalSlides }, (_, i) => i);

  return (
    <div className="bg-white">
      {/* Title Section */}
      <div className="relative h-[40vh] min-h-[400px]" style={{ background: '#ddd' }}>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-black text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Opinie</h1>
            <p className="text-lg max-w-xl">Zobacz, co mówią o nas nasze klientki</p>
          </div>
        </div>
      </div>

      {/* Reviews Slider without external modules */}
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 rounded">Poprzedni</button>
          <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 rounded">Następny</button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
          >
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[calc(100%/3)] p-4 flex flex-col items-center"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md h-full flex flex-col justify-center">
                  <div className="mb-4 text-navy-300">
                    <QuoteIcon className="mx-auto h-8 w-8" />
                  </div>
                  <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                  <p className="font-semibold text-navy-700">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dot Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {dots.map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentSlide(dotIndex)}
              className={
                dotIndex === currentSlide
                  ? 'w-3 h-3 bg-gray-800 rounded-full'
                  : 'w-3 h-3 bg-gray-300 rounded-full'
              }
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-serif mb-4">Byłaś u nas? Podziel się swoją opinią!</h2>
        <p className="text-gray-600 mb-8">Twoja opinia pomoże innym w podjęciu decyzji</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy-600 text-white px-8 py-3 rounded-md hover:bg-navy-700 transition-colors"
          >
            Dodaj opinię na Booksy
          </a>
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-navy-600 text-navy-600 px-8 py-3 rounded-md hover:bg-navy-50 transition-colors"
          >
            Dodaj opinię w Google
          </a>
        </div>
      </div>

      {/* Book Appointment */}
      <div className="mt-8 text-center pb-8">
        <h2 className="text-2xl font-serif mb-4">Przekonaj się sama!</h2>
        <p className="text-gray-600 mb-8">Umów się na wizytę i dołącz do grona zadowolonych klientek</p>
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
  );
};

export default Reviews;