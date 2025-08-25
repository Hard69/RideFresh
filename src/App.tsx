import React, { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import PricingPage from '@/components/PricingPage';
import ReviewsPage from '@/components/ReviewsPage';
import BookingPage from '@/components/BookingPage';
import Footer from '@/components/Footer';

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'pricing':
        return <PricingPage setActiveTab={setActiveTab} />;
      case 'reviews':
        return <ReviewsPage />;
      case 'booking':
        return <BookingPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <main>
              {renderContent()}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;