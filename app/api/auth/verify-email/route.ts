import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { sendWelcomeEmail, isOTPExpired } from "@/lib/email/service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, otpCode } = body

    if (!userId || !otpCode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Get verification record
    const { data: verification, error: verificationError } = await supabase
      .from("email_verifications")
      .select("*")
      .eq("user_id", userId)
      .eq("otp_code", otpCode)
      .is("verified_at", null)
      .order("created_at", { ascending: false })
      .limit(1)
      .single()

    if (verificationError || !verification) {
      return NextResponse.json({ error: "Invalid verification code" }, { status: 400 })
    }

    // Check if OTP is expired
    if (isOTPExpired(verification.expires_at)) {
      return NextResponse.json({ error: "Verification code has expired" }, { status: 400 })
    }

    // Check attempt limit
    if (verification.attempts >= 5) {
      return NextResponse.json({ error: "Too many verification attempts. Please request a new code." }, { status: 429 })
    }

    // Mark verification as completed
    const { error: updateVerificationError } = await supabase
      .from("email_verifications")
      .update({
        verified_at: new Date().toISOString(),
        attempts: verification.attempts + 1,
      })
      .eq("id", verification.id)

    if (updateVerificationError) {
      console.error("Failed to update verification:", updateVerificationError)
      return NextResponse.json({ error: "Failed to verify email" }, { status: 500 })
    }

    // Update user as verified
    const { error: updateUserError } = await supabase.from("users").update({ email_verified: true }).eq("id", userId)

    if (updateUserError) {
      console.error("Failed to update user:", updateUserError)
      return NextResponse.json({ error: "Failed to update user status" }, { status: 500 })
    }

    // Get user details for welcome email
    const { data: user } = await supabase.from("users").select("full_name, email, role").eq("id", userId).single()

    if (user) {
      // Send welcome email
      try {
        const dashboardUrl =
          user.role === "admin"
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard`
            : `${process.env.NEXT_PUBLIC_SITE_URL}/user/dashboard`

        await sendWelcomeEmail({
          to: user.email,
          name: user.full_name,
          dashboardUrl,
        })
      } catch (emailError) {
        console.error("Welcome email error:", emailError)
        // Don't fail verification if welcome email fails
      }
    }

    return NextResponse.json({
      message: "Email verified successfully",
      verified: true,
    })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
