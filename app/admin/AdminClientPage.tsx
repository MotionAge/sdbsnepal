"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlogEditor } from "@/components/admin/blog-editor"
import { MemberEditor } from "@/components/admin/member-editor"
import { ProjectEditor } from "@/components/admin/project-editor"
import { LibraryEditor } from "@/components/admin/library-editor"
import { toast } from "@/components/ui/use-toast"
import { Users, FileText, Plus, Edit, Trash2, Eye, FolderOpen, Briefcase } from "lucide-react"
import { GalleryEditor } from "@/components/admin/gallery-editor"
import { DonationEditor } from "@/components/admin/donation-editor"

export default function AdminClientPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("blogs")
  const [showEditor, setShowEditor] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)

  // Data states
  const [blogs, setBlogs] = useState<any[]>([])
  const [members, setMembers] = useState<any[]>([])
  const [donations, setDonations] = useState<any[]>([])
  const [gallery, setGallery] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [library, setLibrary] = useState<any[]>([])

  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem("sdb_admin_token")
    if (token === "authenticated") {
      setIsAuthenticated(true)
      loadData()
    } else {
      router.push("/admin/login")
    }
    setIsLoading(false)
  }, [router])

  const loadData = async () => {
    try {
      // Load all data
      const [blogsRes, membersRes, donationsRes, galleryRes, projectsRes, libraryRes] = await Promise.all([
        fetch("/api/blogs"),
        fetch("/api/members"),
        fetch("/api/donations"),
        fetch("/api/gallery"),
        fetch("/api/projects"),
        fetch("/api/library"),
      ])

      if (blogsRes.ok) setBlogs(await blogsRes.json())
      if (membersRes.ok) setMembers(await membersRes.json())
      if (donationsRes.ok) setDonations(await donationsRes.json())
      if (galleryRes.ok) setGallery(await galleryRes.json())
      if (projectsRes.ok) setProjects(await projectsRes.json())
      if (libraryRes.ok) setLibrary(await libraryRes.json())
    } catch (error) {
      console.error("Error loading data:", error)
      toast({
        title: "Error",
        description: "Failed to load data. Please refresh the page.",
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("sdb_admin_token")
    router.push("/admin/login")
  }

  // Blog operations
  const handleSaveBlog = async (blogData: any) => {
    try {
      const url = editingItem ? `/api/blogs/${editingItem.id}` : "/api/blogs"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      })

      if (!response.ok) throw new Error("Failed to save blog")

      const savedBlog = await response.json()

      if (editingItem) {
        setBlogs((prev) => prev.map((blog) => (blog.id === editingItem.id ? savedBlog : blog)))
      } else {
        setBlogs((prev) => [savedBlog, ...prev])
      }

      setShowEditor(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Error saving blog:", error)
      throw error
    }
  }

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return

    try {
      const response = await fetch(`/api/blogs/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete blog")

      setBlogs((prev) => prev.filter((blog) => blog.id !== id))
      toast({
        title: "Success",
        description: "Blog deleted successfully!",
      })
    } catch (error) {
      console.error("Error deleting blog:", error)
      toast({
        title: "Error",
        description: "Failed to delete blog.",
        variant: "destructive",
      })
    }
  }

  // Project operations
  const handleSaveProject = async (projectData: any) => {
    try {
      const url = editingItem ? `/api/projects/${editingItem.id}` : "/api/projects"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      })

      if (!response.ok) throw new Error("Failed to save project")

      const savedProject = await response.json()

      if (editingItem) {
        setProjects((prev) => prev.map((project) => (project.id === editingItem.id ? savedProject : project)))
      } else {
        setProjects((prev) => [savedProject, ...prev])
      }

      setShowEditor(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Error saving project:", error)
      throw error
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return

    try {
      const response = await fetch(`/api/projects/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete project")

      setProjects((prev) => prev.filter((project) => project.id !== id))
      toast({
        title: "Success",
        description: "Project deleted successfully!",
      })
    } catch (error) {
      console.error("Error deleting project:", error)
      toast({
        title: "Error",
        description: "Failed to delete project.",
        variant: "destructive",
      })
    }
  }

  // Library operations
  const handleSaveLibrary = async (itemData: any) => {
    try {
      const url = editingItem ? `/api/library/${editingItem.id}` : "/api/library"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      })

      if (!response.ok) throw new Error("Failed to save library item")

      const savedItem = await response.json()

      if (editingItem) {
        setLibrary((prev) => prev.map((item) => (item.id === editingItem.id ? savedItem : item)))
      } else {
        setLibrary((prev) => [savedItem, ...prev])
      }

      setShowEditor(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Error saving library item:", error)
      throw error
    }
  }

  const handleDeleteLibrary = async (id: string) => {
    if (!confirm("Are you sure you want to delete this library item?")) return

    try {
      const response = await fetch(`/api/library/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete library item")

      setLibrary((prev) => prev.filter((item) => item.id !== id))
      toast({
        title: "Success",
        description: "Library item deleted successfully!",
      })
    } catch (error) {
      console.error("Error deleting library item:", error)
      toast({
        title: "Error",
        description: "Failed to delete library item.",
        variant: "destructive",
      })
    }
  }

  // Member operations
  const handleSaveMember = async (memberData: any) => {
    try {
      const url = editingItem ? `/api/members/${editingItem.id}` : "/api/members"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(memberData),
      })

      if (!response.ok) throw new Error("Failed to save member")

      const savedMember = await response.json()

      if (editingItem) {
        setMembers((prev) => prev.map((member) => (member.id === editingItem.id ? savedMember : member)))
      } else {
        setMembers((prev) => [savedMember, ...prev])
      }

      setShowEditor(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Error saving member:", error)
      throw error
    }
  }

  const handleDeleteMember = async (id: string) => {
    if (!confirm("Are you sure you want to delete this member?")) return

    try {
      const response = await fetch(`/api/members/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete member")

      setMembers((prev) => prev.filter((member) => member.id !== id))
      toast({
        title: "Success",
        description: "Member deleted successfully!",
      })
    } catch (error) {
      console.error("Error deleting member:", error)
      toast({
        title: "Error",
        description: "Failed to delete member.",
        variant: "destructive",
      })
    }
  }

  // Gallery operations
  const handleSaveGallery = async (itemData: any) => {
    try {
      const url = editingItem ? `/api/gallery/${editingItem.id}` : "/api/gallery"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      })

      if (!response.ok) throw new Error("Failed to save gallery item")

      const savedItem = await response.json()

      if (editingItem) {
        setGallery((prev) => prev.map((item) => (item.id === editingItem.id ? savedItem : item)))
      } else {
        setGallery((prev) => [savedItem, ...prev])
      }

      setShowEditor(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Error saving gallery item:", error)
      throw error
    }
  }

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery item?")) return

    try {
      const response = await fetch(`/api/gallery/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete gallery item")

      setGallery((prev) => prev.filter((item) => item.id !== id))
      toast({
        title: "Success",
        description: "Gallery item deleted successfully!",
      })
    } catch (error) {
      console.error("Error deleting gallery item:", error)
      toast({
        title: "Error",
        description: "Failed to delete gallery item.",
        variant: "destructive",
      })
    }
  }

  // Donation operations
  const handleSaveDonation = async (donationData: any) => {
    try {
      const url = editingItem ? `/api/donations/${editingItem.id}` : "/api/donations"
      const method = editingItem ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      })

      if (!response.ok) throw new Error("Failed to save donation")

      const savedDonation = await response.json()

      if (editingItem) {
        setDonations((prev) => prev.map((donation) => (donation.id === editingItem.id ? savedDonation : donation)))
      } else {
        setDonations((prev) => [savedDonation, ...prev])
      }

      setShowEditor(false)
      setEditingItem(null)
    } catch (error) {
      console.error("Error saving donation:", error)
      throw error
    }
  }

  const handleDeleteDonation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this donation?")) return

    try {
      const response = await fetch(`/api/donations/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete donation")

      setDonations((prev) => prev.filter((donation) => donation.id !== id))
      toast({
        title: "Success",
        description: "Donation deleted successfully!",
      })
    } catch (error) {
      console.error("Error deleting donation:", error)
      toast({
        title: "Error",
        description: "Failed to delete donation.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const stats = [
    { title: "Total Members", value: members.length.toString(), icon: Users, color: "text-blue-600" },
    { title: "Blog Posts", value: blogs.length.toString(), icon: FileText, color: "text-green-600" },
    { title: "Projects", value: projects.length.toString(), icon: Briefcase, color: "text-purple-600" },
    { title: "Library Items", value: library.length.toString(), icon: FolderOpen, color: "text-orange-600" },
  ]

  if (showEditor) {
    if (activeTab === "blogs") {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-8">
            <div className="container">
              <BlogEditor
                blog={editingItem}
                onSave={handleSaveBlog}
                onCancel={() => {
                  setShowEditor(false)
                  setEditingItem(null)
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    if (activeTab === "projects") {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-8">
            <div className="container">
              <ProjectEditor
                project={editingItem}
                onSave={handleSaveProject}
                onCancel={() => {
                  setShowEditor(false)
                  setEditingItem(null)
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    if (activeTab === "library") {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-8">
            <div className="container">
              <LibraryEditor
                item={editingItem}
                onSave={handleSaveLibrary}
                onCancel={() => {
                  setShowEditor(false)
                  setEditingItem(null)
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    if (activeTab === "members") {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-8">
            <div className="container">
              <MemberEditor
                member={editingItem}
                onSave={handleSaveMember}
                onCancel={() => {
                  setShowEditor(false)
                  setEditingItem(null)
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    if (activeTab === "gallery") {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-8">
            <div className="container">
              <GalleryEditor
                item={editingItem}
                onSave={handleSaveGallery}
                onCancel={() => {
                  setShowEditor(false)
                  setEditingItem(null)
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    if (activeTab === "donations") {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 py-8">
            <div className="container">
              <DonationEditor
                donation={editingItem}
                onSave={handleSaveDonation}
                onCancel={() => {
                  setShowEditor(false)
                  setEditingItem(null)
                }}
              />
            </div>
          </main>
          <Footer />
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-8 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage your website content, members, and organizational data</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setEditingItem(null)
                    setShowEditor(true)
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Quick Add
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section className="py-8">
          <div className="container">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="donations">Donations</TabsTrigger>
              </TabsList>

              <TabsContent value="blogs" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Blog Management</CardTitle>
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setShowEditor(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        New Post
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {blogs.map((blog) => (
                        <div key={blog.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{blog.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={blog.status === "published" ? "default" : "secondary"}>
                                {blog.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {new Date(blog.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingItem(blog)
                                setShowEditor(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteBlog(blog.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      {blogs.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          No blogs found. Create your first blog post!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Project Management</CardTitle>
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setShowEditor(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        New Project
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{project.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="capitalize">
                                {project.status}
                              </Badge>
                              <Badge variant="secondary">{project.category}</Badge>
                              <span className="text-sm text-muted-foreground">{project.progress}% complete</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingItem(project)
                                setShowEditor(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteProject(project.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      {projects.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          No projects found. Create your first project!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="library" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Library Management</CardTitle>
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setShowEditor(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Item
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {library.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="capitalize">
                                {item.type}
                              </Badge>
                              <Badge variant="secondary">{item.category}</Badge>
                              {item.is_featured && <Badge variant="default">Featured</Badge>}
                              <span className="text-sm text-muted-foreground">
                                {new Date(item.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingItem(item)
                                setShowEditor(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteLibrary(item.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      {library.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          No library items found. Add your first item!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Gallery Management</CardTitle>
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setShowEditor(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Upload Images
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {gallery.map((item) => (
                        <div key={item.id} className="relative group">
                          <img
                            src={item.image_url || "/placeholder.svg?height=150&width=150"}
                            alt={item.title}
                            className="w-full aspect-square object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <div className="flex gap-2">
                              <Button size="sm" variant="secondary">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="secondary" onClick={() => handleDeleteGallery(item.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {gallery.length === 0 && (
                        <div className="col-span-full text-center py-8 text-muted-foreground">
                          No images found. Upload your first image!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="members" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Member Management</CardTitle>
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setShowEditor(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Member
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {members.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{member.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{member.membership_type} Member</Badge>
                              <span className="text-sm text-muted-foreground">
                                Joined: {new Date(member.join_date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingItem(member)
                                setShowEditor(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteMember(member.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      {members.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          No members found. Add your first member!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="donations" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Donation Management</CardTitle>
                      <Button
                        onClick={() => {
                          setEditingItem(null)
                          setShowEditor(true)
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Record Donation
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {donations.map((donation) => (
                        <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{donation.donor_name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-medium text-green-600">
                                {donation.currency} {donation.amount}
                              </span>
                              <Badge variant="outline">{donation.purpose}</Badge>
                              <span className="text-sm text-muted-foreground">
                                {new Date(donation.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingItem(donation)
                                setShowEditor(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleDeleteDonation(donation.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      {donations.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          No donations found. Record your first donation!
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
