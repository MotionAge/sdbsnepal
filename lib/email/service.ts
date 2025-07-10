import { Resend } from "resend"
import { VerificationEmail, WelcomeEmail } from "./templates"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface SendVerificationEmailParams {
  to: string
  name: string
  otpCode: string
  expiresIn: number
}

export interface SendWelcomeEmailParams {
  to: string
  name: string
  dashboardUrl: string
}

export async function sendVerificationEmail({ to, name, otpCode, expiresIn }: SendVerificationEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Sanatan Dharma Nepal <noreply@sanatandharma.org.np>",
      to: [to],
      subject: "Verify Your Email - Sanatan Dharma Nepal",
      react: VerificationEmail({ name, otpCode, expiresIn }),
    })

    if (error) {
      console.error("Failed to send verification email:", error)
      throw new Error("Failed to send verification email")
    }

    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Email service error:", error)
    throw error
  }
}

export async function sendWelcomeEmail({ to, name, dashboardUrl }: SendWelcomeEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Sanatan Dharma Nepal <welcome@sanatandharma.org.np>",
      to: [to],
      subject: "Welcome to Sanatan Dharma Nepal! 🙏",
      react: WelcomeEmail({ name, dashboard_url }),
    })

    if (error) {
      console.error("Failed to send welcome email:", error)
      throw new Error("Failed to send welcome email")
    }

    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Email service error:", error)
    throw error
  }
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export function isOTPExpired(expiresAt: string): boolean {
  return new Date() > new Date(expiresAt)
}

export function getOTPExpiryTime(minutes = 10): Date {
  const now = new Date()
  return new Date(now.getTime() + minutes * 60 * 1000)
}
