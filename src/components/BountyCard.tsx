
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BountyCardProps {
  bounty: {
    id: number;
    title: string;
    description: string;
    reward: string;
    deadline: string;
    category: string;
    skills: string[];
    difficulty: string;
    organization: string;
  };
}

const BountyCard = ({ bounty }: BountyCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Development':
        return 'bg-blue-100 text-blue-800';
      case 'Security':
        return 'bg-purple-100 text-purple-800';
      case 'Documentation':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge className={getCategoryColor(bounty.category)}>
            {bounty.category}
          </Badge>
          <Badge className={getDifficultyColor(bounty.difficulty)}>
            {bounty.difficulty}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
          {bounty.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {bounty.organization}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-700 leading-relaxed line-clamp-3">
          {bounty.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-600">{bounty.reward}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(bounty.deadline).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {bounty.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {bounty.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{bounty.skills.length - 3} more
            </Badge>
          )}
        </div>
        
        <Link to={`/bounty/${bounty.id}`}>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-4">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BountyCard;
