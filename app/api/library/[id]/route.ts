import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const libraryItem = await api.getLibraryItem(params.id)
    if (!libraryItem) {
      return NextResponse.json({ error: "Library item not found" }, { status: 404 })
    }
    return NextResponse.json(libraryItem)
  } catch (error) {
    console.error("Error fetching library item:", error)
    return NextResponse.json({ error: "Failed to fetch library item" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const itemData = await request.json()
    const updatedItem = await api.updateLibraryItem(params.id, {
      ...itemData,
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error("Error updating library item:", error)
    return NextResponse.json({ error: "Failed to update library item" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get the item to check if it has files to delete from storage
    const item = await api.getLibraryItem(params.id)

    if (item?.file_url) {
      // Delete from Vercel Blob storage
      try {
        const { del } = await import("@vercel/blob")
        await del(item.file_url)
      } catch (storageError) {
        console.error("Error deleting file from storage:", storageError)
        // Continue with database deletion even if storage deletion fails
      }
    }

    await api.deleteLibraryItem(params.id)
    return NextResponse.json({ message: "Library item deleted successfully" })
  } catch (error) {
    console.error("Error deleting library item:", error)
    return NextResponse.json({ error: "Failed to delete library item" }, { status: 500 })
  }
}
