
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, DollarSign, Award, TrendingUp, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";

const Leaderboard = () => {
  const topContributors = [
    {
      rank: 1,
      username: "crypto_dev",
      reputation: 4.9,
      totalEarned: "45,200 USDC",
      completedBounties: 42,
      categories: ["Development", "Security"],
      trending: true
    },
    {
      rank: 2,
      username: "security_guru",
      reputation: 4.8,
      totalEarned: "38,750 DAI",
      completedBounties: 35,
      categories: ["Security", "Auditing"],
      trending: false
    },
    {
      rank: 3,
      username: "alex_dev",
      reputation: 4.8,
      totalEarned: "32,100 USDC",
      completedBounties: 28,
      categories: ["Development", "Web3"],
      trending: true
    },
    {
      rank: 4,
      username: "defi_expert",
      reputation: 4.7,
      totalEarned: "29,500 DAI",
      completedBounties: 31,
      categories: ["DeFi", "Smart Contracts"],
      trending: false
    },
    {
      rank: 5,
      username: "docs_master",
      reputation: 4.6,
      totalEarned: "18,900 USDC",
      completedBounties: 24,
      categories: ["Documentation", "Technical Writing"],
      trending: false
    },
    {
      rank: 6,
      username: "frontend_ninja",
      reputation: 4.5,
      totalEarned: "16,200 DAI",
      completedBounties: 19,
      categories: ["Frontend", "UI/UX"],
      trending: true
    },
    {
      rank: 7,
      username: "solidity_pro",
      reputation: 4.4,
      totalEarned: "14,800 USDC",
      completedBounties: 22,
      categories: ["Solidity", "Smart Contracts"],
      trending: false
    },
    {
      rank: 8,
      username: "web3_builder",
      reputation: 4.3,
      totalEarned: "12,600 DAI",
      completedBounties: 18,
      categories: ["Web3", "Integration"],
      trending: true
    }
  ];

  const topOrganizations = [
    {
      rank: 1,
      name: "DeFi Protocol DAO",
      totalBounties: 24,
      totalPaid: "125,000 USDC",
      avgBountyValue: "5,200 USDC",
      category: "DeFi"
    },
    {
      rank: 2,
      name: "Governance Labs",
      totalBounties: 18,
      totalPaid: "89,500 DAI",
      avgBountyValue: "4,970 DAI",
      category: "Governance"
    },
    {
      rank: 3,
      name: "Security Collective",
      totalBounties: 15,
      totalPaid: "78,200 USDC",
      avgBountyValue: "5,210 USDC",
      category: "Security"
    },
    {
      rank: 4,
      name: "NFT Foundation",
      totalBounties: 22,
      totalPaid: "65,800 ETH",
      avgBountyValue: "2,990 ETH",
      category: "NFTs"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Trophy className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200";
      case 3:
        return "bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Leaderboard</h1>
          <p className="text-gray-600">Top contributors and organizations in the TaskFlow ecosystem</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">$2.4M</p>
              <p className="text-sm text-gray-600">Total Rewards Distributed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-gray-600">Active Contributors</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">892</p>
              <p className="text-sm text-gray-600">Completed Bounties</p>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="contributors" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
            <TabsTrigger value="organizations">Top Organizations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="contributors" className="space-y-4">
            {topContributors.map((contributor) => (
              <Card key={contributor.rank} className={`transition-all hover:shadow-md ${getRankBg(contributor.rank)}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        {getRankIcon(contributor.rank)}
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            {contributor.username.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg">{contributor.username}</h3>
                          {contributor.trending && (
                            <Badge className="bg-green-100 text-green-800">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{contributor.reputation}</span>
                          </div>
                          <span>{contributor.completedBounties} bounties</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {contributor.categories.map((category, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">{contributor.totalEarned}</p>
                      <p className="text-sm text-gray-500">Total Earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="organizations" className="space-y-4">
            {topOrganizations.map((org) => (
              <Card key={org.rank} className={`transition-all hover:shadow-md ${getRankBg(org.rank)}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-3">
                        {getRankIcon(org.rank)}
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {org.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{org.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{org.totalBounties} bounties</span>
                          <span>Avg: {org.avgBountyValue}</span>
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {org.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">{org.totalPaid}</p>
                      <p className="text-sm text-gray-500">Total Distributed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;
