export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Policy</h2>
              <p className="text-gray-600 mb-4">
                As a charitable organization, donations to Sanatan Dharma Nepal are generally non-refundable. However,
                we understand that mistakes can happen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Eligibility</h2>
              <p className="text-gray-600 mb-4">Refunds may be considered in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Technical error resulting in duplicate donations</li>
                <li>Unauthorized use of payment method</li>
                <li>Donation made in error (within 48 hours)</li>
                <li>Campaign cancellation before funds are utilized</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-600 mb-4">To request a refund:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Contact us within 30 days of the donation</li>
                <li>Provide your donation receipt and transaction details</li>
                <li>Explain the reason for the refund request</li>
                <li>Allow 5-10 business days for processing</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Time</h2>
              <p className="text-gray-600">
                Approved refunds will be processed within 5-10 business days and returned to the original payment
                method. Please note that it may take additional time for the refund to appear in your account depending
                on your payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                For refund requests or questions about this policy, please contact us at refunds@sanatandharma.org.np or
                call +977-1-4444444.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
