import { DonationForm } from "@/components/donation-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CreditCard, Smartphone, Globe } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous contribution helps us continue our mission of serving communities and preserving dharmic
            values across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <DonationForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Secure Donations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <CreditCard className="h-4 w-4 mr-2 text-blue-600" />
                  SSL Encrypted Payments
                </div>
                <div className="flex items-center text-sm">
                  <Smartphone className="h-4 w-4 mr-2 text-green-600" />
                  Mobile Payment Support
                </div>
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-2 text-purple-600" />
                  Global Currency Support
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Accepted Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 border rounded">
                    <div className="font-semibold text-sm">Stripe</div>
                    <div className="text-xs text-gray-500">Cards & Bank</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="font-semibold text-sm">PayPal</div>
                    <div className="text-xs text-gray-500">Global</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="font-semibold text-sm">Khalti</div>
                    <div className="text-xs text-gray-500">Nepal</div>
                  </div>
                  <div className="text-center p-3 border rounded">
                    <div className="font-semibold text-sm">eSewa</div>
                    <div className="text-xs text-gray-500">Nepal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card>
              <CardHeader>
                <CardTitle>Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Your donation may be tax-deductible. You will receive a receipt via email for your records.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
