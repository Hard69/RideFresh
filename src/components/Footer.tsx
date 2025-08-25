import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      title: t('phone'),
      value: '+370 600 12345',
      subtitle: language === 'lt' ? 'Pirmadienį - Sekmadienį 8:00-20:00' : 'Monday - Sunday 8:00-20:00'
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      title: t('email'),
      value: 'info@ridefresh.lt',
      subtitle: language === 'lt' ? 'Atsakysime per 24h' : 'We reply within 24h'
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      title: t('address'),
      value: 'Vilnius, Lietuva',
      subtitle: language === 'lt' ? 'Atvažiuojame pas jus' : 'We come to you'
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-400" />,
      title: language === 'lt' ? 'Darbo laikas' : 'Working Hours',
      value: language === 'lt' ? 'Kasdien: 8:00 - 20:00' : 'Daily: 8:00 - 20:00',
      subtitle: language === 'lt' ? 'Įskaitant savaitgalius' : 'Including weekends'
    }
  ];

  const services = [
    { name: t('exteriorWash'), price: language === 'lt' ? 'nuo €25' : 'from €25' },
    { name: t('interiorCleaning'), price: language === 'lt' ? 'nuo €35' : 'from €35' },
    { name: t('fullDetail'), price: language === 'lt' ? 'nuo €85' : 'from €85' },
    { name: t('ceramicCoating'), price: language === 'lt' ? 'nuo €350' : 'from €350' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="RideFresh" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'lt' 
                ? 'Profesionalus automobilių detalizavimas Lietuvoje. Suteikiame jūsų automobiliui premium priežiūrą.'
                : 'Professional car detailing in Lithuania. We provide premium care for your vehicle.'
              }
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/30 cursor-pointer transition-all duration-300">
                <Facebook className="w-4 h-4 text-purple-400" />
              </div>
              <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/30 cursor-pointer transition-all duration-300">
                <Instagram className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === 'lt' ? 'Kontaktai' : 'Contact'}
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                    <p className="text-gray-400 text-xs">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('servicesTitle')}
            </h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="text-gray-300 text-sm">{service.name}</span>
                  <span className="text-purple-400 text-sm font-medium">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === 'lt' ? 'Klientų atsiliepimai' : 'Customer Reviews'}
            </h3>
            <Card className="bg-gray-800/30 border-purple-500/20">
              <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-purple-400 mb-1">5.0</p>
                <p className="text-gray-400 text-xs">Google Reviews</p>
                <p className="text-gray-400 text-xs">
                  {language === 'lt' ? '50+ atsiliepimų' : '50+ reviews'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 RideFresh. {language === 'lt' ? 'Visos teisės saugomos.' : 'All rights reserved.'}
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                {language === 'lt' ? 'Privatumo politika' : 'Privacy Policy'}
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                {language === 'lt' ? 'Paslaugų teikimo sąlygos' : 'Terms of Service'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;