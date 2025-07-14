import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  ArrowLeft,
  Share2,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  PlayCircle,
} from "lucide-react"
import Link from "next/link"

async function getProject(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/projects/${slug}`,
      {
        cache: "no-store",
      },
    )
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

async function getRelatedProjects(category: string, currentId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/projects`, {
      cache: "no-store",
    })
    if (!response.ok) return []
    const projects = await response.json()
    return projects.filter((project: any) => project.category === category && project.id !== currentId).slice(0, 3)
  } catch (error) {
    console.error("Error fetching related projects:", error)
    return []
  }
}

// Await params here as it's a Promise in Next 13 dynamic routes
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: "Project Not Found - SDB Nepal",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - SDB Nepal`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image_url ? [project.image_url] : [],
      type: "article",
    },
  }
}

// Also await params here
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = await getRelatedProjects(project.category, project.id)

  const statusColors = {
    planning: "bg-blue-500",
    ongoing: "bg-yellow-500",
    completed: "bg-green-500",
    paused: "bg-gray-500",
  }

  const statusIcons = {
    planning: Clock,
    ongoing: PlayCircle,
    completed: CheckCircle,
    paused: AlertCircle,
  }

  const categoryLabels: { [key: string]: string } = {
    infrastructure: "Infrastructure",
    technology: "Technology",
    healthcare: "Healthcare",
    "cultural-preservation": "Cultural Preservation",
    "humanitarian-aid": "Humanitarian Aid",
    education: "Education",
    "community-development": "Community Development",
  }

  const StatusIcon = statusIcons[project.status as keyof typeof statusIcons] || Clock

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          {project.image_url && (
            <div className="h-96 md:h-[500px] relative overflow-hidden">
              <img
                src={project.image_url || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          <div className="container py-8">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <Link href="/our-work">
                <Button variant="outline" className="mb-6 bg-transparent">
                  <ArrowLeft className="mr-2 h-5 w-5 text-current" />
                  Back to Projects
                </Button>
              </Link>

              {/* Project Header */}
              <div className={`${project.image_url ? "-mt-32 relative z-10" : ""}`}>
                <Card className={`${project.image_url ? "bg-white/95 backdrop-blur-sm" : ""}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{categoryLabels[project.category] || project.category}</Badge>
                      <Badge
                        variant="outline"
                        className={`${statusColors[project.status as keyof typeof statusColors]} text-white border-0 flex items-center`}
                      >
                        <StatusIcon className="mr-1 h-3 w-3" />
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h1>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-2xl font-bold">{project.progress}%</p>
                        <p className="text-sm text-muted-foreground">Progress</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-2xl font-bold">{project.beneficiaries?.toLocaleString() || 0}</p>
                        <p className="text-sm text-muted-foreground">Beneficiaries</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-2xl font-bold">NPR {(project.budget || 0).toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Budget</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-lg font-bold">{project.location}</p>
                        <p className="text-sm text-muted-foreground">Location</p>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Progress Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Overall Progress</span>
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />

                        {project.budget && project.spent_amount && (
                          <>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Budget Utilization</span>
                              <span className="text-sm text-muted-foreground">
                                {Math.round((project.spent_amount / project.budget) * 100)}%
                              </span>
                            </div>
                            <Progress value={(project.spent_amount / project.budget) * 100} className="h-2" />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Spent: NPR {project.spent_amount.toLocaleString()}</span>
                              <span>Budget: NPR {project.budget.toLocaleString()}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Timeline */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Start Date:</span>
                          </div>
                          <span className="text-sm">
                            {project.start_date
                              ? new Date(project.start_date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : "Not specified"}
                          </span>
                        </div>

                        {project.end_date && (
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm font-medium">End Date:</span>
                            </div>
                            <span className="text-sm">
                              {new Date(project.end_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        )}

                        {project.start_date && project.end_date && (
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm font-medium">Duration:</span>
                            </div>
                            <span className="text-sm">
                              {Math.ceil(
                                (new Date(project.end_date).getTime() - new Date(project.start_date).getTime()) /
                                  (1000 * 60 * 60 * 24 * 30),
                              )}{" "}
                              months
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Impact */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Expected Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-2xl font-bold">{project.beneficiaries?.toLocaleString() || 0}</p>
                          <p className="text-sm text-muted-foreground">Direct Beneficiaries</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-lg font-bold">{project.location}</p>
                          <p className="text-sm text-muted-foreground">Project Location</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-6">
                    {/* Project Info */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Category</p>
                          <p className="text-sm">{categoryLabels[project.category] || project.category}</p>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Status</p>
                          <div className="flex items-center gap-2 mt-1">
                            <StatusIcon className="h-4 w-4" />
                            <span className="text-sm capitalize">{project.status}</span>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Location</p>
                          <p className="text-sm">{project.location}</p>
                        </div>
                        {project.budget && (
                          <>
                            <Separator />
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Total Budget</p>
                              <p className="text-sm font-semibold">NPR {project.budget.toLocaleString()}</p>
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>

                    {/* Support This Project */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Support This Project</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Help us make a difference in the community by supporting this project.
                        </p>
                        <Link href="/donate">
                          <Button className="w-full">
                            <DollarSign className="mr-2 h-4 w-4" />
                            Donate Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProjects.map((relatedProject: any) => (
                    <Card key={relatedProject.id} className="hover:shadow-lg transition-shadow">
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img
                          src={relatedProject.image_url || "/placeholder.svg?height=200&width=300"}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {categoryLabels[relatedProject.category] || relatedProject.category}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${statusColors[relatedProject.status as keyof typeof statusColors]} text-white border-0`}
                          >
                            {relatedProject.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2 line-clamp-2">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedProject.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            <Progress value={relatedProject.progress} className="h-1 w-16" />
                            <span>{relatedProject.progress}% complete</span>
                          </div>
                          <Link href={`/projects/${relatedProject.id}`}>
                            <Button variant="ghost" size="sm">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
