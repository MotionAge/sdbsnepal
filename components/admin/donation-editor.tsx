"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Save } from "lucide-react"

interface DonationEditorProps {
  donation?: any
  onSave: (donation: any) => void
  onCancel: () => void
}

export function DonationEditor({ donation, onSave, onCancel }: DonationEditorProps) {
  const [formData, setFormData] = useState({
    donor_name: "",
    donor_email: "",
    donor_phone: "",
    amount: "",
    currency: "NPR",
    purpose: "",
    payment_method: "",
    transaction_id: "",
    status: "completed",
    anonymous: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (donation) {
      setFormData({
        ...donation,
        amount: donation.amount?.toString() || "",
      })
    }
  }, [donation])

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const donationData = {
        ...formData,
        amount: Number.parseFloat(formData.amount),
      }

      onSave(donationData)

      toast({
        title: "Success",
        description: `Donation ${donation ? "updated" : "recorded"} successfully!`,
      })
    } catch (error) {
      console.error("Save error:", error)
      toast({
        title: "Error",
        description: "Failed to save donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{donation ? "Edit Donation" : "Record New Donation"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="donor_name">Donor Name</Label>
              <Input
                id="donor_name"
                value={formData.donor_name}
                onChange={(e) => handleInputChange("donor_name", e.target.value)}
                placeholder="Enter donor name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="donor_email">Email</Label>
              <Input
                id="donor_email"
                type="email"
                value={formData.donor_email}
                onChange={(e) => handleInputChange("donor_email", e.target.value)}
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="donor_phone">Phone</Label>
              <Input
                id="donor_phone"
                value={formData.donor_phone}
                onChange={(e) => handleInputChange("donor_phone", e.target.value)}
                placeholder="Enter phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="flex gap-2">
                <Select value={formData.currency} onValueChange={(value) => handleInputChange("currency", value)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NPR">NPR</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => handleInputChange("amount", e.target.value)}
                  placeholder="0.00"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">Purpose</Label>
            <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select donation purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="orphanage-support">Orphanage Support</SelectItem>
                <SelectItem value="old-age-care">Old Age Care</SelectItem>
                <SelectItem value="cultural-preservation">Cultural Preservation</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="emergency-relief">Emergency Relief</SelectItem>
                <SelectItem value="general-support">General Support</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="payment_method">Payment Method</Label>
              <Select
                value={formData.payment_method}
                onValueChange={(value) => handleInputChange("payment_method", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="esewa">eSewa</SelectItem>
                  <SelectItem value="khalti">Khalti</SelectItem>
                  <SelectItem value="ime-pay">IME Pay</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transaction_id">Transaction ID</Label>
              <Input
                id="transaction_id"
                value={formData.transaction_id}
                onChange={(e) => handleInputChange("transaction_id", e.target.value)}
                placeholder="Enter transaction ID"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="anonymous"
              checked={formData.anonymous}
              onCheckedChange={(checked) => handleInputChange("anonymous", checked)}
            />
            <Label htmlFor="anonymous">Anonymous Donation</Label>
          </div>

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Saving..." : "Save Donation"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
