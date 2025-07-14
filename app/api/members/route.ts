import { type NextRequest, NextResponse } from "next/server"
import { api } from "@/lib/api"

export async function GET() {
  try {
    const members = await api.getMembers()
    return NextResponse.json(members)
  } catch (error) {
    console.error("Error fetching members:", error)
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const member = await request.json()
    const newMember = await api.createMember({
      ...member,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    return NextResponse.json(newMember, { status: 201 })
  } catch (error) {
    console.error("Error creating member:", error)
    return NextResponse.json({ error: "Failed to create member" }, { status: 500 })
  }
}
