import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'lt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  lt: {
    // Navigation
    home: 'Pagrindinis',
    pricing: 'Kainos',
    reviews: 'Atsiliepimai',
    booking: 'Užsakyti',
    
    // Hero Section
    heroTitle: 'Profesionalus Automobilių Detalizavimas',
    heroSubtitle: 'Suteikiame jūsų automobiliui premium priežiūrą su meilės ir dėmesio detalėms',
    heroButton: 'Užsakyti Dabar',
    
    // About Section
    aboutTitle: 'Kodėl Rinktis RideFresh?',
    aboutText: 'Mes specializuojamės premium automobilių detalizavime, naudodami tik aukščiausios kokybės produktus ir moderniausias technologijas.',
    
    // Services
    servicesTitle: 'Mūsų Paslaugos',
    exteriorWash: 'Išorės Plovimas',
    interiorCleaning: 'Salono Valymas',
    fullDetail: 'Pilnas Detalizavimas',
    ceramicCoating: 'Keramikos Dangos',
    
    // Pricing
    pricingTitle: 'Kainos',
    selectCarType: 'Pasirinkite savo automobilio tipą',
    carTypeSmall: 'Mažas automobilis',
    carTypeMedium: 'Vidutinis automobilis',
    carTypeLarge: 'Didelis automobilis',
    carTypeSUV: 'Visureigis',
    
    // Reviews
    reviewsTitle: 'Google Atsiliepimai',
    
    // Booking
    bookingTitle: 'Užsakyti Paslaugą',
    bookingText: 'Susisiekite su mumis ir užsisakykite savo automobilio detalizavimo paslaugą',
    
    // Contact
    phone: 'Telefonas',
    email: 'El. paštas',
    address: 'Adresas',
  },
  en: {
    // Navigation
    home: 'Home',
    pricing: 'Pricing',
    reviews: 'Reviews',
    booking: 'Booking',
    
    // Hero Section
    heroTitle: 'Professional Car Detailing',
    heroSubtitle: 'We provide premium care for your vehicle with love and attention to detail',
    heroButton: 'Book Now',
    
    // About Section
    aboutTitle: 'Why Choose RideFresh?',
    aboutText: 'We specialize in premium car detailing, using only the highest quality products and latest technologies.',
    
    // Services
    servicesTitle: 'Our Services',
    exteriorWash: 'Exterior Wash',
    interiorCleaning: 'Interior Cleaning',
    fullDetail: 'Full Detail',
    ceramicCoating: 'Ceramic Coating',
    
    // Pricing
    pricingTitle: 'Pricing',
    selectCarType: 'Select your car type',
    carTypeSmall: 'Small Car',
    carTypeMedium: 'Medium Car',
    carTypeLarge: 'Large Car',
    carTypeSUV: 'SUV',
    
    // Reviews
    reviewsTitle: 'Google Reviews',
    
    // Booking
    bookingTitle: 'Book Service',
    bookingText: 'Contact us to book your car detailing service',
    
    // Contact
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('lt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['lt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};