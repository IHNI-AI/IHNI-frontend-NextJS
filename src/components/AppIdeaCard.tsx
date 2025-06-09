import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Clock, Star, Target, Zap } from 'lucide-react';

export interface AppIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  marketSize: string;
  tags: string[];
  color: string;
  trendData: number[];
  userBase: number;
  revenue: number;
  timeToMarket: number;
  satisfaction: number;
}

interface AppIdeaCardProps {
  idea: AppIdea;
  formatVolume: (volume: number) => string;
  calculateGrowth: (trendData: number[]) => number;
  prepareChartData: (trendData: number[]) => { month: number; volume: number }[];
}

const AppIdeaCard: React.FC<AppIdeaCardProps> = ({
  idea,
  formatVolume,
  calculateGrowth,
  prepareChartData
}) => {
  return (
    <Card className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border-t-4 ${idea.color.replace('bg-', 'border-')}`}>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{idea.title}</h3>
          <Badge variant="secondary" className={`${idea.color} text-white`}>{idea.category}</Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{idea.description}</p>
        <div className="h-20 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={prepareChartData(idea.trendData)} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id={`colorTrend-${idea.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={idea.color.includes('blue') ? '#2563EB' : idea.color.includes('green') ? '#22C55E' : idea.color.includes('purple') ? '#A855F7' : idea.color.includes('emerald') ? '#10B981' : idea.color.includes('orange') ? '#F97316' : '#EF4444'} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={idea.color.includes('blue') ? '#2563EB' : idea.color.includes('green') ? '#22C55E' : idea.color.includes('purple') ? '#A855F7' : idea.color.includes('emerald') ? '#10B981' : idea.color.includes('orange') ? '#F97316' : '#EF4444'} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="volume" stroke={idea.color.includes('blue') ? '#2563EB' : idea.color.includes('green') ? '#22C55E' : idea.color.includes('purple') ? '#A855F7' : idea.color.includes('emerald') ? '#10B981' : idea.color.includes('orange') ? '#F97316' : '#EF4444'} fillOpacity={1} fill={`url(#colorTrend-${idea.id})`} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
          <div className="flex items-center"><Users className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> Users: {formatVolume(idea.userBase)}</div>
          <div className="flex items-center"><DollarSign className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> Revenue: ${formatVolume(idea.revenue)}</div>
          <div className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> TTM: {idea.timeToMarket}m</div>
          <div className="flex items-center"><Star className="w-3.5 h-3.5 mr-1.5 text-yellow-400" /> Rating: {idea.satisfaction}/5</div>
          <div className="flex items-center"><Target className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> Difficulty: {idea.difficulty}</div>
          <div className="flex items-center"><Zap className="w-3.5 h-3.5 mr-1.5 text-gray-400" /> Growth: {calculateGrowth(idea.trendData).toFixed(0)}%</div>
        </div>
        <div className="mb-4">
          {idea.tags.map(tag => (
            <Badge key={tag} variant="outline" className="mr-2 mb-2 text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppIdeaCard; 