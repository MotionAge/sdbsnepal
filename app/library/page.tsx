import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, Eye, BookOpen, ImageIcon, Music, FileText, BarChart3, Vote } from "lucide-react"

export const metadata = {
  title: "Library - SDB Nepal",
  description:
    "Access our comprehensive digital library featuring Sanatan Dharma texts, cultural galleries, audio collections, and organizational documents.",
}

export default function LibraryPage() {
  const galleryItems = [
    {
      title: "Ancient Temple Architecture",
      description: "Collection of photographs showcasing traditional Nepali temple architecture.",
      type: "Image Gallery",
      items: 45,
      lastUpdated: "2024-01-10",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cultural Festivals",
      description: "Visual documentation of various Sanatan Dharma festivals and celebrations.",
      type: "Image Gallery",
      items: 120,
      lastUpdated: "2024-01-08",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Traditional Art Forms",
      description: "Showcase of traditional paintings, sculptures, and handicrafts.",
      type: "Image Gallery",
      items: 78,
      lastUpdated: "2024-01-05",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const publications = [
    {
      title: "Bhagavad Gita Commentary",
      author: "Pandit Rajesh Sharma",
      description: "Modern commentary on the Bhagavad Gita with practical applications.",
      type: "PDF",
      pages: 245,
      language: "Nepali",
      publishDate: "2023-12-15",
      downloads: 1250,
    },
    {
      title: "Vedic Mathematics Simplified",
      author: "Dr. Sita Devi",
      description: "Introduction to Vedic mathematics for modern students.",
      type: "PDF",
      pages: 180,
      language: "English",
      publishDate: "2023-11-20",
      downloads: 890,
    },
    {
      title: "Sanskrit Grammar Basics",
      author: "Research Team",
      description: "Fundamental Sanskrit grammar rules and exercises.",
      type: "PDF",
      pages: 156,
      language: "Sanskrit/Nepali",
      publishDate: "2023-10-30",
      downloads: 567,
    },
  ]

  // const audioCollection = [
  //   {
  //     title: "Vishnu Sahasranama",
  //     description: "Complete recitation of the thousand names of Lord Vishnu.",
  //     duration: "45:30",
  //     type: "Bhajan",
  //     artist: "SDB Nepal Choir",
  //     language: "Sanskrit",
  //     plays: 2340,
  //   },
  //   {
  //     title: "Hanuman Chalisa",
  //     description: "Traditional rendition of the Hanuman Chalisa.",
  //     duration: "8:15",
  //     type: "Bhajan",
  //     artist: "Pandit Rajesh Sharma",
  //     language: "Hindi",
  //     plays: 3450,
  //   },
  //   {
  //     title: "Gayatri Mantra",
  //     description: "Sacred Gayatri Mantra with proper pronunciation guide.",
  //     duration: "12:20",
  //     type: "Mantra",
  //     artist: "Traditional Chanting",
  //     language: "Sanskrit",
  //     plays: 1890,
  //   },
  // ]

  const scriptures = [
    {
      title: "Srimad Bhagavatam - Canto 1",
      description: "First canto of the Srimad Bhagavatam with Nepali translation.",
      type: "Scripture",
      chapters: 19,
      language: "Sanskrit/Nepali",
      translator: "SDB Nepal Research Team",
      status: "Complete",
    },
    {
      title: "Ramayana - Bal Kanda",
      description: "Childhood pastimes of Lord Rama with detailed commentary.",
      type: "Epic",
      chapters: 77,
      language: "Sanskrit/Nepali",
      translator: "Traditional Scholars",
      status: "Complete",
    },
    {
      title: "Upanishads Collection",
      description: "Major Upanishads with modern interpretations.",
      type: "Philosophy",
      chapters: 108,
      language: "Sanskrit/English",
      translator: "Dr. Sita Devi",
      status: "In Progress",
    },
  ]

  const reports = [
    {
      title: "Annual Report 2023",
      description: "Comprehensive annual report covering all activities and achievements.",
      type: "Annual Report",
      pages: 68,
      publishDate: "2024-01-15",
      category: "Organizational",
    },
    {
      title: "Orphanage Project Completion Report",
      description: "Detailed report on the successful completion of orphanage construction.",
      type: "Project Report",
      pages: 32,
      publishDate: "2023-12-20",
      category: "Projects",
    },
    {
      title: "Financial Audit Report 2023",
      description: "Independent financial audit report ensuring transparency.",
      type: "Audit Report",
      pages: 24,
      publishDate: "2023-12-10",
      category: "Financial",
    },
  ]

  const budgetDocuments = [
    {
      title: "Annual Budget 2024",
      description: "Detailed budget allocation for all programs and activities.",
      amount: "NPR 5,000,000",
      period: "2024",
      status: "Approved",
    },
    {
      title: "Project-wise Budget Breakdown",
      description: "Individual budget allocation for each ongoing project.",
      amount: "NPR 3,200,000",
      period: "2024",
      status: "Active",
    },
  ]

  const governanceDocuments = [
    {
      title: "General Assembly Minutes 2023",
      description: "Minutes from the annual general assembly meeting.",
      date: "2023-12-15",
      type: "Meeting Minutes",
      attendees: 156,
    },
    {
      title: "Election Results 2023",
      description: "Results of the executive committee elections.",
      date: "2023-12-15",
      type: "Election Results",
      voters: 142,
    },
    {
      title: "Constitutional Amendments",
      description: "Recent amendments to the organization constitution.",
      date: "2023-11-20",
      type: "Legal Document",
      status: "Ratified",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Library</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of cultural archives, spiritual texts, audio recordings, and
              organizational documents.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search library resources..." className="pl-10" />
              </div>
            </div>

            <Tabs defaultValue="gallery" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="gallery" className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Gallery
                </TabsTrigger>
                <TabsTrigger value="publications" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Publications
                </TabsTrigger>
                {/* <TabsTrigger value="audio" className="flex items-center gap-2">
                  <Music className="h-4 w-4" />
                  Audio
                </TabsTrigger> */}
                <TabsTrigger value="scriptures" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Scriptures
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Reports
                </TabsTrigger>
                {/* <TabsTrigger value="governance" className="flex items-center gap-2">
                  <Vote className="h-4 w-4" />
                  Governance
                </TabsTrigger> */}
              </TabsList>

              <TabsContent value="gallery" className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Sanatan Gallery</h2>
                  <p className="text-muted-foreground">
                    Visual archives of our cultural heritage, festivals, and traditional art forms.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryItems.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{item.type}</Badge>
                          <span className="text-sm text-muted-foreground">{item.items} items</span>
                        </div>
                        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>Updated: {new Date(item.lastUpdated).toLocaleDateString()}</span>
                        </div>
                        <Button className="w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          View Gallery
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="publications" className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Sanatan Publications</h2>
                  <p className="text-muted-foreground">
                    Books, research papers, and educational materials on Sanatan Dharma philosophy and practices.
                  </p>
                </div>

                <div className="space-y-4">
                  {publications.map((publication, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{publication.type}</Badge>
                              <Badge variant="outline">{publication.language}</Badge>
                            </div>
                            <h3 className="text-lg font-semibold mb-1">{publication.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">by {publication.author}</p>
                            <p className="text-muted-foreground mb-4">{publication.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{publication.pages} pages</span>
                              <span>Published: {new Date(publication.publishDate).toLocaleDateString()}</span>
                              <span>{publication.downloads} downloads</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Button size="sm">
                              <Eye className="mr-2 h-4 w-4" />
                              Preview
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* <TabsContent value="audio" className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Sanatan Bhajan</h2>
                  <p className="text-muted-foreground">
                    Audio collection of devotional songs, mantras, and spiritual chants.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {audioCollection.map((audio, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{audio.type}</Badge>
                          <Badge variant="outline">{audio.language}</Badge>
                        </div>
                        <CardTitle className="line-clamp-2">{audio.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">by {audio.artist}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{audio.description}</p>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>Duration: {audio.duration}</span>
                          <span>{audio.plays} plays</span>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1">
                            <Music className="mr-2 h-4 w-4" />
                            Play
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}

              <TabsContent value="scriptures" className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Puran / Saptaha MahaGyan</h2>
                  <p className="text-muted-foreground">
                    Sacred texts, epics, and philosophical works with translations and commentaries.
                  </p>
                </div>

                <div className="space-y-4">
                  {scriptures.map((scripture, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{scripture.type}</Badge>
                              <Badge variant={scripture.status === "Complete" ? "default" : "outline"}>
                                {scripture.status}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold mb-1">{scripture.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">Translated by {scripture.translator}</p>
                            <p className="text-muted-foreground mb-4">{scripture.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{scripture.chapters} chapters</span>
                              <span>{scripture.language}</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Button size="sm">
                              <BookOpen className="mr-2 h-4 w-4" />
                              Read
                            </Button>
                            {scripture.status === "Complete" && (
                              <Button size="sm" variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Project & Event Reports</h2>
                  <p className="text-muted-foreground">
                    Comprehensive reports on our projects, events, and organizational activities.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Completion Reports</h3>
                    <div className="space-y-4">
                      {reports.map((report, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary">{report.type}</Badge>
                                  <Badge variant="outline">{report.category}</Badge>
                                </div>
                                <h4 className="text-lg font-semibold mb-1">{report.title}</h4>
                                <p className="text-muted-foreground mb-4">{report.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>{report.pages} pages</span>
                                  <span>Published: {new Date(report.publishDate).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 ml-4">
                                <Button size="sm">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Annual Budget</h3>
                    <div className="space-y-4">
                      {budgetDocuments.map((budget, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary">Budget</Badge>
                                  <Badge variant={budget.status === "Approved" ? "default" : "outline"}>
                                    {budget.status}
                                  </Badge>
                                </div>
                                <h4 className="text-lg font-semibold mb-1">{budget.title}</h4>
                                <p className="text-muted-foreground mb-4">{budget.description}</p>
                                <div className="flex items-center gap-4 text-sm">
                                  <span className="font-semibold text-green-600">{budget.amount}</span>
                                  <span className="text-muted-foreground">Period: {budget.period}</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 ml-4">
                                <Button size="sm">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* <TabsContent value="governance" className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">General Assembly & Elections</h2>
                  <p className="text-muted-foreground">
                    Official documents from general assemblies, elections, and organizational governance.
                  </p>
                </div>

                <div className="space-y-4">
                  {governanceDocuments.map((doc, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{doc.type}</Badge>
                              {doc.status && <Badge variant="default">{doc.status}</Badge>}
                            </div>
                            <h4 className="text-lg font-semibold mb-1">{doc.title}</h4>
                            <p className="text-muted-foreground mb-4">{doc.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Date: {new Date(doc.date).toLocaleDateString()}</span>
                              {doc.attendees && <span>{doc.attendees} attendees</span>}
                              {doc.voters && <span>{doc.voters} voters</span>}
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <Button size="sm">
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent> */}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
