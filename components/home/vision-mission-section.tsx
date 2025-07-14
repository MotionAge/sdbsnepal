import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Shield, Lightbulb } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-orange-500" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a society rooted in Sanatan Dharma values where cultural heritage is preserved, spiritual
                wisdom flourishes, and every individual receives care and support regardless of their background. We
                envision a world where ancient wisdom guides modern solutions for humanitarian challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To serve humanity through cultural preservation, education, and welfare programs. We are committed to
                supporting orphans, elderly care, promoting Sanskrit literature, conducting research on Sanatan Dharma,
                and building sustainable communities that honor our heritage while embracing progress.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Compassion and service to all beings</li>
                <li>• Preservation of cultural heritage</li>
                <li>• Transparency in all operations</li>
                <li>• Inclusive community building</li>
                <li>• Sustainable development practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Community-driven initiatives</li>
                <li>• Evidence-based program development</li>
                <li>• Collaborative partnerships</li>
                <li>• Continuous learning and adaptation</li>
                <li>• Holistic care and support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
