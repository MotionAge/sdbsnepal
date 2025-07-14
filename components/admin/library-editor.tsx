"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Upload, FileText, ImageIcon, Video, Music } from "lucide-react"

interface LibraryEditorProps {
  item?: any
  onSave: (itemData: any) => Promise<void>
  onCancel: () => void
}

export function LibraryEditor({ item, onSave, onCancel }: LibraryEditorProps) {
  const [formData, setFormData] = useState({
    title: item?.title || "",
    description: item?.description || "",
    type: item?.type || "publication",
    category: item?.category || "scripture",
    author: item?.author || "",
    language: item?.language || "nepali",
    tags: item?.tags || "",
    file_url: item?.file_url || "",
    cover_image_url: item?.cover_image_url || "",
    is_featured: item?.is_featured || false,
  })

  const [isUploading, setIsUploading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = async (file: File, type: "file" | "cover") => {
    setIsUploading(true)
    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)
      uploadFormData.append("folder", type === "cover" ? "library/covers" : "library/files")

      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      })

      if (!response.ok) throw new Error("Upload failed")

      const { url } = await response.json()

      if (type === "file") {
        handleInputChange("file_url", url)
      } else {
        handleInputChange("cover_image_url", url)
      }

      toast({
        title: "Success",
        description: `${type === "file" ? "File" : "Cover image"} uploaded successfully!`,
      })
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Error",
        description: `Failed to upload ${type === "file" ? "file" : "cover image"}.`,
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      await onSave(formData)
      toast({
        title: "Success",
        description: `Library item ${item ? "updated" : "created"} successfully!`,
      })
    } catch (error) {
      console.error("Save error:", error)
      toast({
        title: "Error",
        description: `Failed to ${item ? "update" : "create"} library item.`,
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "publication":
        return FileText
      case "image":
        return ImageIcon
      case "video":
        return Video
      case "audio":
        return Music
      default:
        return FileText
    }
  }

  const TypeIcon = getTypeIcon(formData.type)

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TypeIcon className="h-5 w-5" />
            {item ? "Edit Library Item" : "Add New Library Item"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="type">Content Type</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="publication">Publication</SelectItem>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scripture">Scripture</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                      <SelectItem value="translation">Translation</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="historical">Historical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nepali">Nepali</SelectItem>
                      <SelectItem value="sanskrit">Sanskrit</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => handleInputChange("tags", e.target.value)}
                    placeholder="dharma, culture, tradition"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) => handleInputChange("is_featured", e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="is_featured">Featured Item</Label>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={4}
              />
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main File Upload */}
              <div>
                <Label>Main File</Label>
                <div className="mt-2">
                  <input
                    type="file"
                    accept={
                      formData.type === "image"
                        ? "image/*"
                        : formData.type === "video"
                          ? "video/*"
                          : formData.type === "audio"
                            ? "audio/*"
                            : ".pdf,.doc,.docx,.txt"
                    }
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload(file, "file")
                    }}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button type="button" variant="outline" className="w-full bg-transparent" disabled={isUploading}>
                      <Upload className="mr-2 h-4 w-4" />
                      {isUploading ? "Uploading..." : "Upload File"}
                    </Button>
                  </label>
                  {formData.file_url && (
                    <div className="mt-2 p-2 bg-muted rounded text-sm">
                      <span className="text-green-600">✓</span> File uploaded successfully
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Image Upload */}
              <div>
                <Label>Cover Image</Label>
                <div className="mt-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload(file, "cover")
                    }}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label htmlFor="cover-upload">
                    <Button type="button" variant="outline" className="w-full bg-transparent" disabled={isUploading}>
                      <Upload className="mr-2 h-4 w-4" />
                      {isUploading ? "Uploading..." : "Upload Cover"}
                    </Button>
                  </label>
                  {formData.cover_image_url && (
                    <div className="mt-2">
                      <img
                        src={formData.cover_image_url || "/placeholder.svg"}
                        alt="Cover preview"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving..." : item ? "Update Item" : "Create Item"}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
