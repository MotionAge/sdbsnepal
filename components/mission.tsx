import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Globe, Search } from "lucide-react"

const missions = [
  {
    icon: Search,
    title: "Scientific Research",
    description:
      "Researching and applying spiritual-scientific knowledge from ancient eternal traditions and scriptures.",
  },
  {
    icon: BookOpen,
    title: "Translation & Education",
    description: "Translating ancient texts into Nepali and English while establishing Sanskrit Gurukuls.",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Supporting elderly, orphans, and students through humanitarian and educational programs.",
  },
  {
    icon: Globe,
    title: "Global Outreach",
    description: "Promoting scientific value of rituals worldwide through media communication and collaboration.",
  },
]

const objectives = [
  "Conduct Geeta Saptahas and storytelling series",
  "Launch Sanskrit Gurukuls and pilot Gaushalas",
  "Establish Sanatan Science Research Institute",
  "Digitize ancient scriptures and oral knowledge",
  "Create content across social media platforms",
  "Expand humanitarian and educational programs",
]

export function Mission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Vision Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a globally respected institution dedicated to the scientific understanding, preservation, and
                promotion of eternal wisdom systems—rooted in the Vedas, Puranas, Upanishads, Geeta, Tripiṭaka, and
                similar scriptures—for the sustainable well-being of society, culture, and nature.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To research, teach, translate, and apply spiritual-scientific knowledge derived from ancient eternal
                traditions and scriptures through education, community service, media communication, and institutional
                development—while upholding values of impartiality, non-discrimination, sustainability, and ethical
                governance.
              </p>
            </div>
          </div>
        </div>

        {/* Core Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <mission.icon className="h-12 w-12 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{mission.title}</h4>
                  <p className="text-gray-600">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Key Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
