import React from 'react';
import { TrendingUp, HelpCircle, BarChart3, Zap } from 'lucide-react';

const ValidationSection: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Validate Your Ideas with Confidence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant feedback and validation for your app concepts before you invest time and resources
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-card rounded-lg shadow-sm dark:shadow-lg hover:shadow-md transition-shadow">
            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Analysis</h3>
            <p className="text-gray-600">Understand market demand and competition for your idea</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-sm dark:shadow-lg hover:shadow-md transition-shadow">
            <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User Feedback</h3>
            <p className="text-gray-600">Get insights from real users about your concept</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-sm dark:shadow-lg hover:shadow-md transition-shadow">
            <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Potential</h3>
            <p className="text-gray-600">Estimate potential revenue and monetization strategies</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-sm dark:shadow-lg hover:shadow-md transition-shadow">
            <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Validation</h3>
            <p className="text-gray-600">Fast turnaround on validation results and recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
