import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Calendar, MapPin, Target } from "lucide-react"

const campaigns = [
  {
    id: 1,
    title: "Temple Restoration Project",
    description: "Help us restore the ancient Pashupatinath Temple complex and preserve our spiritual heritage.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 100000,
    raised: 65000,
    currency: "USD",
    location: "Kathmandu, Nepal",
    deadline: "2024-12-31",
    category: "Heritage",
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
  },
  {
    id: 3,
    title: "Healthcare for All",
    description: "Mobile healthcare units bringing medical care to underserved communities.",
    image: "/placeholder.svg?height=200&width=400",
    goal: 75000,
    raised: 28000,
    currency: "USD",
    location: "Multiple Districts",
    deadline: "2024-11-30",
    category: "Healthcare",
  },
]

export function OngoingCampaigns() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Active Campaigns</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support our ongoing initiatives that are making a real difference in communities across Nepal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
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
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                      {campaign.category}
                    </span>
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
                      Goal: ${campaign.goal.toLocaleString()} {campaign.currency}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Raised: ${campaign.raised.toLocaleString()}</span>
                      <span>{progressPercentage.toFixed(1)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
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
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/campaigns">View All Campaigns</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
