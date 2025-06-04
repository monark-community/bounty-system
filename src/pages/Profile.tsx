
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, DollarSign, Star, TrendingUp, User, Wallet, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const profileData = {
    username: "alex_dev",
    walletAddress: "0x742...a8d2",
    reputation: 4.8,
    totalEarned: "12,450 USDC",
    completedBounties: 15,
    activeSubmissions: 3,
    joinDate: "March 2023",
    skills: ["React", "Solidity", "TypeScript", "Web3", "Security", "DeFi"],
    achievements: [
      { name: "First Bounty", description: "Completed your first bounty", earned: true },
      { name: "Security Expert", description: "Completed 5 security audits", earned: true },
      { name: "Fast Responder", description: "Submitted within 24 hours", earned: true },
      { name: "Community Favorite", description: "Received 10+ positive reviews", earned: false },
    ]
  };

  const recentBounties = [
    {
      id: 1,
      title: "Smart Contract Security Audit",
      organization: "DeFi Protocol DAO",
      reward: "2,500 USDC",
      status: "Completed",
      completedDate: "2024-01-10",
      rating: 5
    },
    {
      id: 2,
      title: "Frontend Dashboard Development",
      organization: "Governance Labs",
      reward: "1,800 DAI",
      status: "In Review",
      submittedDate: "2024-01-08"
    },
    {
      id: 3,
      title: "API Documentation",
      organization: "Protocol Foundation",
      reward: "800 USDC",
      status: "Completed",
      completedDate: "2024-01-05",
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{profileData.username}</h1>
                    <p className="text-gray-600 flex items-center space-x-1">
                      <Wallet className="w-4 h-4" />
                      <span>{walletConnected ? profileData.walletAddress : "Connect Wallet"}</span>
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{profileData.reputation}</span>
                      <span className="text-sm text-gray-500">({profileData.completedBounties} reviews)</span>
                    </div>
                  </div>
                </div>
                
                {!walletConnected && (
                  <Button 
                    onClick={() => setWalletConnected(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Connect Wallet
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{profileData.totalEarned}</p>
                  <p className="text-sm text-gray-600">Total Earned</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{profileData.completedBounties}</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{profileData.activeSubmissions}</p>
                  <p className="text-sm text-gray-600">In Review</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{profileData.reputation}</p>
                  <p className="text-sm text-gray-600">Reputation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bounties" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bounties">Recent Bounties</TabsTrigger>
            <TabsTrigger value="skills">Skills & Achievements</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bounties" className="space-y-4">
            {recentBounties.map((bounty) => (
              <Card key={bounty.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{bounty.title}</h3>
                      <p className="text-gray-600">{bounty.organization}</p>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(bounty.status)}>
                          {bounty.status}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {bounty.status === "Completed" 
                            ? `Completed ${new Date(bounty.completedDate).toLocaleDateString()}`
                            : `Submitted ${new Date(bounty.submittedDate).toLocaleDateString()}`
                          }
                        </span>
                        {bounty.rating && (
                          <div className="flex items-center space-x-1">
                            {[...Array(bounty.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{bounty.reward}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Your expertise areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Milestones you've reached</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profileData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-1 rounded-full ${achievement.earned ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <Award className={`w-4 h-4 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div>
                        <p className={`font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-400'}`}>
                          {achievement.name}
                        </p>
                        <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="stats" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-semibold">93%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold">{profileData.reputation}/5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold">< 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-semibold">{profileData.joinDate}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Development</span>
                    <span className="font-semibold">8 bounties</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Security</span>
                    <span className="font-semibold">5 bounties</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Documentation</span>
                    <span className="font-semibold">2 bounties</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
