import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET() {
  try {
    const libraryItems = await api.getLibraryItems()
    return NextResponse.json(libraryItems)
  } catch (error) {
    console.error("Error fetching library items:", error)
    return NextResponse.json({ error: "Failed to fetch library items" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const itemData = await request.json()

    // Validate required fields
    if (!itemData.title || !itemData.type) {
      return NextResponse.json({ error: "Title and type are required" }, { status: 400 })
    }

    const libraryItem = await api.createLibraryItem({
      ...itemData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(libraryItem, { status: 201 })
  } catch (error) {
    console.error("Error creating library item:", error)
    return NextResponse.json({ error: "Failed to create library item" }, { status: 500 })
  }
}
