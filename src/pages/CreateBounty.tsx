
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Plus, X, FileText, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const CreateBounty = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    category: "",
    difficulty: "",
    reward: "",
    token: "USDC",
    deadline: "",
    skills: [] as string[],
  });
  const [currentSkill, setCurrentSkill] = useState("");

  const categories = ["Development", "Security", "Documentation", "Marketing", "Design", "Research"];
  const difficulties = ["Beginner", "Intermediate", "Expert"];
  const tokens = ["USDC", "DAI", "ETH", "MATIC", "WBTC"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.category || !formData.difficulty || !formData.reward || !formData.deadline) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would integrate with your smart contract
    console.log("Creating bounty:", formData);
    
    toast({
      title: "Bounty Created Successfully!",
      description: "Your bounty has been published and is now visible to contributors."
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      requirements: "",
      category: "",
      difficulty: "",
      reward: "",
      token: "USDC",
      deadline: "",
      skills: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Bounty</h1>
          <p className="text-gray-600">Post a task and attract talented contributors from the Web3 community</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Bounty Details</CardTitle>
                <CardDescription>Provide clear and detailed information about your task</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Smart Contract Security Audit"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the task, objectives, and expected deliverables..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                    />
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Requirements & Acceptance Criteria</Label>
                    <Textarea
                      id="requirements"
                      placeholder="List specific requirements and criteria for acceptance..."
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => handleInputChange("requirements", e.target.value)}
                    />
                  </div>

                  {/* Category and Difficulty */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Difficulty Level *</Label>
                      <Select value={formData.difficulty} onValueChange={(value) => handleInputChange("difficulty", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          {difficulties.map((difficulty) => (
                            <SelectItem key={difficulty} value={difficulty}>
                              {difficulty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Reward and Token */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reward">Reward Amount *</Label>
                      <Input
                        id="reward"
                        type="number"
                        placeholder="1000"
                        value={formData.reward}
                        onChange={(e) => handleInputChange("reward", e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Token *</Label>
                      <Select value={formData.token} onValueChange={(value) => handleInputChange("token", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {tokens.map((token) => (
                            <SelectItem key={token} value={token}>
                              {token}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Submission Deadline *</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => handleInputChange("deadline", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <Label>Required Skills</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a skill"
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="hover:text-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Create Bounty
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Preview Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Preview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.title && (
                  <div>
                    <h3 className="font-semibold text-lg">{formData.title}</h3>
                    {formData.category && formData.difficulty && (
                      <div className="flex gap-2 mt-2">
                        <Badge>{formData.category}</Badge>
                        <Badge variant="outline">{formData.difficulty}</Badge>
                      </div>
                    )}
                  </div>
                )}
                
                {formData.reward && formData.token && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">{formData.reward} {formData.token}</span>
                  </div>
                )}
                
                {formData.deadline && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(formData.deadline).toLocaleDateString()}</span>
                  </div>
                )}
                
                {formData.skills.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {formData.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Next Steps</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Smart contract will lock your reward tokens</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Bounty becomes visible to contributors</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Review submissions and approve winners</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Automatic payout upon approval</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBounty;
