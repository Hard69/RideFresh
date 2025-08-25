import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Car, Truck, Users } from 'lucide-react';

interface PricingPageProps {
  setActiveTab: (tab: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ setActiveTab }) => {
  const { t } = useLanguage();
  const [selectedCarType, setSelectedCarType] = useState<string>('');

  const carTypes = [
    {
      id: 'small',
      name: t('carTypeSmall'),
      icon: <Car className="w-8 h-8" />,
      description: 'Hatchback, Sedan (iki 4.5m)',
      descriptionEn: 'Hatchback, Sedan (up to 4.5m)'
    },
    {
      id: 'medium',
      name: t('carTypeMedium'),
      icon: <Car className="w-8 h-8" />,
      description: 'Kombi, Sedan (4.5-5m)',
      descriptionEn: 'Estate, Sedan (4.5-5m)'
    },
    {
      id: 'large',
      name: t('carTypeLarge'),
      icon: <Users className="w-8 h-8" />,
      description: 'Didelis sedanas, kombi (>5m)',
      descriptionEn: 'Large sedan, estate (>5m)'
    },
    {
      id: 'suv',
      name: t('carTypeSUV'),
      icon: <Truck className="w-8 h-8" />,
      description: 'Visureigis, minivenas',
      descriptionEn: 'SUV, minivan'
    }
  ];

  const services = {
    exteriorWash: { name: t('exteriorWash'), prices: { small: 25, medium: 30, large: 35, suv: 40 } },
    interiorCleaning: { name: t('interiorCleaning'), prices: { small: 35, medium: 40, large: 45, suv: 50 } },
    fullDetail: { name: t('fullDetail'), prices: { small: 85, medium: 95, large: 110, suv: 125 } },
    ceramicCoating: { name: t('ceramicCoating'), prices: { small: 350, medium: 400, large: 450, suv: 500 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          {t('pricingTitle')}
        </h2>

        {/* Car Type Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-purple-400">
            {t('selectCarType')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {carTypes.map((carType) => (
              <Card
                key={carType.id}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedCarType === carType.id
                    ? 'bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40'
                }`}
                onClick={() => setSelectedCarType(carType.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center text-purple-400">
                    {carType.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {carType.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {carType.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Display */}
        {selectedCarType && (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <h3 className="text-2xl font-semibold text-center mb-8 text-purple-400">
              {carTypes.find(ct => ct.id === selectedCarType)?.name} - Kainos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(services).map(([serviceId, service]) => (
                <Card
                  key={serviceId}
                  className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-white text-center">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-4">
                      €{service.prices[selectedCarType as keyof typeof service.prices]}
                    </div>
                    <Button
                      onClick={() => setActiveTab('booking')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                    >
                      Užsakyti
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {!selectedCarType && (
          <div className="text-center text-gray-400 text-lg">
            Pasirinkite automobilio tipą, kad pamatytumėte kainas
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPage;