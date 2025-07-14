import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Home, GraduationCap, Heart, Building } from "lucide-react"
import Link from "next/link"

async function getProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/projects`, {
      cache: "no-store",
    })
    if (!response.ok) return []
    const projects = await response.json()
    return projects.slice(0, 6) // Show only first 6 projects
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

const categoryIcons: { [key: string]: any } = {
  infrastructure: Building,
  technology: BookOpen,
  healthcare: Heart,
  "cultural-preservation": BookOpen,
  "humanitarian-aid": Users,
  education: GraduationCap,
  "community-development": Home,
}

const statusColors: { [key: string]: string } = {
  planning: "text-blue-500",
  ongoing: "text-yellow-500",
  completed: "text-green-500",
  paused: "text-gray-500",
}

export async function ProjectsSection() {
  const projects = await getProjects()

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our various initiatives aimed at preserving culture, serving humanity, and building stronger
              communities.
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No projects available at the moment.</p>
            <Button asChild size="lg">
              <Link href="/our-work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our various initiatives aimed at preserving culture, serving humanity, and building stronger
            communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any, index: number) => {
            const IconComponent = categoryIcons[project.category] || Building
            const statusColor = statusColors[project.status] || "text-gray-500"

            return (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${statusColor}`} />
                    <div>
                      <div className="text-lg">{project.title}</div>
                      <div className={`text-xs font-normal ${statusColor} capitalize`}>{project.status}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  {project.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={`/projects/${project.id}`}>Learn More</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="bg-transparent">
                      <Link href="/donate">
                        <Heart className="mr-2 h-4 w-4" />
                        Donate
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/our-work">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
