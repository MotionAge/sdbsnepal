import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET() {
  try {
    const donations = await api.getDonations()
    return NextResponse.json(donations)
  } catch (error) {
    console.error("Error fetching donations:", error)
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const donation = await request.json()
    const newDonation = await api.createDonation({
      ...donation,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(newDonation, { status: 201 })
  } catch (error) {
    console.error("Error creating donation:", error)
    return NextResponse.json({ error: "Failed to create donation" }, { status: 500 })
  }
}
