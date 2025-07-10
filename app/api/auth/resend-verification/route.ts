import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { sendVerificationEmail, generateOTP, getOTPExpiryTime } from "@/lib/email/service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId } = body

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Get user details
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("email, full_name, email_verified")
      .eq("id", userId)
      .single()

    if (userError || !user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (user.email_verified) {
      return NextResponse.json({ error: "Email is already verified" }, { status: 400 })
    }

    // Check for recent verification attempts (rate limiting)
    const { data: recentVerification } = await supabase
      .from("email_verifications")
      .select("created_at")
      .eq("user_id", userId)
      .gte("created_at", new Date(Date.now() - 60000).toISOString()) // Last minute
      .order("created_at", { ascending: false })
      .limit(1)
      .single()

    if (recentVerification) {
      return NextResponse.json({ error: "Please wait before requesting another verification code" }, { status: 429 })
    }

    // Generate new OTP
    const otpCode = generateOTP()
    const expiresAt = getOTPExpiryTime(10)

    // Create new verification record
    const { error: verificationError } = await supabase.from("email_verifications").insert({
      user_id: userId,
      email: user.email,
      otp_code: otpCode,
      expires_at: expiresAt.toISOString(),
      attempts: 0,
    })

    if (verificationError) {
      console.error("Failed to create verification record:", verificationError)
      return NextResponse.json({ error: "Failed to create verification record" }, { status: 500 })
    }

    // Send verification email
    try {
      await sendVerificationEmail({
        to: user.email,
        name: user.full_name,
        otpCode,
        expiresIn: 10,
      })
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError)
      return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 })
    }

    return NextResponse.json({
      message: "Verification code sent successfully",
    })
  } catch (error) {
    console.error("Resend verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
