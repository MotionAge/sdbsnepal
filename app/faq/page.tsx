import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  {
    category: "Donations",
    questions: [
      {
        question: "How can I make a donation?",
        answer:
          "You can make a donation through our secure online platform using credit/debit cards, PayPal, Khalti, or eSewa. We accept donations in multiple currencies including USD, NPR, EUR, and GBP.",
      },
      {
        question: "Is my donation tax-deductible?",
        answer:
          "Yes, donations to Sanatan Dharma Nepal may be tax-deductible. You will receive a receipt via email that you can use for tax purposes. Please consult with your tax advisor for specific guidance.",
      },
      {
        question: "Can I make recurring donations?",
        answer:
          "We offer both one-time and monthly recurring donation options. You can set up a recurring donation during the donation process.",
      },
      {
        question: "How do I know my donation is secure?",
        answer:
          "We use industry-standard SSL encryption and work with trusted payment processors like Stripe and PayPal. We never store your payment information on our servers.",
      },
    ],
  },
  {
    category: "Organization",
    questions: [
      {
        question: "What is Sanatan Dharma Nepal?",
        answer:
          "Sanatan Dharma Nepal is a non-profit organization dedicated to preserving dharmic values and serving communities across Nepal through education, healthcare, and spiritual guidance.",
      },
      {
        question: "How long has the organization been operating?",
        answer:
          "We have been serving communities for over 25 years, since our founding in 1999. During this time, we have impacted thousands of lives through our various programs.",
      },
      {
        question: "Where does my donation go?",
        answer:
          "Your donations directly support our programs including temple restoration, rural education initiatives, healthcare services, and community development projects across Nepal.",
      },
      {
        question: "How can I volunteer?",
        answer:
          "We welcome volunteers! You can apply through our volunteer program page or contact us directly. We have opportunities for both local and international volunteers.",
      },
    ],
  },
  {
    category: "Programs",
    questions: [
      {
        question: "What programs do you currently run?",
        answer:
          "Our main programs include temple restoration projects, rural education initiatives, mobile healthcare units, disaster relief efforts, and spiritual guidance programs.",
      },
      {
        question: "How do you select beneficiaries?",
        answer:
          "We work closely with local communities to identify the most pressing needs. Our selection process is transparent and based on need assessment and community impact potential.",
      },
      {
        question: "Can I sponsor a specific project?",
        answer:
          "Yes! You can choose to donate to specific campaigns or projects. Each campaign page shows exactly how your donation will be used.",
      },
      {
        question: "Do you provide progress reports?",
        answer:
          "We provide regular updates on all our projects through our newsletter, website, and social media channels. Donors receive specific updates on projects they've supported.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our organization, donation process, and programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="max-w-2xl mx-auto mt-12">
          <CardContent className="text-center p-8">
            <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Our team is here to help.</p>
            <Button className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
