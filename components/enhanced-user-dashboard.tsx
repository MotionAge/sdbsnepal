"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/use-auth"
import { Heart, DollarSign, Download, Eye, Gift, Settings, Bell, CreditCard, Award } from "lucide-react"
import Link from "next/link"

// Mock user donation data
const userDonations = [
  {
    id: "1",
    amount: 500,
    currency: "USD",
    campaign: "Temple Restoration Project",
    date: "2024-01-15",
    status: "Completed",
    method: "Stripe",
    receipt: "receipt_001.pdf",
    impact: "Helped restore 2 temple pillars",
  },
  {
    id: "2",
    amount: 250,
    currency: "USD",
    campaign: "Rural Education Initiative",
    date: "2024-01-10",
    status: "Completed",
    method: "PayPal",
    receipt: "receipt_002.pdf",
    impact: "Provided books for 10 children",
  },
  {
    id: "3",
    amount: 100,
    currency: "USD",
    campaign: "Healthcare for All",
    date: "2024-01-05",
    status: "Completed",
    method: "Stripe",
    receipt: "receipt_003.pdf",
    impact: "Funded 5 medical checkups",
  },
]

const supportedCampaigns = [
  {
    id: 1,
    title: "Temple Restoration Project",
    totalDonated: 500,
    goal: 100000,
    raised: 65000,
    lastDonation: "2024-01-15",
    status: "Active",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    title: "Rural Education Initiative",
    totalDonated: 250,
    goal: 50000,
    raised: 32000,
    lastDonation: "2024-01-10",
    status: "Active",
    image: "/placeholder.svg?height=100&width=150",
  },
]

const achievements = [
  {
    title: "First Donation",
    description: "Made your first donation to support our cause",
    date: "2024-01-05",
    icon: Heart,
  },
  {
    title: "Generous Supporter",
    description: "Donated over $500 in total",
    date: "2024-01-15",
    icon: Award,
  },
  {
    title: "Campaign Champion",
    description: "Supported multiple campaigns",
    date: "2024-01-10",
    icon: Gift,
  },
]

export function EnhancedUserDashboard() {
  const { user } = useAuth()
  const [selectedTab, setSelectedTab] = useState("overview")

  const totalDonated = userDonations.reduce((sum, donation) => sum + donation.amount, 0)
  const totalDonations = userDonations.length
  const campaignsSupported = supportedCampaigns.length
  const impactScore = Math.floor(totalDonated / 10) // Simple impact calculation

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" alt={user?.name} />
                <AvatarFallback className="bg-orange-100 text-orange-600 text-xl">
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
                <p className="text-gray-600">Member since {new Date().getFullYear()}</p>
                <Badge variant="outline" className="mt-1">
                  <Heart className="h-3 w-3 mr-1" />
                  Valued Supporter
                </Badge>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
              <DollarSign className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalDonated.toLocaleString()}</div>
              <p className="text-xs opacity-80">Lifetime contributions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Donations Made</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalDonations}</div>
              <p className="text-xs text-muted-foreground">Total transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaigns Supported</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{campaignsSupported}</div>
              <p className="text-xs text-muted-foreground">Active campaigns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{impactScore}</div>
              <p className="text-xs text-muted-foreground">Lives touched</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donations">My Donations</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userDonations.slice(0, 3).map((donation) => (
                      <div key={donation.id} className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{donation.campaign}</p>
                          <p className="text-xs text-gray-500">
                            ${donation.amount} • {new Date(donation.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {donation.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Impact Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Lives Impacted</span>
                      <span className="text-2xl font-bold text-orange-600">{impactScore}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Communities Served</span>
                      <span className="text-2xl font-bold text-orange-600">{campaignsSupported}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Projects Supported</span>
                      <span className="text-2xl font-bold text-orange-600">{campaignsSupported}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                    <Link href="/donate">
                      <Heart className="h-4 w-4 mr-2" />
                      Make a Donation
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/campaigns">
                      <Eye className="h-4 w-4 mr-2" />
                      Browse Campaigns
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Tax Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Donation History</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Impact</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userDonations.map((donation) => (
                      <TableRow key={donation.id}>
                        <TableCell className="font-medium">{donation.campaign}</TableCell>
                        <TableCell>
                          ${donation.amount} {donation.currency}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <CreditCard className="h-4 w-4 mr-2" />
                            {donation.method}
                          </div>
                        </TableCell>
                        <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                        <TableCell className="text-sm text-gray-600">{donation.impact}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <h2 className="text-2xl font-bold">Campaigns You Support</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportedCampaigns.map((campaign) => {
                const progressPercentage = (campaign.raised / campaign.goal) * 100
                return (
                  <Card key={campaign.id} className="overflow-hidden">
                    <div className="flex">
                      <img
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        className="w-32 h-24 object-cover"
                      />
                      <div className="flex-1 p-4">
                        <h3 className="font-semibold mb-2">{campaign.title}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{progressPercentage.toFixed(1)}%</span>
                          </div>
                          <Progress value={progressPercentage} className="h-2" />
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Your: ${campaign.totalDonated}</span>
                            <span>Goal: ${campaign.goal.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700" asChild>
                          <Link href={`/donate?campaign=${campaign.id}`}>Donate Again</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/campaigns/${campaign.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-bold">Your Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                        <achievement.icon className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                    <p className="text-xs text-gray-500">Earned on {new Date(achievement.date).toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-bold">Profile Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <p className="text-gray-600">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Member Since</label>
                    <p className="text-gray-600">{new Date().getFullYear()}</p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email Notifications</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Newsletter</span>
                    <Badge variant="outline">Subscribed</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Impact Reports</span>
                    <Badge variant="outline">Monthly</Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Manage Preferences
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
