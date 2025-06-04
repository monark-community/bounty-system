
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus, Users, Zap, Shield, Award, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BountyCard from "@/components/BountyCard";
import Stats from "@/components/Stats";

const Index = () => {
  const featuredBounties = [
    {
      id: 1,
      title: "Smart Contract Security Audit",
      description: "Review and audit our DeFi protocol smart contracts for vulnerabilities",
      reward: "2,500 USDC",
      deadline: "2024-01-15",
      category: "Security",
      skills: ["Solidity", "Security", "DeFi"],
      difficulty: "Expert",
      organization: "DeFi Protocol DAO"
    },
    {
      id: 2,
      title: "Frontend Dashboard Development",
      description: "Build a responsive dashboard for tracking DAO governance metrics",
      reward: "1,800 DAI",
      deadline: "2024-01-20",
      category: "Development",
      skills: ["React", "TypeScript", "Web3"],
      difficulty: "Intermediate",
      organization: "Governance Labs"
    },
    {
      id: 3,
      title: "Technical Documentation",
      description: "Create comprehensive API documentation for our protocol",
      reward: "800 USDC",
      deadline: "2024-01-25",
      category: "Documentation",
      skills: ["Technical Writing", "API Design"],
      difficulty: "Beginner",
      organization: "Protocol Foundation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Featured Bounties Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Bounties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover high-value tasks from leading DAOs and Web3 projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredBounties.map((bounty) => (
              <BountyCard key={bounty.id} bounty={bounty} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/bounties">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View All Bounties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TaskFlow Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and trustless</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Create Bounty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  DAOs and projects post tasks with clear requirements and token rewards locked in smart contracts
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Submit Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Contributors submit their solutions with detailed explanations and supporting materials
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Auto Payout</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Once approved, smart contracts automatically transfer rewards to contributors' wallets
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose TaskFlow?</h2>
            <p className="text-xl text-blue-100">Built for the future of decentralized work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trustless</h3>
              <p className="text-blue-100">Smart contracts ensure automatic, transparent payouts without intermediaries</p>
            </div>
            
            <div className="text-center text-white">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Merit-Based</h3>
              <p className="text-blue-100">Build reputation and unlock higher-value opportunities through quality work</p>
            </div>
            
            <div className="text-center text-white">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant</h3>
              <p className="text-blue-100">Get paid immediately upon approval - no waiting for manual processes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
