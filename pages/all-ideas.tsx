import React, { useState, useMemo } from 'react';
import { Search, Filter, TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import TrendCard from '@/components/TrendCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample trend data (same as TrendsSection)
const sampleTrends = [
  {
    id: 1,
    trendName: "SustainCart",
    description: "Shopping app that shows environmental impact of products and suggests sustainable alternatives.",
    category: "ecommerce",
    trendingKeyword: "sustainable shopping",
    marketPotential: 8,
    difficulty: "Hard" as const,
    trendData: [20, 25, 30, 35, 45, 50, 55, 60]
  },
  {
    id: 2,
    trendName: "GreenCommunity",
    description: "Social platform for communities to organize and track collective environmental initiatives.",
    category: "social",
    trendingKeyword: "community sustainability",
    marketPotential: 5,
    difficulty: "Medium" as const,
    trendData: [30, 35, 40, 50, 60, 70, 75, 80]
  },
  {
    id: 3,
    trendName: "FitnessAR",
    description: "Augmented reality fitness app that overlays workout instructions on real-world environments.",
    category: "health",
    trendingKeyword: "ar fitness",
    marketPotential: 9,
    difficulty: "Hard" as const,
    trendData: [40, 50, 60, 70, 80, 85, 90, 95]
  },
  {
    id: 4,
    trendName: "MindfulWork",
    description: "Productivity app that integrates mindfulness practices into daily work routines and break scheduling.",
    category: "productivity",
    trendingKeyword: "mindful productivity",
    marketPotential: 2,
    difficulty: "Easy" as const,
    trendData: [25, 30, 35, 40, 45, 50, 55, 60]
  },
  {
    id: 5,
    trendName: "LocalChef",
    description: "Connect home cooks with neighbors for meal sharing and cooking classes in local communities.",
    category: "lifestyle",
    trendingKeyword: "local cooking",
    marketPotential: 4,
    difficulty: "Medium" as const,
    trendData: [20, 25, 35, 40, 45, 50, 45, 40]
  },
  {
    id: 6,
    trendName: "CodeMentor AI",
    description: "AI-powered coding mentor that provides personalized learning paths and real-time code review.",
    category: "education",
    trendingKeyword: "ai coding mentor",
    marketPotential: 10,
    difficulty: "Hard" as const,
    trendData: [35, 45, 55, 65, 75, 80, 85, 90]
  },
  // Add more sample data to demonstrate pagination
  {
    id: 7,
    trendName: "PetConnect",
    description: "Social network for pet owners to connect, share experiences, and find pet services.",
    category: "social",
    trendingKeyword: "pet social network",
    marketPotential: 3,
    difficulty: "Easy" as const,
    trendData: [15, 20, 25, 30, 35, 40, 45, 50]
  },
  {
    id: 8,
    trendName: "SmartGarden",
    description: "IoT-powered gardening app that monitors soil, weather, and plant health automatically.",
    category: "lifestyle",
    trendingKeyword: "smart gardening",
    marketPotential: 6,
    difficulty: "Medium" as const,
    trendData: [25, 30, 40, 45, 55, 60, 65, 70]
  },
  {
    id: 9,
    trendName: "VirtualTutor",
    description: "AI tutoring platform that adapts to individual learning styles and provides personalized lessons.",
    category: "education",
    trendingKeyword: "ai tutoring",
    marketPotential: 8,
    difficulty: "Hard" as const,
    trendData: [30, 40, 50, 60, 70, 75, 80, 85]
  }
];

const categories = ["All", "ecommerce", "social", "health", "productivity", "lifestyle", "education"];
const difficulties = ["All", "Easy", "Medium", "Hard"];
const sortOptions = [
  { value: "volume", label: "Search Volume" },
  { value: "growth", label: "Growth Rate" },
  { value: "difficulty", label: "Difficulty" },
  { value: "name", label: "Name" }
];

const ITEMS_PER_PAGE = 6;

const AllIdeas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [sortBy, setSortBy] = useState("volume");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);

  const calculateGrowth = (trendData: number[]) => {
    if (trendData.length < 2) return 0;
    const current = trendData[trendData.length - 1];
    const previous = trendData[trendData.length - 2];
    return previous > 0 ? ((current - previous) / previous) * 100 : 0;
  };


  const filteredAndSortedTrends = useMemo(() => {
    let filtered = sampleTrends.filter(trend => {
      const matchesSearch = trend.trendName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trend.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trend.trendingKeyword.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || trend.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "All" || trend.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "volume":
          const aVolume = a.trendData[a.trendData.length - 1] || 0;
          const bVolume = b.trendData[b.trendData.length - 1] || 0;
          comparison = aVolume - bVolume;
          break;
        case "growth":
          const aGrowth = a.trendData.length > 1 ? 
            ((a.trendData[a.trendData.length - 1] - a.trendData[a.trendData.length - 2]) / a.trendData[a.trendData.length - 2]) * 100 : 0;
          const bGrowth = b.trendData.length > 1 ? 
            ((b.trendData[b.trendData.length - 1] - b.trendData[b.trendData.length - 2]) / b.trendData[b.trendData.length - 2]) * 100 : 0;
          comparison = aGrowth - bGrowth;
          break;
        case "difficulty":
          comparison = a.marketPotential - b.marketPotential;
          break;
        case "name":
          comparison = a.trendName.localeCompare(b.trendName);
          break;
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedDifficulty, sortBy, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedTrends.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTrends = filteredAndSortedTrends.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream to-white">
      <Navbar />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <TrendingUp className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-medium text-gray-700">Market Trends</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Trending </span>
              <span className="text-brand-blue">App-related</span>
              <span className="text-gray-800"> Opportunities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time data on emerging market trends for your own ideation process. Act fast on opportunities before they become mainstream.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search ideas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-brand-blue"
                />
              </div>

              {/* Category Filter */}
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

              {/* Difficulty Filter */}
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

              {/* Sort By */}
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

              {/* Sort Order Button */}
              <Button 
                variant="outline"
                onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")} 
                className="border-gray-200 hover:border-brand-blue"
              >
                {sortOrder === "asc" ? "Ascending" : "Descending"}
              </Button>
            </div>
          </div>

          {/* Trends Grid */}
          {paginatedTrends.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedTrends.map(trend => (
                <TrendCard 
                  key={trend.id} 
                  name={trend.trendName} 
                  description={trend.description} 
                  sparkline={trend.trendData} 
                  growth={calculateGrowth(trend.trendData)} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No trends match your criteria.</p>
            </div>
          )}

          {/* Pagination */}
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
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        href="#" 
                        isActive={currentPage === i + 1}
                        onClick={(e) => { e.preventDefault(); setCurrentPage(i + 1); }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
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

          {/* Back to Home Button */}
          <div className="mt-16 text-center">
            <Link href="/">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllIdeas;
