import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'lt' ? 'en' : 'lt');
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="p-1 h-auto bg-gray-800/50 hover:bg-purple-600/20 border border-purple-500/30 rounded-lg transition-all duration-300 transform hover:scale-105"
    >
      <img
        src={language === 'lt' ? '/flag-lt.svg' : '/flag-en.png'}
        alt={language === 'lt' ? 'Lithuanian' : 'English'}
        className="w-8 h-6 object-cover rounded"
      />
    </Button>
  );
};

export default LanguageSwitcher;