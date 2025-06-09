import React, { useState, useMemo } from 'react';
import { Search, Filter, TrendingUp, Users, DollarSign, Clock, Target, Zap, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Changed from react-router-dom
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample app ideas data with trend data and additional metrics
const appIdeas = [{
  id: 1,
  title: "EcoTracker",
  description: "Track your daily carbon footprint and get personalized tips to reduce environmental impact.",
  category: "Environment",
  difficulty: "Medium",
  marketSize: "Large",
  tags: ["sustainability", "tracking", "environment"],
  color: "bg-green-500",
  trendData: [45, 52, 48, 65, 72, 68, 75, 82],
  userBase: 125000,
  revenue: 850000,
  timeToMarket: 8,
  satisfaction: 4.6
}, {
  id: 2,
  title: "MindfulMinutes",
  description: "Quick meditation sessions tailored to your schedule and stress levels.",
  category: "Wellness",
  difficulty: "Easy",
  marketSize: "Medium",
  tags: ["meditation", "wellness", "mental health"],
  color: "bg-purple-500",
  trendData: [30, 35, 42, 38, 45, 50, 55, 60],
  userBase: 80000,
  revenue: 620000,
  timeToMarket: 6,
  satisfaction: 4.8
}, {
  id: 3,
  title: "LocalConnect",
  description: "Connect with neighbors for skill sharing, tool lending, and community building.",
  category: "Social",
  difficulty: "Hard",
  marketSize: "Large",
  tags: ["community", "sharing", "local"],
  color: "bg-blue-500",
  trendData: [25, 28, 35, 40, 42, 38, 45, 48],
  userBase: 210000,
  revenue: 980000,
  timeToMarket: 12,
  satisfaction: 4.2
}, {
  id: 4,
  title: "PlantPal",
  description: "AI-powered plant care assistant with watering reminders and disease detection.",
  category: "Lifestyle",
  difficulty: "Hard",
  marketSize: "Medium",
  tags: ["plants", "ai", "care"],
  color: "bg-emerald-500",
  trendData: [20, 25, 30, 35, 40, 45, 50, 55],
  userBase: 95000,
  revenue: 720000,
  timeToMarket: 10,
  satisfaction: 4.5
}, {
  id: 5,
  title: "StudyBuddy",
  description: "Gamified learning platform that makes studying fun with achievements and competitions.",
  category: "Education",
  difficulty: "Medium",
  marketSize: "Large",
  tags: ["education", "gamification", "learning"],
  color: "bg-orange-500",
  trendData: [35, 42, 38, 45, 52, 58, 62, 68],
  userBase: 180000,
  revenue: 890000,
  timeToMarket: 7,
  satisfaction: 4.7
}, {
  id: 6,
  title: "FoodSaver",
  description: "Reduce food waste by tracking expiration dates and suggesting recipes for leftovers.",
  category: "Lifestyle",
  difficulty: "Easy",
  marketSize: "Medium",
  tags: ["food", "waste reduction", "recipes"],
  color: "bg-red-500",
  trendData: [28, 32, 35, 40, 38, 42, 45, 50],
  userBase: 70000,
  revenue: 580000,
  timeToMarket: 5,
  satisfaction: 4.9
}];
const categories = ["All", "Environment", "Wellness", "Social", "Lifestyle", "Education"];
const difficulties = ["All", "Easy", "Medium", "Hard"];
const marketSizes = ["All", "Small", "Medium", "Large"];
const sortOptions = [{
  value: "title",
  label: "Title"
}, {
  value: "category",
  label: "Category"
}, {
  value: "difficulty",
  label: "Difficulty"
}, {
  value: "marketSize",
  label: "Market Size"
}];
const ITEMS_PER_PAGE = 6;
const AppIdeas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedMarketSize, setSelectedMarketSize] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const filteredAndSortedIdeas = useMemo(() => {
    let filtered = appIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) || idea.description.toLowerCase().includes(searchTerm.toLowerCase()) || idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || idea.difficulty === selectedDifficulty;
      const matchesMarketSize = selectedMarketSize === "All" || idea.marketSize === selectedMarketSize;
      return matchesSearch && matchesCategory && matchesDifficulty && matchesMarketSize;
    });
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "category":
          comparison = a.category.localeCompare(b.category);
          break;
        case "difficulty":
          const difficultyOrder = {
            "Easy": 1,
            "Medium": 2,
            "Hard": 3
          };
          comparison = difficultyOrder[a.difficulty as keyof typeof difficultyOrder] - difficultyOrder[b.difficulty as keyof typeof difficultyOrder];
          break;
        case "marketSize":
          const marketOrder = {
            "Small": 1,
            "Medium": 2,
            "Large": 3
          };
          comparison = marketOrder[a.marketSize as keyof typeof marketOrder] - marketOrder[b.marketSize as keyof typeof marketOrder];
          break;
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });
    return filtered;
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedMarketSize, sortBy, sortOrder]);

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) return `${(volume / 1000000).toFixed(1)}M`;
    if (volume >= 1000) return `${(volume / 1000).toFixed(1)}K`;
    return volume.toString();
  };

  const calculateGrowth = (trendData: number[]) => {
    if (trendData.length < 2) return 0;
    const current = trendData[trendData.length - 1];
    const previous = trendData[trendData.length - 2];
    return previous > 0 ? (current - previous) / previous * 100 : 0;
  };

  const prepareChartData = (trendData: number[]) => {
    return trendData.map((value, index) => ({
      month: index,
      volume: value
    }));
  };
  const totalPages = Math.ceil(filteredAndSortedIdeas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedIdeas = filteredAndSortedIdeas.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return <div className="min-h-screen bg-gradient-to-b from-brand-cream to-white">
      <Navbar />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <TrendingUp className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-medium text-gray-700">App Ideas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Discover Your </span>
              <span className="text-brand-blue">Next Big Idea</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through curated app ideas, complete with market insights and trend analysis to kickstart your next project.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search ideas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-brand-blue"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-[180px] border-gray-200 focus:border-brand-blue">
                  <Filter className="w-4 h-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full lg:w-[180px] border-gray-200 focus:border-brand-blue">
                  <Filter className="w-4 h-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMarketSize} onValueChange={setSelectedMarketSize}>
                <SelectTrigger className="w-full lg:w-[180px] border-gray-200 focus:border-brand-blue">
                  <Filter className="w-4 h-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Market Size" />
                </SelectTrigger>
                <SelectContent>
                  {marketSizes.map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-[180px] border-gray-200 focus:border-brand-blue">
                  <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline"
                onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")} 
                className="border-gray-200 hover:border-brand-blue"
              >
                {sortOrder === "asc" ? "Ascending" : "Descending"}
              </Button>
            </div>
          </div>

          {paginatedIdeas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedIdeas.map(idea => (
                <Card key={idea.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border-t-4 ${idea.color.replace('bg-', 'border-')}`}>
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
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No app ideas match your criteria.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.max(1, prev - 1)); }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink // This is Shadcn's PaginationLink, should be unchanged
                          href="#" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage(page); 
                          }} 
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => { e.preventDefault(); setCurrentPage(prev => Math.min(totalPages, prev + 1)); }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          <div className="mt-16 text-center">
            <Link href="/"> {/* Changed to href */} 
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default AppIdeas;
