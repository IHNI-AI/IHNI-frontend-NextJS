import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
interface TrendCardProps {
  name: string;
  growth: number;
  volume: number;
  sparkline: number[];
  description: string;
}
const TrendCard: React.FC<TrendCardProps> = ({
  name,
  growth,
  volume,
  sparkline,
  description
}) => {
  // Format numbers for display, robust to undefined/null/NaN
  const formatVolume = (volume: number | undefined | null) => {
    if (typeof volume !== 'number' || isNaN(volume)) return 'N/A';
    if (volume >= 1000000) return `${(volume / 1000000).toFixed(1)}M`;
    if (volume >= 1000) return `${(volume / 1000).toFixed(1)}K`;
    return volume.toString();
  };

  // Prepare chart data with enhanced vertical movement for area chart
  const chartData = sparkline.map((value, index) => {
    const baseValue = Math.min(...sparkline);
    const maxValue = Math.max(...sparkline);
    const range = maxValue - baseValue;
    let amplifiedValue;
    if (range > 0) {
      const normalizedPosition = (value - baseValue) / range;
      amplifiedValue = baseValue + Math.pow(normalizedPosition, 0.3) * range * 3;
    } else {
      amplifiedValue = value;
    }
    return {
      month: index,
      volume: amplifiedValue
    };
  });

  // Create a longer, more detailed description
  const extendedDescription = `${description} This emerging trend represents a significant opportunity in the current market landscape with growing user demand and increasing search volume across multiple demographics.`;
  return <Card className="bg-card border border-gray-200 hover:shadow-lg hover:border-blue-600 transition-all duration-300 h-auto w-full overflow-hidden">
      <CardContent className="p-6">
        {/* Header with trend name */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
            {name}
          </h3>
          <Badge variant="outline" className="text-sm text-stone-700 bg-brand-cream border-stone-300 px-3 py-1">
            Trending
          </Badge>
        </div>

        {/* Truncated Description - 2 rows */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2 overflow-hidden">
          {extendedDescription}
        </p>

        {/* Trend visualization dots and area chart */}
        <div className="mb-8">
          {/* Small trend dots */}
          <div className="flex space-x-2 mb-6">
            {Array.from({
            length: 5
          }, (_, index) => <div key={index} className="w-2 h-2 rounded-full bg-blue-400" style={{
            opacity: 0.3 + index * 0.15
          }} />)}
          </div>

          {/* Area chart with dotted background */}
          <div className="h-32 w-full relative">
            {/* Dotted grid background */}
            <div className="absolute inset-0 opacity-40">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern id="dotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="6" cy="6" r="1.5" fill="#64748B" opacity="0.6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />
              </svg>
            </div>
            {/* Chart container */}
            <div className="relative z-10 h-full w-full">
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

        {/* Bottom section with metrics - properly aligned */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm mb-1">Search Volume</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatVolume(volume)}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-gray-500 text-sm mb-1">Growth</p>
            <div className="border-2 border-green-500 rounded-full w-16 h-8 flex items-center justify-center shadow-lg border-solid bg-zinc-50 mt-1 my-0">
              <span className="text-green-600 font-bold text-sm">
                +{growth}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default TrendCard;