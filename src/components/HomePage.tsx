import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Car, Shield, Star, Clock } from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Car className="w-8 h-8 text-purple-400" />,
      title: t('exteriorWash'),
      description: 'Premium exterior cleaning and protection'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: t('interiorCleaning'),
      description: 'Deep interior cleaning and sanitization'
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      title: t('fullDetail'),
      description: 'Complete interior and exterior detailing'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: t('ceramicCoating'),
      description: 'Long-lasting ceramic protection coating'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000">
            {t('heroTitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-in fade-in delay-300 duration-700">
            {t('heroSubtitle')}
          </p>
          <Button
            onClick={() => setActiveTab('booking')}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 animate-in slide-in-from-bottom delay-500 duration-700"
          >
            {t('heroButton')}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-purple-400">
            {t('aboutTitle')}
          </h3>
          <p className="text-lg text-gray-300 mb-12">
            {t('aboutText')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-400">
            {t('servicesTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;