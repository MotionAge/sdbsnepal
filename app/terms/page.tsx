export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Donations</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All donations are voluntary and non-refundable unless otherwise specified</li>
                <li>Donations will be used for the purposes described on our website</li>
                <li>We reserve the right to use donations where they are most needed</li>
                <li>Tax receipts will be provided for eligible donations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Conduct</h2>
              <p className="text-gray-600 mb-4">
                You agree not to use the website for any unlawful purpose or in any way that could damage, disable, or
                impair the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Sanatan Dharma Nepal shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us at legal@sanatandharma.org.np
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
