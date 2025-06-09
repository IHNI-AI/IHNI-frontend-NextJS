import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TrendCard from './TrendCard';
import { useTrends } from '../hooks/useTrends';

function parseSparkline(search_history: any): number[] {
  if (Array.isArray(search_history)) {
    return search_history.map((entry: string) => {
      const parts = entry.split(':');
      return parts.length === 2 ? parseInt(parts[1].trim(), 10) : 0;
    });
  }
  return [];
}

const TrendsSection: React.FC = () => {
  const { trends, loading, error } = useTrends(6); // fetch 6 trends for the landing page

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending <span className="text-brand-blue">App-related</span> Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the hottest app categories based on real market data and user demand
          </p>
        </div>

        {loading && <div className="text-center">Loading trends...</div>}
        {error && <div className="text-center text-red-500">Error: {error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!loading && !error && trends.map((trend) => (
            <TrendCard
              key={trend.id}
              name={trend.keyword}
              growth={((typeof trend.growth === 'number' ? trend.growth : Number(trend.growth) || 0) * 100)}
              volume={trend.volume ?? 0}
              sparkline={parseSparkline(trend.search_history)}
              description={trend.description || ''}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            <span className="font-bold text-brand-blue">870+ curated trends</span> for you
          </p>
          <Link href="/all-ideas" onClick={() => window.scrollTo(0, 0)}>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg">Explore All Trends</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendsSection;
