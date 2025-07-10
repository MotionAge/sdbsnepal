"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Plus, Edit, Trash2, Eye, Target, MapPin, Calendar } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "Temple Restoration Project",
    description: "Help us restore the ancient Pashupatinath Temple complex",
    goal: 100000,
    raised: 65000,
    location: "Kathmandu, Nepal",
    deadline: "2024-12-31",
    category: "Heritage",
    status: "Active",
    donors: 234,
  },
  {
    id: 2,
    title: "Rural Education Initiative",
    description: "Providing quality education to children in remote villages",
    goal: 50000,
    raised: 32000,
    location: "Gorkha District",
    deadline: "2024-10-15",
    category: "Education",
    status: "Active",
    donors: 156,
  },
  {
    id: 3,
    title: "Healthcare for All",
    description: "Mobile healthcare units for underserved communities",
    goal: 75000,
    raised: 28000,
    location: "Multiple Districts",
    deadline: "2024-11-30",
    category: "Healthcare",
    status: "Active",
    donors: 89,
  },
]

const categories = ["Heritage", "Education", "Healthcare", "Emergency", "Empowerment", "Infrastructure"]

export function AdminCampaignManagement() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)
  const { toast } = useToast()

  const handleCreateCampaign = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle campaign creation
    toast({
      title: "Campaign created",
      description: "Your campaign has been created successfully.",
    })
    setIsCreateDialogOpen(false)
  }

  const handleEditCampaign = (campaign: any) => {
    setSelectedCampaign(campaign)
    setIsEditDialogOpen(true)
  }

  const handleDeleteCampaign = async (campaignId: number) => {
    // Handle campaign deletion
    toast({
      title: "Campaign deleted",
      description: "The campaign has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Campaign Management</h2>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateCampaign} className="space-y-4">
              <div>
                <Label htmlFor="title">Campaign Title</Label>
                <Input id="title" placeholder="Enter campaign title" required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your campaign" rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="goal">Funding Goal ($)</Label>
                  <Input id="goal" type="number" placeholder="50000" required />
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Campaign location" />
                </div>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Create Campaign
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => {
          const progressPercentage = (campaign.raised / campaign.goal) * 100
          return (
            <Card key={campaign.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                  <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>{campaign.status}</Badge>
                </div>
                <Badge variant="outline" className="w-fit">
                  {campaign.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {campaign.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Target className="h-4 w-4 mr-2" />
                    {campaign.donors} donors
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{progressPercentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Raised: ${campaign.raised.toLocaleString()}</span>
                    <span>Goal: ${campaign.goal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => handleEditCampaign(campaign)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDeleteCampaign(campaign.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
