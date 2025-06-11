import React from 'react';
import { Zap, TrendingUp, Clock, Target } from 'lucide-react';
const SpeedSection: React.FC = () => {
  const competitors = [{
    name: 'You',
    position: 85,
    color: 'bg-brand-blue',
    icon: Target
  }, {
    name: 'Competitor A',
    position: 45,
    color: 'bg-gray-400',
    icon: Clock
  }, {
    name: 'Competitor B',
    position: 35,
    color: 'bg-gray-400',
    icon: Clock
  }, {
    name: 'Competitor C',
    position: 25,
    color: 'bg-gray-400',
    icon: Clock
  }];
  return <section className="py-20 bg-background border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Be the </span>
              <span className="text-brand-blue">first to know</span>
              <span className="text-gray-800"> any app opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speed matters. Everything moves fast in AI; you need the same pace in idea spotting.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Racing visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Market Opportunity Race</h3>
                
                {/* Race track */}
                <div className="space-y-4">
                  {competitors.map((competitor, i) => {
                  const Icon = competitor.icon;
                  return <div key={i} className="relative">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-medium w-24">{competitor.name}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-4 mx-4 relative overflow-hidden">
                            <div className={`${competitor.color} h-4 rounded-full transition-all duration-2000 ease-out flex items-center justify-end pr-2`} style={{
                          width: `${competitor.position}%`
                        }}>
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <span className="text-sm font-bold w-12">{competitor.position}%</span>
                        </div>
                      </div>;
                })}
                </div>

                {/* Finish line */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">First to market advantage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time data streams */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold">Real-Time Data Streams</h4>
                </div>
                
                <div className="space-y-3">
                  {[{
                  source: 'Reddit API',
                  updates: '1,247',
                  trend: '+12%'
                }, {
                  source: 'App Store',
                  updates: '856',
                  trend: '+8%'
                }, {
                  source: 'Social Media',
                  updates: '2,103',
                  trend: '+15%'
                }, {
                  source: 'Tech Forums',
                  updates: '634',
                  trend: '+5%'
                }].map((stream, i) => <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">{stream.source}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{stream.updates} updates</span>
                        <span className="text-sm text-green-600 font-medium">{stream.trend}</span>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                    </div>)}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SpeedSection;