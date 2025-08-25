import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReviewsPage: React.FC = () => {
  const { t, language } = useLanguage();

  const reviews = [
    {
      id: '1',
      author: 'Tomas Kazlauskas',
      rating: 5,
      textLt: 'Puikus aptarnavimas! Automobilis po detalizavimo atrodo kaip naujas. Labai rekomenduoju RideFresh paslaugas.',
      textEn: 'Excellent service! The car looks like new after detailing. Highly recommend RideFresh services.',
      date: '2024-01-15'
    },
    {
      id: '2',
      author: 'Justina Petraitienė',
      rating: 5,
      textLt: 'Profesionalūs specialistai, kokybiški produktai. Mano BMW dabar spindi kaip nauja. Ačiū!',
      textEn: 'Professional specialists, quality products. My BMW now shines like new. Thank you!',
      date: '2024-01-10'
    },
    {
      id: '3',
      author: 'Mindaugas Jonaitis',
      rating: 5,
      textLt: 'Keramikos danga pranoko lūkesčius. Automobilis ne tik gražiai atrodo, bet ir lengvai valomas.',
      textEn: 'Ceramic coating exceeded expectations. The car not only looks great but is also easy to clean.',
      date: '2024-01-05'
    },
    {
      id: '4',
      author: 'Rūta Stonienė',
      rating: 5,
      textLt: 'Salono valymas buvo tikras stebuklas. Seni dėmės išnyko, kvapas - šviežias. Puiku!',
      textEn: 'Interior cleaning was a real miracle. Old stains disappeared, smell is fresh. Excellent!',
      date: '2023-12-28'
    },
    {
      id: '5',
      author: 'Andrius Vaitkus',
      rating: 5,
      textLt: 'Pilnas detalizavimas užtruko kiek ilgiau nei tikėjausi, bet rezultatas - fantastiškas!',
      textEn: 'Full detailing took a bit longer than expected, but the result is fantastic!',
      date: '2023-12-20'
    },
    {
      id: '6',
      author: 'Gintarė Lukošiūtė',
      rating: 5,
      textLt: 'Malonus personalas, skaidrios kainos, puikus rezultatas. Tikrai grįšiu vėl!',
      textEn: 'Pleasant staff, transparent prices, excellent result. Will definitely come back!',
      date: '2023-12-15'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            {t('reviewsTitle')}
          </h2>
          
          {/* Google Reviews Summary */}
          <Card className="bg-gray-800/50 border-purple-500/20 max-w-md mx-auto mb-8">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-xl font-semibold text-white">Google</span>
              </div>
              <div className="flex justify-center items-center gap-1 mb-2">
                {renderStars(5)}
              </div>
              <p className="text-2xl font-bold text-purple-400">{averageRating.toFixed(1)}</p>
              <p className="text-gray-400 text-sm">{reviews.length} {language === 'lt' ? 'atsiliepimai' : 'reviews'}</p>
              <Button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                onClick={() => window.open('https://g.page/r/rideFresh/review', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'lt' ? 'Palikti atsiliepimą' : 'Leave Review'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{review.author}</h4>
                    <p className="text-gray-400 text-sm">{review.date}</p>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'lt' ? review.textLt : review.textEn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;