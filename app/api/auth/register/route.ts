import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { sendVerificationEmail, generateOTP, getOTPExpiryTime } from "@/lib/email/service"
import { validatePassword } from "@/lib/password-validation"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, fullName, phone, acceptNewsletter } = body

    // Validate input
    if (!email || !password || !fullName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate password strength
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return NextResponse.json({ error: "Password does not meet security requirements" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Check if user already exists
    const { data: existingUser } = await supabase.from("users").select("id, email_verified").eq("email", email).single()

    if (existingUser) {
      if (existingUser.email_verified) {
        return NextResponse.json({ error: "User already exists and is verified" }, { status: 409 })
      } else {
        // User exists but not verified, resend verification
        const otpCode = generateOTP()
        const expiresAt = getOTPExpiryTime(10)

        // Update verification record
        await supabase.from("email_verifications").upsert({
          user_id: existingUser.id,
          email,
          otp_code: otpCode,
          expires_at: expiresAt.toISOString(),
          attempts: 0,
        })

        // Send verification email
        await sendVerificationEmail({
          to: email,
          name: fullName,
          otpCode,
          expiresIn: 10,
        })

        return NextResponse.json({
          message: "Verification email resent",
          userId: existingUser.id,
          requiresVerification: true,
        })
      }
    }

    // Determine user role based on email
    const isAdmin = email.endsWith("@sanatandharma.org.np") || email === "admin@example.com"

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone: phone || null,
        },
      },
    })

    if (authError) {
      console.error("Auth signup error:", authError)
      return NextResponse.json({ error: "Failed to create account" }, { status: 500 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
    }

    // Create user profile
    const { error: profileError } = await supabase.from("users").insert({
      id: authData.user.id,
      email,
      full_name: fullName,
      phone: phone || null,
      role: isAdmin ? "admin" : "user",
      accept_newsletter: acceptNewsletter || false,
      email_verified: false,
    })

    if (profileError) {
      console.error("Profile creation error:", profileError)
      return NextResponse.json({ error: "Failed to create user profile" }, { status: 500 })
    }

    // Generate OTP and create verification record
    const otpCode = generateOTP()
    const expiresAt = getOTPExpiryTime(10)

    const { error: verificationError } = await supabase.from("email_verifications").insert({
      user_id: authData.user.id,
      email,
      otp_code: otpCode,
      expires_at: expiresAt.toISOString(),
      attempts: 0,
    })

    if (verificationError) {
      console.error("Verification record error:", verificationError)
      return NextResponse.json({ error: "Failed to create verification record" }, { status: 500 })
    }

    // Send verification email
    try {
      await sendVerificationEmail({
        to: email,
        name: fullName,
        otpCode,
        expiresIn: 10,
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail the registration if email fails
    }

    return NextResponse.json({
      message: "Account created successfully. Please check your email for verification code.",
      userId: authData.user.id,
      requiresVerification: true,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
