import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Sun, Moon } from 'lucide-react';
import { AuthMenu } from './AuthMenu';
import { Switch } from '@/components/ui/switch';

function toggleDarkMode(enabled: boolean) {
  if (typeof window !== 'undefined') {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}

const Navbar: React.FC = () => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        setDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const handleSwitch = (checked: boolean) => {
    setDark(checked);
    toggleDarkMode(checked);
  };

  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-semibold hover:text-brand-blue transition-colors">
            IHNI
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-8 mr-4">
            <Link href="/app-ideas" className="text-gray-700 hover:text-brand-blue transition-colors">App Ideas</Link>
            <Link href="/all-ideas" className="text-gray-700 hover:text-brand-blue transition-colors">Trends</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-brand-blue transition-colors">Pricing</Link>
          </div>
          <div className="hidden md:block">
            <AuthMenu />
          </div>
          <div className="flex items-center space-x-2">
            <Sun className={`w-5 h-5 ${dark ? 'text-gray-400' : 'text-yellow-500'}`} />
            <Switch checked={dark} onCheckedChange={handleSwitch} aria-label="Toggle dark mode" />
            <Moon className={`w-5 h-5 ${dark ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
          <div className="md:hidden">
            <Button variant="ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
