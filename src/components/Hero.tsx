
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Trustless Bounty
            <br />
            Management Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Connect DAOs, open-source projects, and Web3 communities with talented contributors through automated, blockchain-secured bounties
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/bounties">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 flex items-center space-x-2 px-8 py-3">
                <span>Explore Bounties</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/create-bounty">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white px-8 py-3"
              >
                Create Your First Bounty
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trustless Payments</h3>
            <p className="text-blue-100">Smart contracts ensure automatic payouts upon approval</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Rewards</h3>
            <p className="text-blue-100">Get paid immediately when your work is approved</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-blue-100">Built for DAOs and decentralized communities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
