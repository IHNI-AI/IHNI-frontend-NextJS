import React from 'react';
import AppIdeaCard, { AppIdea } from './AppIdeaCard';

// Sample app ideas data (copied from app-ideas.tsx)
const featuredIdeas: AppIdea[] = [
  {
    id: 1,
    title: "EcoTracker",
    description: "Track your daily carbon footprint and get personalized tips to reduce environmental impact.",
    category: "Environment",
    difficulty: "Medium",
    marketSize: "Large",
    tags: ["sustainability", "tracking", "environment"],
    color: "bg-green-500",
    trendData: [45, 52, 48, 65, 72, 68, 75, 82],
    userBase: 125000,
    revenue: 850000,
    timeToMarket: 8,
    satisfaction: 4.6
  },
  {
    id: 2,
    title: "MindfulMinutes",
    description: "Quick meditation sessions tailored to your schedule and stress levels.",
    category: "Wellness",
    difficulty: "Easy",
    marketSize: "Medium",
    tags: ["meditation", "wellness", "mental health"],
    color: "bg-purple-500",
    trendData: [30, 35, 42, 38, 45, 50, 55, 60],
    userBase: 80000,
    revenue: 620000,
    timeToMarket: 6,
    satisfaction: 4.8
  },
  {
    id: 3,
    title: "LocalConnect",
    description: "Connect with neighbors for skill sharing, tool lending, and community building.",
    category: "Social",
    difficulty: "Hard",
    marketSize: "Large",
    tags: ["community", "sharing", "local"],
    color: "bg-blue-500",
    trendData: [25, 28, 35, 40, 42, 38, 45, 48],
    userBase: 210000,
    revenue: 980000,
    timeToMarket: 12,
    satisfaction: 4.2
  },
  {
    id: 4,
    title: "PlantPal",
    description: "AI-powered plant care assistant with watering reminders and disease detection.",
    category: "Lifestyle",
    difficulty: "Hard",
    marketSize: "Medium",
    tags: ["plants", "ai", "care"],
    color: "bg-emerald-500",
    trendData: [20, 25, 30, 35, 40, 45, 50, 55],
    userBase: 95000,
    revenue: 720000,
    timeToMarket: 10,
    satisfaction: 4.5
  },
  {
    id: 5,
    title: "StudyBuddy",
    description: "Gamified learning platform that makes studying fun with achievements and competitions.",
    category: "Education",
    difficulty: "Medium",
    marketSize: "Large",
    tags: ["education", "gamification", "learning"],
    color: "bg-orange-500",
    trendData: [35, 42, 38, 45, 52, 58, 62, 68],
    userBase: 180000,
    revenue: 890000,
    timeToMarket: 7,
    satisfaction: 4.7
  },
  {
    id: 6,
    title: "FoodSaver",
    description: "Reduce food waste by tracking expiration dates and suggesting recipes for leftovers.",
    category: "Lifestyle",
    difficulty: "Easy",
    marketSize: "Medium",
    tags: ["food", "waste reduction", "recipes"],
    color: "bg-red-500",
    trendData: [28, 32, 35, 40, 38, 42, 45, 50],
    userBase: 70000,
    revenue: 580000,
    timeToMarket: 5,
    satisfaction: 4.9
  }
];

// Helper functions (copied from app-ideas.tsx)
  const formatVolume = (volume: number) => {
    if (volume >= 1000000) return `${(volume / 1000000).toFixed(1)}M`;
    if (volume >= 1000) return `${(volume / 1000).toFixed(1)}K`;
    return volume.toString();
  };
  const calculateGrowth = (trendData: number[]) => {
    if (trendData.length < 2) return 0;
    const current = trendData[trendData.length - 1];
    const previous = trendData[trendData.length - 2];
    return previous > 0 ? (current - previous) / previous * 100 : 0;
  };
  const prepareChartData = (trendData: number[]) => {
    return trendData.map((value, index) => ({
      month: index,
      volume: value
    }));
  };

const IdeaCardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-brand-blue">App Ideas</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Discover innovative app concepts backed by real market data and user demand
          </p>
        </div>
        {/* App Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredIdeas.map(idea => (
            <AppIdeaCard
              key={idea.id}
              idea={idea}
              formatVolume={formatVolume}
              calculateGrowth={calculateGrowth}
              prepareChartData={prepareChartData}
            />
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground mb-6">
            We have <span className="font-bold text-brand-blue">1,423 curated app ideas</span> waiting for you
          </p>
          <a href="/app-ideas" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg rounded">
              Explore All App Ideas
            </button>
          </a>
        </div>
      </div>
      {/* Section separator with decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand-blue rounded-full"></div>
    </section>
  );
};

export default IdeaCardsSection;
