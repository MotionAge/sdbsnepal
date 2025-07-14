import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { api } from "@/lib/api"

const categoryLabels: Record<string, string> = {
  "press-releases": "Press Release",
  galleries: "Gallery",
  "voting-polling": "Voting & Polling",
  "project-updates": "Project Update",
  "event-releases": "Event Release",
  promotions: "Promotion",
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const blog = await api.getBlog(slug)

    if (!blog || !blog.title) {
      return {
        title: "Blog Not Found - SDB Nepal",
        description: "The requested blog post could not be found.",
      }
    }

    return {
      title: `${blog.title} - SDB Nepal`,
      description: blog.excerpt || blog.content?.substring(0, 160) || "Read this article on SDB Nepal.",
      openGraph: {
        title: blog.title,
        description: blog.excerpt || blog.content?.substring(0, 160),
        images: blog.image_url ? [blog.image_url] : [],
        type: "article",
        publishedTime: blog.created_at,
        authors: [blog.author],
      },
    }
  } catch {
    return {
      title: "Blog Error - SDB Nepal",
      description: "There was a problem fetching the blog.",
    }
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const blog = await api.getBlog(slug).catch(() => null)
  if (!blog || blog.status !== "published") return notFound()

  let relatedBlogs: any[] = []
  try {
    const allBlogs = await api.getBlogs()
    relatedBlogs = allBlogs
      .filter((b: any) => b.category === blog.category && b.id !== blog.id && b.status === "published")
      .slice(0, 3)
  } catch {
    relatedBlogs = []
  }

  const readingTime = Math.ceil(blog.content.split(" ").length / 200)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative">
          {blog.image_url && (
            <div className="h-96 md:h-[500px] relative overflow-hidden">
              <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          <div className="container py-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/blogs">
                <Button variant="outline" className="mb-6 bg-transparent">
                  <ArrowLeft className="mr-2 h-5 w-5 text-current" />
                  Back to Blogs
                </Button>
              </Link>

              <div className={`${blog.image_url ? "-mt-32 relative z-10" : ""}`}>
                <Card className={`${blog.image_url ? "bg-white/95 backdrop-blur-sm" : ""}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{categoryLabels[blog.category] || blog.category}</Badge>
                      {blog.featured && <Badge variant="default">Featured</Badge>}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-gray-100">
                      {blog.title}
                    </h1>
                    {blog.excerpt && <p className="text-lg text-muted-foreground mb-6">{blog.excerpt}</p>}

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(blog.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{readingTime} min read</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8">
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br />") }}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6 sticky top-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>
                          {blog.author
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{blog.author}</p>
                        <p className="text-sm text-muted-foreground">SDB Nepal Team</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Contributing to the preservation of Sanatan Dharma culture and community welfare.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map((relatedBlog) => (
                    <Card key={relatedBlog.id}>
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={relatedBlog.image_url || "/placeholder.svg"}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">
                          {categoryLabels[relatedBlog.category] || relatedBlog.category}
                        </Badge>
                        <h3 className="font-semibold mb-2 line-clamp-2">{relatedBlog.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedBlog.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{new Date(relatedBlog.created_at).toLocaleDateString()}</span>
                          <Link href={`/blogs/${relatedBlog.id}`}>
                            <Button variant="ghost" size="sm">
                              Read More
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
