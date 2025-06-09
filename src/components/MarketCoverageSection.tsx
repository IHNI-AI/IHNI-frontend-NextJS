
import React from 'react';
import { Globe, Radar, Clock, Users, TrendingUp, Eye } from 'lucide-react';
const MarketCoverageSection: React.FC = () => {
  const opportunityHotspots = [{
    name: 'FinTech',
    x: 25,
    y: 40,
    size: 'large',
    opportunities: 156
  }, {
    name: 'HealthTech',
    x: 15,
    y: 60,
    size: 'medium',
    opportunities: 89
  }, {
    name: 'EdTech',
    x: 45,
    y: 25,
    size: 'medium',
    opportunities: 94
  }, {
    name: 'AI Tools',
    x: 70,
    y: 35,
    size: 'large',
    opportunities: 203
  }, {
    name: 'Productivity',
    x: 60,
    y: 70,
    size: 'small',
    opportunities: 67
  }, {
    name: 'Gaming',
    x: 35,
    y: 80,
    size: 'medium',
    opportunities: 112
  }, {
    name: 'SaaS',
    x: 80,
    y: 55,
    size: 'large',
    opportunities: 178
  }];
  return <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Stop guessing, </span>
              <span className="text-brand-blue">start building</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover context on markets you didn't know about with user-centric pain points and insights on what people really want.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Opportunity radar */}
            <div className="flex">
              <div className="bg-white rounded-2xl p-8 shadow-lg flex-1 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <Radar className="w-8 h-8 text-brand-blue mr-3" />
                  <h3 className="text-xl font-semibold">Opportunity Radar</h3>
                </div>

                {/* Radar visualization */}
                <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-full p-8 flex-1 flex items-center justify-center">
                  {/* Radar circles */}
                  {[...Array(4)].map((_, i) => <div key={i} className="absolute border border-blue-200 rounded-full" style={{
                  width: `${(i + 1) * 25}%`,
                  height: `${(i + 1) * 25}%`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}></div>)}

                  {/* Radar lines */}
                  <div className="absolute w-full h-px bg-blue-200 top-1/2 left-0"></div>
                  <div className="absolute h-full w-px bg-blue-200 left-1/2 top-0"></div>
                  <div className="absolute w-full h-px bg-blue-200 top-1/2 left-0 transform rotate-45 origin-center"></div>
                  <div className="absolute w-full h-px bg-blue-200 top-1/2 left-0 transform -rotate-45 origin-center"></div>

                  {/* Opportunity hotspots */}
                  {opportunityHotspots.map((spot, i) => <div key={i} className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`} style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`
                }}>
                      <div className={`
                        ${spot.size === 'large' ? 'w-6 h-6' : spot.size === 'medium' ? 'w-4 h-4' : 'w-3 h-3'}
                        bg-brand-blue rounded-full animate-pulse shadow-lg
                        group-hover:scale-125 transition-transform
                      `}></div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                        {spot.name}: {spot.opportunities} ideas
                      </div>
                    </div>)}

                  {/* Scanning line */}
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-green-500 transform -translate-y-1/2 origin-left animate-spin"></div>
                </div>

                <div className="text-center mt-4">
                  <div className="text-sm text-gray-600">
                    <div className="inline-flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Scanning for opportunities across all industries
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits and features */}
            <div className="flex flex-col space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg flex-1 flex flex-col justify-center">
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Time Efficiency</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Manual validation takes too much time. Let our AI do the heavy lifting 
                      while you focus on building.
                    </p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-red-500">Manual: 40+ hours/week</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-500">Automated: 5 minutes/day</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg flex-1 flex flex-col justify-center">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">User-Centric Insights</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Real insights on what people actually want, not what you think they want. 
                      Based on genuine user pain points.
                    </p>
                    <div className="flex items-center space-x-2 text-xs">
                      <Eye className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-600 font-medium">10,000+ daily user signals analyzed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue text-white rounded-xl p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-8 h-8 text-white mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Market Diversity</h4>
                    <p className="text-blue-100 text-sm mb-3">
                      Opportunities exist everywhere, not just in areas you're interested in. 
                      Discover untapped markets you never considered.
                    </p>
                    <div className="text-xs text-white font-medium">
                      100+ Industries • 50+ Countries • 24/7 Monitoring
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MarketCoverageSection;
