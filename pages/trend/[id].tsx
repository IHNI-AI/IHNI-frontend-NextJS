import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTrendById } from '../../src/hooks/useTrendById';

const fictiveMetrics = [
  { label: 'Market Potential', value: '8.5/10' },
  { label: 'User Interest', value: 'High' },
  { label: 'Projected Revenue', value: '$1.2M' },
  { label: 'Competition', value: 'Moderate' },
  { label: 'Time to Market', value: '6 months' },
];

const TrendDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { trend, loading, error } = useTrendById(typeof id === 'string' ? id : id?.[0]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500 text-xl">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !trend) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500 text-xl">Trend not found.</div>
        </div>
        <Footer />
      </div>
    );
  }

  const chartData = Array.isArray(trend.search_history)
    ? trend.search_history.map((entry: any, index: number) => {
        if (entry == null) return { month: index, volume: 0 };
        if (typeof entry === 'string' && entry.includes(':')) {
          const parts = entry.split(':');
          return { month: index, volume: parts.length === 2 ? parseInt(parts[1].trim(), 10) : 0 };
        }
        if (typeof entry === 'number') {
          return { month: index, volume: entry };
        }
        if (typeof entry === 'object' && entry.volume !== undefined) {
          return { month: index, volume: entry.volume };
        }
        return { month: index, volume: 0 };
      })
    : [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16">
        <Card className="w-full max-w-3xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{trend.keyword}</h1>
                <Badge variant="outline" className="text-sm text-stone-700 bg-brand-cream border-stone-300 px-3 py-1 mb-2">Trending</Badge>
                <div className="text-gray-600 text-base mb-2">{trend.description || ''}</div>
                <div className="text-sm text-gray-500">Trend ID: <span className="font-medium text-brand-blue">{trend.id}</span></div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <div className="h-28 w-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="volume" stroke="#3B82F6" strokeWidth={2} fill="url(#areaGradient)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {fictiveMetrics.map((metric) => (
                <div key={metric.label} className="bg-brand-cream rounded-lg p-4 flex flex-col items-center shadow-sm">
                  <div className="text-lg font-semibold text-brand-blue mb-1">{metric.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                </div>
              ))}
            </div>
            <div className="text-gray-700 text-base leading-relaxed">
              <strong>About this trend:</strong> This trend is gaining traction due to recent shifts in consumer behavior and technology. Early adopters are seeing significant benefits, and the market is expected to grow rapidly over the next year. Stay ahead by exploring opportunities in this space.
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TrendDetailPage; 