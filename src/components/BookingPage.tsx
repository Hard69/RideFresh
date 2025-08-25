import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carType: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(language === 'lt' ? 'Ačiū už užsakymą! Susisieksime su jumis artimiausiu metu.' : 'Thank you for your booking! We will contact you soon.');
  };

  const carTypes = [
    { value: 'small', labelLt: 'Mažas automobilis', labelEn: 'Small Car' },
    { value: 'medium', labelLt: 'Vidutinis automobilis', labelEn: 'Medium Car' },
    { value: 'large', labelLt: 'Didelis automobilis', labelEn: 'Large Car' },
    { value: 'suv', labelLt: 'Visureigis', labelEn: 'SUV' }
  ];

  const services = [
    { value: 'exterior', labelLt: 'Išorės plovimas', labelEn: 'Exterior Wash' },
    { value: 'interior', labelLt: 'Salono valymas', labelEn: 'Interior Cleaning' },
    { value: 'full', labelLt: 'Pilnas detalizavimas', labelEn: 'Full Detail' },
    { value: 'ceramic', labelLt: 'Keramikos danga', labelEn: 'Ceramic Coating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
          {t('bookingTitle')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="bg-gray-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                {language === 'lt' ? 'Užsakyti paslaugą' : 'Book Service'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    {language === 'lt' ? 'Vardas ir pavardė' : 'Full Name'}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400"
                    placeholder={language === 'lt' ? 'Jūsų vardas ir pavardė' : 'Your full name'}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    {language === 'lt' ? 'Telefono numeris' : 'Phone Number'}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400"
                    placeholder={language === 'lt' ? '+370 xxx xxxxx' : '+370 xxx xxxxx'}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    {language === 'lt' ? 'El. pašto adresas' : 'Email Address'}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400"
                    placeholder={language === 'lt' ? 'jusu@email.com' : 'your@email.com'}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">
                    {language === 'lt' ? 'Automobilio tipas' : 'Car Type'}
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('carType', value)}>
                    <SelectTrigger className="bg-gray-700/50 border-purple-500/30 text-white">
                      <SelectValue placeholder={language === 'lt' ? 'Pasirinkite automobilio tipą' : 'Select car type'} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30">
                      {carTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-white hover:bg-purple-600/20">
                          {language === 'lt' ? type.labelLt : type.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">
                    {language === 'lt' ? 'Paslauga' : 'Service'}
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-gray-700/50 border-purple-500/30 text-white">
                      <SelectValue placeholder={language === 'lt' ? 'Pasirinkite paslaugą' : 'Select service'} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30">
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value} className="text-white hover:bg-purple-600/20">
                          {language === 'lt' ? service.labelLt : service.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    {language === 'lt' ? 'Papildoma informacija' : 'Additional Information'}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-gray-700/50 border-purple-500/30 text-white placeholder-gray-400"
                    placeholder={language === 'lt' ? 'Papildomi pageidavimai ar pastabos...' : 'Additional requests or notes...'}
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'lt' ? 'Pateikti užsakymą' : 'Submit Booking'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {language === 'lt' ? 'Kontaktai' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">+370 600 12345</p>
                    <p className="text-gray-400 text-sm">{language === 'lt' ? 'Pirmadienį - Sekmadienį 8:00-20:00' : 'Monday - Sunday 8:00-20:00'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">info@ridefresh.lt</p>
                    <p className="text-gray-400 text-sm">{language === 'lt' ? 'Atsakysime per 24h' : 'We reply within 24h'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">Vilnius, Lietuva</p>
                    <p className="text-gray-400 text-sm">{language === 'lt' ? 'Atvažiuojame pas jus' : 'We come to you'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-white font-semibold">{language === 'lt' ? 'Darbo laikas' : 'Working Hours'}</p>
                    <p className="text-gray-400 text-sm">{language === 'lt' ? 'Pirmadienį - Sekmadienį: 8:00 - 20:00' : 'Monday - Sunday: 8:00 - 20:00'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {language === 'lt' ? 'Kodėl rinktis mus?' : 'Why Choose Us?'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>{language === 'lt' ? 'Profesionalūs specialistai su daugiau nei 5 metų patirtimi' : 'Professional specialists with over 5 years of experience'}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>{language === 'lt' ? 'Premium kokybės produktai ir įranga' : 'Premium quality products and equipment'}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>{language === 'lt' ? 'Mobilūs paslaugos - atvažiuojame pas jus' : 'Mobile service - we come to you'}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>{language === 'lt' ? '100% garantija rezultatui' : '100% satisfaction guarantee'}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;