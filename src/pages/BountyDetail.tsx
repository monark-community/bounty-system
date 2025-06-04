
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, DollarSign, Users, Clock, FileText, Upload, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const BountyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [submission, setSubmission] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock bounty data - in real app, fetch based on ID
  const bounty = {
    id: 1,
    title: "Smart Contract Security Audit",
    description: "Review and audit our DeFi protocol smart contracts for vulnerabilities and potential exploits. The audit should cover common security issues including reentrancy, overflow/underflow, access control, and gas optimization. Must provide detailed report with recommendations and severity ratings.",
    requirements: `
• Experience with Solidity smart contract auditing
• Knowledge of common security vulnerabilities (OWASP Top 10)
• Proficiency with security analysis tools (Slither, Mythril, etc.)
• Ability to provide detailed written reports
• Previous audit experience preferred`,
    reward: "2,500 USDC",
    deadline: "2024-01-15",
    category: "Security",
    skills: ["Solidity", "Security", "DeFi", "Auditing"],
    difficulty: "Expert",
    organization: "DeFi Protocol DAO",
    createdDate: "2023-12-01",
    submissions: 3,
    status: "Active"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submission.trim()) {
      toast({
        title: "Please provide your submission details",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Submission Successful!",
        description: "Your submission has been sent to the bounty creator for review."
      });
      setSubmission("");
      setIsSubmitting(false);
    }, 1500);
  };

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <Link to="/bounties" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Bounties
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bounty Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getCategoryColor(bounty.category)}>
                    {bounty.category}
                  </Badge>
                  <Badge className={getDifficultyColor(bounty.difficulty)}>
                    {bounty.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {bounty.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{bounty.title}</CardTitle>
                <CardDescription className="text-lg">{bounty.organization}</CardDescription>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{bounty.description}</p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements & Acceptance Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
                  {bounty.requirements}
                </pre>
              </CardContent>
            </Card>

            {/* Submit Work */}
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Work</CardTitle>
                <CardDescription>
                  Provide details about your solution and any supporting materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="submission">Submission Details</Label>
                    <Textarea
                      id="submission"
                      placeholder="Describe your approach, methodology, and deliverables. Include links to repositories, documents, or other relevant materials..."
                      rows={6}
                      value={submission}
                      onChange={(e) => setSubmission(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>File Attachments</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-1">Drag and drop files here, or click to browse</p>
                      <p className="text-sm text-gray-500">Support for documents, images, and code files</p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Work"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Bounty Info */}
            <Card>
              <CardHeader>
                <CardTitle>Bounty Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Reward</span>
                  <div className="flex items-center space-x-1 text-green-600 font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>{bounty.reward}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Deadline</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{new Date(bounty.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Submissions</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{bounty.submissions}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Created</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{new Date(bounty.createdDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Required Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {bounty.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Organization Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {bounty.organization}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  A leading DeFi protocol focused on building secure and innovative financial products for the decentralized economy.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Bounties</span>
                    <span>12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed</span>
                    <span>8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span>95%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyDetail;
