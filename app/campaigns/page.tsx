import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Calendar, MapPin, Target, Search, Filter } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "Temple Restoration Project",
    description:
      "Help us restore the ancient Pashupatinath Temple complex and preserve our spiritual heritage for future generations.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 100000,
    raised: 65000,
    currency: "USD",
    location: "Kathmandu, Nepal",
    deadline: "2024-12-31",
    category: "Heritage",
    status: "Active",
    donors: 234,
    featured: true,
  },
  {
    id: 2,
    title: "Rural Education Initiative",
    description: "Providing quality education and dharmic values to children in remote villages of Nepal.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 50000,
    raised: 32000,
    currency: "USD",
    location: "Gorkha District",
    deadline: "2024-10-15",
    category: "Education",
    status: "Active",
    donors: 156,
    featured: false,
  },
  {
    id: 3,
    title: "Healthcare for All",
    description: "Mobile healthcare units bringing medical care to underserved communities across Nepal.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 75000,
    raised: 28000,
    currency: "USD",
    location: "Multiple Districts",
    deadline: "2024-11-30",
    category: "Healthcare",
    status: "Active",
    donors: 89,
    featured: false,
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    description: "Emergency relief supplies and support for communities affected by natural disasters.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 30000,
    raised: 18500,
    currency: "USD",
    location: "Nationwide",
    deadline: "2024-09-30",
    category: "Emergency",
    status: "Active",
    donors: 67,
    featured: false,
  },
  {
    id: 5,
    title: "Women Empowerment Program",
    description: "Skills training and microfinance support for women in rural communities.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 40000,
    raised: 22000,
    currency: "USD",
    location: "Chitwan District",
    deadline: "2024-08-15",
    category: "Empowerment",
    status: "Active",
    donors: 98,
    featured: false,
  },
  {
    id: 6,
    title: "Clean Water Initiative",
    description: "Building wells and water purification systems in remote mountain villages.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 60000,
    raised: 45000,
    currency: "USD",
    location: "Himalayan Region",
    deadline: "2024-07-20",
    category: "Infrastructure",
    status: "Active",
    donors: 145,
    featured: true,
  },
]

const categories = ["All", "Heritage", "Education", "Healthcare", "Emergency", "Empowerment", "Infrastructure"]

export default function CampaignsPage() {
  const featuredCampaigns = campaigns.filter((campaign) => campaign.featured)
  const regularCampaigns = campaigns.filter((campaign) => !campaign.featured)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Campaigns</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support our ongoing initiatives that are making a real difference in communities across Nepal.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search campaigns..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-orange-100"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Campaigns */}
        {featuredCampaigns.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Campaigns</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCampaigns.map((campaign) => {
                const progressPercentage = (campaign.raised / campaign.goal) * 100
                return (
                  <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-200">
                      <img
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-orange-100 text-orange-800">Featured</Badge>
                        <Badge variant="outline">{campaign.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{campaign.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{campaign.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {campaign.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Target className="h-4 w-4 mr-2" />
                          {campaign.donors} donors
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Raised: ${campaign.raised.toLocaleString()}</span>
                          <span>{progressPercentage.toFixed(1)}%</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                        <div className="text-sm text-gray-500">
                          Goal: ${campaign.goal.toLocaleString()} {campaign.currency}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-orange-600 hover:bg-orange-700" asChild>
                          <Link href={`/donate?campaign=${campaign.id}`}>Donate Now</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={`/campaigns/${campaign.id}`}>Learn More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* All Campaigns */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCampaigns.map((campaign) => {
              const progressPercentage = (campaign.raised / campaign.goal) * 100
              return (
                <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={campaign.image || "/placeholder.svg"}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{campaign.category}</Badge>
                      <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>{campaign.status}</Badge>
                    </div>
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {campaign.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(campaign.deadline).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>${campaign.raised.toLocaleString()}</span>
                        <span>{progressPercentage.toFixed(1)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="text-sm text-gray-500">Goal: ${campaign.goal.toLocaleString()}</div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700" asChild>
                        <Link href={`/donate?campaign=${campaign.id}`}>Donate</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={`/campaigns/${campaign.id}`}>Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-transparent">
            Load More Campaigns
          </Button>
        </div>
      </div>
    </div>
  )
}
