
import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Mail, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-brand-blue" />
              <span className="text-xl font-bold text-gray-800">IHNI</span>
            </div>
            <p className="text-gray-600 text-sm">
              Discover trending market opportunities with real-time data and insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/all-ideas" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Trends
                </Link>
              </li>
              <li>
                <Link href="/app-ideas" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  App Ideas
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-600 hover:text-brand-blue transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 IHNI. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <TrendingUp className="w-4 h-4 text-brand-blue" />
            <span className="text-sm text-gray-500">Powered by real-time market data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
