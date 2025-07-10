import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Users, BookOpen, Award, Target, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Impartiality",
    description:
      "We serve with love and empathy, maintaining non-discrimination and treating every individual with dignity.",
  },
  {
    icon: BookOpen,
    title: "Scientific Approach",
    description: "Our research and teachings are guided by scientific methodology applied to eternal wisdom systems.",
  },
  {
    icon: Users,
    title: "Community Unity",
    description: "We believe in bringing communities together for collective growth and sustainable well-being.",
  },
  {
    icon: Award,
    title: "Ethical Governance",
    description:
      "We maintain the highest standards of transparency, compliance, and ethical practices in all our work.",
  },
]

const milestones = [
  {
    year: "2081 B.S.",
    event: "Organization established and registered with Chief District Officer's Office, Kathmandu",
  },
  { year: "2081 B.S.", event: "Launched first Geeta Saptaha and storytelling series programs" },
  { year: "2081 B.S.", event: "Initiated translation projects for ancient texts into Nepali and English" },
  { year: "2081 B.S.", event: "Established social media presence across multiple platforms" },
  { year: "2081 B.S.", event: "Began planning for Sanskrit Gurukul and Gaushala pilot projects" },
  { year: "Future", event: "Establishing Sanatan Science Research Institute for advanced studies" },
]

const kpis = [
  "Awareness events conducted annually",
  "Scriptures translated and published",
  "Beneficiaries supported (elderly, orphans, students)",
  "Digital media engagement rates",
  "Transparency and compliance audit scores",
  "Local and global collaborations established",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Sanatan Dharma Bigyan Samaj</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A registered non-governmental, non-political, and non-profit organization committed to preserving and
              promoting eternal knowledge systems from scriptures like the Vedas, Upanishads, Puranas, Bhagavad Geeta,
              and Buddhist Tripiṭaka.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-sm text-gray-600">
                <strong>Registration No:</strong> 111 |<strong> Established:</strong> 2081/07/26 B.S. |
                <strong> Registered at:</strong> Chief District Officer's Office, Kathmandu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To research, teach, translate, and apply spiritual-scientific knowledge derived from ancient eternal
                traditions and scriptures through education, community service, media communication, and institutional
                development—while upholding values of impartiality, non-discrimination, sustainability, and ethical
                governance.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a globally respected institution dedicated to the scientific understanding, preservation, and
                promotion of eternal wisdom systems—rooted in the Vedas, Puranas, Upanishads, Geeta, Tripiṭaka, and
                similar scriptures—for the sustainable well-being of society, culture, and nature.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every aspect of our work and define who we are as an organization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our establishment to our future goals, here are the key milestones in our journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-lg font-bold text-orange-600">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full mt-2 mr-8"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Performance Indicators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We measure our success through these key performance indicators to ensure transparency and accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {kpis.map((kpi, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">{kpi}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Sacred Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of our journey to preserve eternal wisdom through scientific understanding. Your support helps us
            continue our research and community service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <Link href="/donate">Support Our Research</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              asChild
            >
              <Link href="/volunteer">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
