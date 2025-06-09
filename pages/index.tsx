import React from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import IdeaCardsSection from '@/components/IdeaCardsSection';
import TrendsSection from '@/components/TrendsSection';
import SpeedSection from '@/components/SpeedSection';
import DataDrivenSection from '@/components/DataDrivenSection';
import MarketCoverageSection from '@/components/MarketCoverageSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IdeaCardsSection />
      <TrendsSection />
      <SpeedSection />
      <DataDrivenSection />
      <MarketCoverageSection />
      <Footer />
    </div>
  );
};

export default Index;
