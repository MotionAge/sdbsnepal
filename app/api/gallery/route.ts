import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET() {
  try {
    const gallery = await api.getGalleryItems()
    return NextResponse.json(gallery)
  } catch (error) {
    console.error("Error fetching gallery:", error)
    return NextResponse.json({ error: "Failed to fetch gallery" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const item = await request.json()
    const newItem = await api.createGalleryItem({
      ...item,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    console.error("Error creating gallery item:", error)
    return NextResponse.json({ error: "Failed to create gallery item" }, { status: 500 })
  }
}
