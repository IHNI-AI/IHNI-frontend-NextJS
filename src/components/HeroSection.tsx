import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NetworkVisualization from './NetworkVisualization';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-16">
      {/* Announcement banner */}
      <div className="absolute top-20 left-0 w-full flex justify-center z-10">
        <div className="bg-card py-2 px-4 rounded-full shadow-md flex items-center space-x-2">
          <span className="text-amber-500">✨</span>
          <span className="text-sm font-medium">12 App Ideas spoted today</span>
          <div className="w-px h-4 bg-gray-200 mx-2"></div>
          <span className="text-sm font-medium text-blue-500">Daily uploads</span>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full" style={{ height: '48%' }}>
      <NetworkVisualization />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Discover </span>
            <span className="text-brand-blue"> App Ideas </span>
            <span className="text-foreground"> people really </span>
            <span className="text-brand-blue"> Need </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-10">
           Not AI Generated. Data-driven App Ideas based on Real Problems, Real Demand, Real Data.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/app-ideas" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-6 text-lg">
                {'See App Ideas'}
              </Button>
            </Link>
            <Link href="/all-ideas" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50 px-8 py-6 text-lg">
                Trends
              </Button>
            </Link>
          </div>

          {/* Search bar demo */}
          <div className="mt-20 relative max-w-2xl mx-auto">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
