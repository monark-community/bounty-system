
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BountyCard from "@/components/BountyCard";

const Bounties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const bounties = [
    {
      id: 1,
      title: "Smart Contract Security Audit",
      description: "Review and audit our DeFi protocol smart contracts for vulnerabilities and potential exploits. Must provide detailed report with recommendations.",
      reward: "2,500 USDC",
      deadline: "2024-01-15",
      category: "Security",
      skills: ["Solidity", "Security", "DeFi", "Auditing"],
      difficulty: "Expert",
      organization: "DeFi Protocol DAO"
    },
    {
      id: 2,
      title: "Frontend Dashboard Development",
      description: "Build a responsive dashboard for tracking DAO governance metrics including voting participation and proposal analytics.",
      reward: "1,800 DAI",
      deadline: "2024-01-20",
      category: "Development",
      skills: ["React", "TypeScript", "Web3", "D3.js"],
      difficulty: "Intermediate",
      organization: "Governance Labs"
    },
    {
      id: 3,
      title: "Technical Documentation",
      description: "Create comprehensive API documentation for our protocol including code examples and integration guides.",
      reward: "800 USDC",
      deadline: "2024-01-25",
      category: "Documentation",
      skills: ["Technical Writing", "API Design", "Documentation"],
      difficulty: "Beginner",
      organization: "Protocol Foundation"
    },
    {
      id: 4,
      title: "NFT Marketplace Smart Contract",
      description: "Develop a gas-optimized NFT marketplace with royalty distribution and batch operations support.",
      reward: "3,200 ETH",
      deadline: "2024-02-01",
      category: "Development",
      skills: ["Solidity", "NFTs", "Gas Optimization", "Testing"],
      difficulty: "Expert",
      organization: "ArtDAO Collective"
    },
    {
      id: 5,
      title: "Community Management Strategy",
      description: "Design and implement a comprehensive community engagement strategy for our growing DAO ecosystem.",
      reward: "1,200 USDC",
      deadline: "2024-01-30",
      category: "Marketing",
      skills: ["Community Management", "Social Media", "Strategy"],
      difficulty: "Intermediate",
      organization: "Community DAO"
    },
    {
      id: 6,
      title: "Mobile App Prototype",
      description: "Create a mobile app prototype for DAO voting with intuitive UX and Web3 wallet integration.",
      reward: "2,000 DAI",
      deadline: "2024-02-10",
      category: "Design",
      skills: ["Mobile Design", "Prototyping", "UX/UI", "Web3"],
      difficulty: "Intermediate",
      organization: "Mobile First DAO"
    }
  ];

  const categories = ["all", "Development", "Security", "Documentation", "Marketing", "Design"];
  const difficulties = ["all", "Beginner", "Intermediate", "Expert"];

  const filteredBounties = bounties.filter((bounty) => {
    const matchesSearch = bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bounty.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bounty.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || bounty.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || bounty.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Bounties</h1>
            <p className="text-gray-600">Discover opportunities to contribute and earn rewards</p>
          </div>
          <Link to="/create-bounty">
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Bounty
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search bounties, skills, or organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty === "all" ? "All Levels" : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredBounties.length} of {bounties.length} bounties
          </p>
          <div className="flex items-center space-x-2">
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>{selectedCategory}</span>
                <button onClick={() => setSelectedCategory("all")} className="ml-1 hover:text-gray-700">×</button>
              </Badge>
            )}
            {selectedDifficulty !== "all" && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <span>{selectedDifficulty}</span>
                <button onClick={() => setSelectedDifficulty("all")} className="ml-1 hover:text-gray-700">×</button>
              </Badge>
            )}
          </div>
        </div>

        {/* Bounty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <BountyCard key={bounty.id} bounty={bounty} />
          ))}
        </div>

        {filteredBounties.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No bounties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedDifficulty("all");
            }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bounties;
