import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  comment: string;
}

const Reviews = () => {
  const hairdresserReviews: Review[] = [
    {
      name: "Arleta",
      comment: "Polecam z całego serca! Odwiedziłam bardzo dużo salonów gdzie nie byłam zadowolona..."
    },
    {
      name: "Kamila",
      comment: "Pani Ewa i chyba nic więcej nie trzeba pisać. Przemiła kobieta, wystarczyło jedno zdanie..."
    },
    {
      name: "Emilia",
      comment: "Ten salon to ZŁOTO! Panie tryskające pozytywną energią..."
    },
    {
      name: "Joanna",
      comment: "Dziś miałam przyjemność być w salonie pierwszy raz i wiem, że nie ostatni..."
    },
    {
      name: "Martyna",
      comment: "Polecajka 100%! Przesympatyczne Panie fryzjerki, serdeczne i dbające o każdy szczegół..."
    },
    {
      name: "Olga",
      comment: "Przemiła wizyta... relaks... delikatność w podejściu do włosów! Świetnie dobrany kolor..."
    },
    {
      name: "Marika",
      comment: "Polecam bardzo, przemiłe Panie fryzjerki i bardzo wesoła atmosfera..."
    },
    {
      name: "Patrycja",
      comment: "Polecam bardzo serdecznie! Pani fryzjerska bardzo profesjonalna, expert od koloryzacji..."
    },
    {
      name: "Magdalena",
      comment: "Skorzystałam z usługi farbowania oraz regeneracji i jestem bardzo zadowolona..."
    },
    {
      name: "Anna",
      comment: "Pani fryzjerka wykonała pracę wzorowo. Moje dekoloryzacje wykonała profesjonalnie..."
    },
    {
      name: "Milena",
      comment: "Pani Ewa robi mistrzostwo z włosami. Dziękuję i na pewno nie raz do Was wrócę ♥️"
    }
  ];

  const beautyReviews: Review[] = [
    {
      name: "Aneta",
      comment: "Cudowny relaks na kobido, Pani Weronika jest Aniołem, a jej dłonie leczą..."
    },
    {
      name: "Paulina",
      comment: "Bardzo polecam! Profesjonalizm i bardzo miła atmosfera..."
    },
    {
      name: "Wiola",
      comment: "Polecam Panią Weronikę kobieta o ciepłym sercu oraz ogromnej wiedzy kosmetologicznej."
    },
    {
      name: "Emilia",
      comment: "Polecam salon z całego serca, masaż Kobido oraz kosmetyki starannie dopasowane..."
    },
    {
      name: "Magdalena",
      comment: "Magdalena Wyszłam z salonu bardzo zadowolona, masaż kobido wykonamy najlepiej..."
    },
    {
      name: "Karolina",
      comment: "Masaż Kobido wykonany rewelacyjnie, z dużą dbałością o komfort i że spora dawka edukacji..."
    },
    {
      name: "Joanna",
      comment: "Polecam !!! Masaż kobido przeprowadzony profesjonalnie, a Pani przesympatyczna..."
    },
    {
      name: "Anna",
      comment: "Kobido wspaniały zabieg, relaksujący, odmładzający. Zawsze z przyjemnością wracam..."
    },
    {
      name: "Agnieszka",
      comment: "Usługa: zabieg na twarz Rewelacja, efekty widoczne od razu, po zabiegu..."
    },
    {
      name: "Katarzyna",
      comment: "Polecam !!! Masaż kobido przeprowadzony profesjonalnie, a Pani przesympatyczna..."
    },
    {
      name: "Joanna",
      comment: "Polecam całym sercem. Coś dla ciała, ducha i zmysłów. Miejsce nastrojowe i klimatyczne..."
    }
  ];

  const allReviews = [...beautyReviews, ...hairdresserReviews];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">Opinie</h2>
          <p className="text-gray-600 mb-8">Zobacz, co mówią o nas nasze klientki</p>
        </div>

        <div className="py-8 px-4 max-w-7xl mx-auto">
          <Slider {...settings}>
            {allReviews.map((review, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-50 p-6 rounded-lg text-center shadow-md flex flex-col justify-center h-full">
                  <div className="mb-4 flex text-yellow-400 justify-center">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                  <p className="font-semibold text-navy-700">{review.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <div className="text-center py-8">
        <h2 className="text-2xl font-serif mb-4">Byłaś u nas? Podziel się swoją opinią!</h2>
        <p className="text-gray-600 mb-8">Twoja opinia pomoże innym w podjęciu decyzji</p>
        <div className="flex flex-col sm:flex-row sm:gap-1 gap-4 justify-center items-center">
          <a
            href="https://booksy.com/pl-pl/189282_let-s-glow-beauty-salon_salon-kosmetyczny_5694_gizycko#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy-600 text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-navy-700 transition-colors text-center w-full sm:w-auto sm:max-w-none max-w-[70%] sm:mx-0 mx-auto"
          >
            Dodaj opinię na Booksy
          </a>
          <a
            href="https://g.page/r/CdlLzLHj-CQbEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-navy-600 text-navy-600 px-6 py-2 rounded-md text-sm sm:text-base hover:bg-navy-50 transition-colors text-center w-full sm:w-auto sm:max-w-none max-w-[70%] sm:mx-0 mx-auto"
          >
            Dodaj opinię w Google
          </a>
        </div>
      </div>
{/* 
      <div className="mt-8 text-center pb-8">
        <h2 className="text-2xl font-serif mb-4">Przekonaj się sama!</h2>
        <p className="text-gray-600 mb-8">Umów się na wizytę i dołącz do grona zadowolonych klientek</p>
        <a
          href="https://booksy.com/pl-pl/189282_let-s-glow-beauty-salon_salon-kosmetyczny_5694_gizycko#ba_s=seo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-navy-600 text-white px-8 py-3 rounded-md hover:bg-navy-700 transition-colors"
        >
          Zarezerwuj wizytę
        </a>
      </div> */}
    </div>
  );
};

export default Reviews;