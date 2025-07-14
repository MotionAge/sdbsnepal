import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"
import { storage } from "@/lib/database"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const gallery = await api.getGalleryItems()
    const item = gallery.find((g) => g.id === params.id)
    if (!item) {
      return NextResponse.json({ error: "Gallery item not found" }, { status: 404 })
    }
    return NextResponse.json(item)
  } catch (error) {
    console.error("Error fetching gallery item:", error)
    return NextResponse.json({ error: "Gallery item not found" }, { status: 404 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const updates = await request.json()
    const updatedItem = await api.updateGalleryItem(params.id, {
      ...updates,
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error("Error updating gallery item:", error)
    return NextResponse.json({ error: "Failed to update gallery item" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get the gallery item to find the image URL
    const gallery = await api.getGalleryItems()
    const item = gallery.find((g) => g.id === params.id)

    if (item && item.image_url) {
      // Delete the image from storage
      try {
        await storage.delete(item.image_url)
      } catch (error) {
        console.error("Error deleting image from storage:", error)
        // Continue with database deletion even if storage deletion fails
      }
    }

    await api.deleteGalleryItem(params.id)
    return NextResponse.json({ message: "Gallery item deleted successfully" })
  } catch (error) {
    console.error("Error deleting gallery item:", error)
    return NextResponse.json({ error: "Failed to delete gallery item" }, { status: 500 })
  }
}
