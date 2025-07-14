import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const donation = await api.getDonations()
    const singleDonation = donation.find((d) => d.id === params.id)
    if (!singleDonation) {
      return NextResponse.json({ error: "Donation not found" }, { status: 404 })
    }
    return NextResponse.json(singleDonation)
  } catch (error) {
    console.error("Error fetching donation:", error)
    return NextResponse.json({ error: "Donation not found" }, { status: 404 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const updates = await request.json()
    const updatedDonation = await api.updateDonation(params.id, {
      ...updates,
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(updatedDonation)
  } catch (error) {
    console.error("Error updating donation:", error)
    return NextResponse.json({ error: "Failed to update donation" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await api.deleteDonation(params.id)
    return NextResponse.json({ message: "Donation deleted successfully" })
  } catch (error) {
    console.error("Error deleting donation:", error)
    return NextResponse.json({ error: "Failed to delete donation" }, { status: 500 })
  }
}
