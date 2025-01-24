import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HelpPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">Help Center</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We offer free shipping on all orders over $100. Standard shipping takes 3-5 business days.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Returns & Exchanges</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You can return or exchange items within 30 days of delivery. Please ensure the items are unworn and in original condition.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>For any questions or concerns, please email us at support@snkrs.com or call us at 1-800-SNKRS-HELP.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

