
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TaskFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/bounties" className="text-gray-700 hover:text-gray-900 transition-colors">
              Browse Bounties
            </Link>
            <Link to="/leaderboard" className="text-gray-700 hover:text-gray-900 transition-colors">
              Leaderboard
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">
              How It Works
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/create-bounty">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Create Bounty</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="sm" className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <User className="w-4 h-4" />
                <span>Connect Wallet</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/bounties" className="text-gray-700 hover:text-gray-900 px-2 py-1">
                Browse Bounties
              </Link>
              <Link to="/leaderboard" className="text-gray-700 hover:text-gray-900 px-2 py-1">
                Leaderboard
              </Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 px-2 py-1">
                How It Works
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/create-bounty">
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Create Bounty</span>
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Connect Wallet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
