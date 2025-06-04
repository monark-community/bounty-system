
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">TaskFlow</h3>
            <p className="text-gray-400 text-sm">
              The leading trustless bounty management platform for DAOs and Web3 communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <div className="space-y-2 text-sm">
              <Link to="/bounties" className="block text-gray-400 hover:text-white transition-colors">
                Browse Bounties
              </Link>
              <Link to="/create-bounty" className="block text-gray-400 hover:text-white transition-colors">
                Create Bounty
              </Link>
              <Link to="/leaderboard" className="block text-gray-400 hover:text-white transition-colors">
                Leaderboard
              </Link>
              <Link to="/profile" className="block text-gray-400 hover:text-white transition-colors">
                Profile
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Smart Contracts
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 TaskFlow. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
