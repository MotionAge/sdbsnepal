import { Html, Head, Body, Container, Section, Text, Button, Hr } from "@react-email/components"

interface VerificationEmailProps {
  name: string
  verificationCode: string
  expiresAt: string
}

export function VerificationEmail({ name, verificationCode, expiresAt }: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Section
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "40px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header */}
            <Section style={{ textAlign: "center", marginBottom: "30px" }}>
              <Text style={{ fontSize: "24px", fontWeight: "bold", color: "#ea580c", margin: "0" }}>🕉️ SDB Nepal</Text>
              <Text style={{ fontSize: "16px", color: "#6b7280", margin: "5px 0 0 0" }}>
                Sanatan Dharma Bigyan Samaj
              </Text>
            </Section>

            {/* Main Content */}
            <Section>
              <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", marginBottom: "20px" }}>
                Namaste {name}! 🙏
              </Text>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6", marginBottom: "20px" }}>
                Welcome to Sanatan Dharma Bigyan Samaj! We're delighted to have you join our community dedicated to
                preserving and promoting eternal wisdom through scientific understanding.
              </Text>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6", marginBottom: "30px" }}>
                To complete your registration and verify your email address, please use the verification code below:
              </Text>

              {/* Verification Code */}
              <Section
                style={{
                  backgroundColor: "#fef3c7",
                  border: "2px solid #f59e0b",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                <Text
                  style={{ fontSize: "32px", fontWeight: "bold", color: "#92400e", margin: "0", letterSpacing: "4px" }}
                >
                  {verificationCode}
                </Text>
              </Section>

              <Text style={{ fontSize: "14px", color: "#6b7280", marginBottom: "20px" }}>
                This verification code will expire on {expiresAt}. If you didn't create an account with us, please
                ignore this email.
              </Text>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6", marginBottom: "30px" }}>
                Once verified, you'll be able to:
              </Text>

              <ul style={{ color: "#374151", paddingLeft: "20px", marginBottom: "30px" }}>
                <li style={{ marginBottom: "8px" }}>Access our research articles and translated scriptures</li>
                <li style={{ marginBottom: "8px" }}>Participate in Geeta Saptahas and storytelling series</li>
                <li style={{ marginBottom: "8px" }}>Support our Sanskrit Gurukul and community programs</li>
                <li style={{ marginBottom: "8px" }}>Stay updated with our latest initiatives</li>
              </ul>
            </Section>

            <Hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "30px 0" }} />

            {/* Footer */}
            <Section style={{ textAlign: "center" }}>
              <Text style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
                Sanatan Dharma Bigyan Samaj (SDB Nepal)
              </Text>
              <Text style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "5px" }}>
                Thali (Kageshwori Manohara-05), Kathmandu, Nepal
              </Text>
              <Text style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "5px" }}>
                Email: sdbnepal.org@gmail.com | Website: www.sdbnepal.org.np
              </Text>
              <Text style={{ fontSize: "12px", color: "#9ca3af" }}>
                Registration No: 111 | Established: 2081/07/26 B.S.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

interface WelcomeEmailProps {
  name: string
}

export function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Section
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "40px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header */}
            <Section style={{ textAlign: "center", marginBottom: "30px" }}>
              <Text style={{ fontSize: "24px", fontWeight: "bold", color: "#ea580c", margin: "0" }}>🕉️ SDB Nepal</Text>
              <Text style={{ fontSize: "16px", color: "#6b7280", margin: "5px 0 0 0" }}>
                Sanatan Dharma Bigyan Samaj
              </Text>
            </Section>

            {/* Main Content */}
            <Section>
              <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#111827", marginBottom: "20px" }}>
                Welcome to our community, {name}! 🎉
              </Text>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6", marginBottom: "20px" }}>
                Your email has been successfully verified! We're thrilled to welcome you to the Sanatan Dharma Bigyan
                Samaj family.
              </Text>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6", marginBottom: "30px" }}>
                As a member of our community, you now have access to:
              </Text>

              <ul style={{ color: "#374151", paddingLeft: "20px", marginBottom: "30px" }}>
                <li style={{ marginBottom: "8px" }}>📚 Research articles and translated ancient texts</li>
                <li style={{ marginBottom: "8px" }}>🎭 Geeta Saptahas and storytelling series</li>
                <li style={{ marginBottom: "8px" }}>🏫 Information about our Sanskrit Gurukuls</li>
                <li style={{ marginBottom: "8px" }}>🤝 Community service and volunteer opportunities</li>
                <li style={{ marginBottom: "8px" }}>📱 Updates on our social media initiatives</li>
              </ul>

              <Section style={{ textAlign: "center", marginBottom: "30px" }}>
                <Button
                  href="https://www.sdbnepal.org.np/dashboard"
                  style={{
                    backgroundColor: "#ea580c",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Visit Your Dashboard
                </Button>
              </Section>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6", marginBottom: "20px" }}>
                Our mission is to preserve and promote eternal wisdom systems through scientific understanding.
                Together, we can contribute to the sustainable well-being of society, culture, and nature.
              </Text>

              <Text style={{ fontSize: "16px", color: "#374151", lineHeight: "1.6" }}>
                Thank you for joining us on this sacred journey of knowledge and service.
              </Text>
            </Section>

            <Hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "30px 0" }} />

            {/* Footer */}
            <Section style={{ textAlign: "center" }}>
              <Text style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
                Sanatan Dharma Bigyan Samaj (SDB Nepal)
              </Text>
              <Text style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "5px" }}>
                Thali (Kageshwori Manohara-05), Kathmandu, Nepal
              </Text>
              <Text style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "5px" }}>
                Email: sdbnepal.org@gmail.com | Website: www.sdbnepal.org.np
              </Text>
              <Text style={{ fontSize: "12px", color: "#9ca3af" }}>
                Registration No: 111 | Established: 2081/07/26 B.S.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
