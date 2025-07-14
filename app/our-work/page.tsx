import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Building,
  BookOpen,
  Heart,
  GraduationCap,
  Home,
  Clock,
  CheckCircle,
  AlertCircle,
  PlayCircle,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Work & Projects - SDB Nepal",
  description:
    "Explore our comprehensive projects and initiatives focused on cultural preservation, community development, and humanitarian aid.",
}

async function getProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/projects`, {
      cache: "no-store",
    })
    if (!response.ok) return []
    return await response.json()
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

const statusIcons = {
  planning: Clock,
  ongoing: PlayCircle,
  completed: CheckCircle,
  paused: AlertCircle,
}

const statusColors = {
  planning: "bg-blue-500",
  ongoing: "bg-yellow-500",
  completed: "bg-green-500",
  paused: "bg-gray-500",
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

export default async function OurWorkPage() {
  const projects = await getProjects()

  const projectCategories = Object.keys(categoryLabels).map((key) => ({
    name: categoryLabels[key],
    value: key,
    count: projects.filter((p: any) => p.category === key).length,
    icon: categoryIcons[key],
  }))

  const completedProjects = projects.filter((p: any) => p.status === "completed")
  const ongoingProjects = projects.filter((p: any) => p.status === "ongoing")
  const totalBeneficiaries = projects.reduce((sum: number, p: any) => sum + (p.beneficiaries || 0), 0)
  const totalBudget = projects.reduce((sum: number, p: any) => sum + (p.budget || 0), 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work & Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive initiatives focused on cultural preservation, community development, and
              humanitarian aid across Nepal.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{completedProjects.length}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{totalBeneficiaries.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">NPR {(totalBudget / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {projectCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {projects.length > 0 ? (
                  <div className="space-y-6">
                    {projects.map((project: any) => {
                      const IconComponent = categoryIcons[project.category] || Building
                      const StatusIcon = statusIcons[project.status as keyof typeof statusIcons] || Clock

                      return (
                        <Card key={project.id} className="hover:shadow-lg transition-shadow">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-64 aspect-video md:aspect-square overflow-hidden">
                              <img
                                src={project.image_url || "/placeholder.svg?height=250&width=300"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary">
                                    <IconComponent className="mr-1 h-3 w-3" />
                                    {categoryLabels[project.category] || project.category}
                                  </Badge>
                                  <Badge
                                    variant="outline"
                                    className={`${statusColors[project.status as keyof typeof statusColors]} text-white border-0`}
                                  >
                                    <StatusIcon className="mr-1 h-3 w-3" />
                                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                  </Badge>
                                </div>
                                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                                {/* Project Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-muted-foreground">{project.location || "TBD"}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-muted-foreground">
                                      {project.beneficiaries?.toLocaleString() || 0} people
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-muted-foreground">
                                      NPR {(project.budget || 0).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-muted-foreground">
                                      {project.start_date ? new Date(project.start_date).getFullYear() : "TBD"}
                                    </span>
                                  </div>
                                </div>

                                {/* Progress Bar */}
                                {project.progress !== undefined && (
                                  <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                      <span>Progress</span>
                                      <span>{project.progress}%</span>
                                    </div>
                                    <Progress value={project.progress} className="h-2" />
                                  </div>
                                )}

                                <div className="flex gap-2">
                                  <Button asChild variant="outline" size="sm">
                                    <Link href={`/projects/${project.id}`}>Learn More</Link>
                                  </Button>
                                  <Button asChild variant="outline" size="sm" className="bg-transparent">
                                    <Link href="/donate">
                                      <Heart className="mr-1 h-3 w-3" />
                                      Support
                                    </Link>
                                  </Button>
                                </div>
                              </CardContent>
                            </div>
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No projects found.</p>
                    <p className="text-sm text-muted-foreground">Check back later for updates on our initiatives!</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {projectCategories.map((category) => (
                        <div key={category.value} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <category.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <Badge variant="outline">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle>Impact Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-2xl font-bold text-green-600">{completedProjects.length}</div>
                        <div className="text-xs text-muted-foreground">Completed Projects</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-2xl font-bold text-blue-600">{ongoingProjects.length}</div>
                        <div className="text-xs text-muted-foreground">Ongoing Projects</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-2xl font-bold text-orange-600">{totalBeneficiaries.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Lives Impacted</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support CTA */}
                <Card>
                  <CardHeader>
                    <CardTitle>Support Our Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Help us continue our mission of cultural preservation and community development.
                    </p>
                    <div className="space-y-2">
                      <Button asChild className="w-full">
                        <Link href="/donate">
                          <Heart className="mr-2 h-4 w-4" />
                          Make a Donation
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/membership">
                          <Users className="mr-2 h-4 w-4" />
                          Become a Member
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
