import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Home } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Humanitarian Service",
      description: "Supporting orphans, elderly care, and community welfare through dedicated service and compassion.",
    },
    {
      icon: BookOpen,
      title: "Cultural Preservation",
      description:
        "Preserving and promoting Sanatan Dharma traditions, scriptures, and ancient wisdom for future generations.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a strong network of members and volunteers working together for social betterment.",
    },
    {
      icon: Home,
      title: "Care Facilities",
      description: "Operating orphanages, old age homes, and gurukulas to provide shelter and education.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About SDB Nepal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Established in 2081/07/26 B.S., Sanatan Dharma Bigyan Samaj is a registered non-profit organization
            dedicated to preserving cultural heritage while serving humanity through various welfare programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
