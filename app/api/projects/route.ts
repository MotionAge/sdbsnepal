import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET() {
  try {
    const projects = await api.getProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const projectData = await request.json()

    // Validate required fields
    if (!projectData.title || !projectData.description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 })
    }

    const project = await api.createProject(projectData)
    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error("Error creating project:", error)
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
