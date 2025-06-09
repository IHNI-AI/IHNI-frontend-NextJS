
import React from 'react';
import { Database, Globe, BarChart3, TrendingUp, Eye, Search } from 'lucide-react';

const DataDrivenSection: React.FC = () => {
  const dataMetrics = [{
    label: 'Data Sources',
    value: '50+',
    icon: Database
  }, {
    label: 'Industries Covered',
    value: '100%',
    icon: Globe
  }, {
    label: 'Daily Updates',
    value: '10K+',
    icon: TrendingUp
  }, {
    label: 'Market Insights',
    value: '24/7',
    icon: Eye
  }];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data-Driven Intelligence</h2>
          <p className="text-lg text-gray-600">Powered by comprehensive market data and real-time insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dataMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataDrivenSection;
