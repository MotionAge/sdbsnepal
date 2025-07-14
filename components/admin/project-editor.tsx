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
import { Upload } from "lucide-react"

interface ProjectEditorProps {
  project?: any
  onSave: (projectData: any) => Promise<void>
  onCancel: () => void
}

export function ProjectEditor({ project, onSave, onCancel }: ProjectEditorProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    category: project?.category || "infrastructure",
    status: project?.status || "planning",
    start_date: project?.start_date || "",
    end_date: project?.end_date || "",
    budget: project?.budget || "",
    spent_amount: project?.spent_amount || "",
    progress: project?.progress || 0,
    location: project?.location || "",
    beneficiaries: project?.beneficiaries || "",
    image_url: project?.image_url || "",
  })

  const [isUploading, setIsUploading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = async (file: File) => {
    setIsUploading(true)
    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      })

      if (!response.ok) throw new Error("Upload failed")

      const { url } = await response.json()
      handleInputChange("image_url", url)

      toast({
        title: "Success",
        description: "Image uploaded successfully!",
      })
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Error",
        description: "Failed to upload image.",
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
      const projectData = {
        ...formData,
        budget: formData.budget ? Number.parseFloat(formData.budget) : null,
        spent_amount: formData.spent_amount ? Number.parseFloat(formData.spent_amount) : null,
        progress: Number.parseInt(formData.progress.toString()),
        beneficiaries: formData.beneficiaries ? Number.parseInt(formData.beneficiaries) : null,
      }

      await onSave(projectData)
      toast({
        title: "Success",
        description: `Project ${project ? "updated" : "created"} successfully!`,
      })
    } catch (error) {
      console.error("Save error:", error)
      toast({
        title: "Error",
        description: `Failed to ${project ? "update" : "create"} project.`,
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{project ? "Edit Project" : "Add New Project"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Project Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="cultural-preservation">Cultural Preservation</SelectItem>
                      <SelectItem value="humanitarian-aid">Humanitarian Aid</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="community-development">Community Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => handleInputChange("start_date", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="end_date">End Date</Label>
                  <Input
                    id="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => handleInputChange("end_date", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget (NPR)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="spent_amount">Spent Amount (NPR)</Label>
                  <Input
                    id="spent_amount"
                    type="number"
                    value={formData.spent_amount}
                    onChange={(e) => handleInputChange("spent_amount", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Progress and Beneficiaries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="progress">Progress (%)</Label>
                <Input
                  id="progress"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={(e) => handleInputChange("progress", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="beneficiaries">Number of Beneficiaries</Label>
                <Input
                  id="beneficiaries"
                  type="number"
                  value={formData.beneficiaries}
                  onChange={(e) => handleInputChange("beneficiaries", e.target.value)}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={4}
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <Label>Project Image</Label>
              <div className="mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleImageUpload(file)
                  }}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <Button type="button" variant="outline" className="w-full bg-transparent" disabled={isUploading}>
                    <Upload className="mr-2 h-4 w-4" />
                    {isUploading ? "Uploading..." : "Upload Image"}
                  </Button>
                </label>
                {formData.image_url && (
                  <div className="mt-4">
                    <img
                      src={formData.image_url || "/placeholder.svg"}
                      alt="Project preview"
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving..." : project ? "Update Project" : "Create Project"}
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
