import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();
  const scrollDirection = useScrollDirection();
  
  const tabs = [
    { id: 'home', label: t('home') },
    { id: 'pricing', label: t('pricing') },
    { id: 'reviews', label: t('reviews') },
    { id: 'booking', label: t('booking') },
  ];

  return (
    <>
      {/* Logo Section - Always visible */}
      <div className="w-full bg-black/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1" />
            
            {/* Centered Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="RideFresh Logo" 
                className="h-16 w-auto transition-all duration-500 ease-out"
              />
            </div>
            
            {/* Language Switcher */}
            <div className="flex-1 flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section - Hides on scroll down */}
      <div className={`w-full bg-black/90 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-40 transition-all duration-500 ease-out ${
        scrollDirection === 'down' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-2">
          {/* Navigation Tabs */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(tab.id)}
                  size="sm"
                  className={`transition-all duration-300 ease-out transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;