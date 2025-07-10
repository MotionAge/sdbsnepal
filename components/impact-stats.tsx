import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Heart, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Impacted",
    description: "People directly benefited from our programs",
  },
  {
    icon: Heart,
    value: "$2.5M+",
    label: "Funds Raised",
    description: "Total donations received for various causes",
  },
  {
    icon: TrendingUp,
    value: "50+",
    label: "Active Projects",
    description: "Ongoing initiatives across Nepal",
  },
  {
    icon: Award,
    value: "25+",
    label: "Years of Service",
    description: "Dedicated service to communities",
  },
]

export function ImpactStats() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the tangible difference we've made in communities across Nepal through the generous support of donors
            like you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
