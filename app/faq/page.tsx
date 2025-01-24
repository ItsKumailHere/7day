import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FAQPage() {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="bg-white rounded-lg p-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for unworn items in their original condition. Please see our Returns & Exchanges page for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
            <AccordionContent>
              Yes, we ship to many countries worldwide. Shipping costs and delivery times may vary depending on the destination.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier&apos;s website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Are your products authentic?</AccordionTrigger>
            <AccordionContent>
              Yes, all products sold on SNKRS are 100% authentic. We source our products directly from authorized distributors and manufacturers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
  
  