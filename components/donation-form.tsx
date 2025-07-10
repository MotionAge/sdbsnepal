"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Smartphone, Globe, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const predefinedAmounts = [25, 50, 100, 250, 500, 1000]
const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "NPR", symbol: "₨", name: "Nepalese Rupee" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
]

export function DonationForm() {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("USD")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("stripe")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const selectedCurrency = currencies.find((c) => c.code === currency)

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount.toString())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Thank you for your donation!",
        description: "Your contribution will make a real difference in our community.",
      })

      // Reset form
      setAmount("")
      setIsAnonymous(false)
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Heart className="h-5 w-5 mr-2 text-orange-500" />
          Make Your Donation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Type */}
          <div>
            <Label className="text-base font-semibold">Donation Type</Label>
            <RadioGroup value={donationType} onValueChange={setDonationType} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time donation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly recurring</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Currency Selection */}
          <div>
            <Label htmlFor="currency" className="text-base font-semibold">
              Currency
            </Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                    {curr.symbol} {curr.name} ({curr.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amount Selection */}
          <div>
            <Label className="text-base font-semibold">Donation Amount</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {predefinedAmounts.map((preAmount) => (
                <Button
                  key={preAmount}
                  type="button"
                  variant={amount === preAmount.toString() ? "default" : "outline"}
                  onClick={() => handleAmountSelect(preAmount)}
                  className="h-12"
                >
                  {selectedCurrency?.symbol}
                  {preAmount}
                </Button>
              ))}
            </div>
            <div className="mt-3">
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  {selectedCurrency?.symbol}
                </span>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <Label className="text-base font-semibold">Payment Method</Label>
            <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="stripe" className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-1" />
                  Stripe
                </TabsTrigger>
                <TabsTrigger value="paypal" className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  PayPal
                </TabsTrigger>
                <TabsTrigger value="khalti" className="flex items-center">
                  <Smartphone className="h-4 w-4 mr-1" />
                  Khalti
                </TabsTrigger>
                <TabsTrigger value="esewa" className="flex items-center">
                  <Smartphone className="h-4 w-4 mr-1" />
                  eSewa
                </TabsTrigger>
              </TabsList>

              <TabsContent value="stripe" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="paypal" className="mt-4">
                <div className="text-center p-6 border rounded-lg">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <p className="text-gray-600">You will be redirected to PayPal to complete your donation securely.</p>
                </div>
              </TabsContent>

              <TabsContent value="khalti" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="khalti-mobile">Mobile Number</Label>
                    <Input id="khalti-mobile" placeholder="98XXXXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="khalti-pin">Khalti PIN</Label>
                    <Input id="khalti-pin" type="password" placeholder="Enter PIN" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="esewa" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="esewa-id">eSewa ID</Label>
                    <Input id="esewa-id" placeholder="Enter eSewa ID" />
                  </div>
                  <div>
                    <Label htmlFor="esewa-password">Password</Label>
                    <Input id="esewa-password" type="password" placeholder="Enter password" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
              <Label htmlFor="anonymous">Make this donation anonymous</Label>
            </div>

            {!isAnonymous && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter last name" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" placeholder="Leave a message of support..." rows={3} />
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3"
            disabled={!amount || isLoading}
          >
            {isLoading
              ? "Processing..."
              : `Donate ${selectedCurrency?.symbol}${amount || "0"} ${donationType === "monthly" ? "/month" : ""}`}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By donating, you agree to our Terms of Service and Privacy Policy. Your donation is secure and encrypted.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
