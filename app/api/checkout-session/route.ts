import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // TODO: update to latest version, if error comes check this version
});

interface items_route {
  name: string;
  amount: number; 
  quantity: number;
}
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment", // Use 'subscription' for recurring payments
      line_items: body.items.map((item: items_route) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.amount, // Amount in cents (e.g., $20 -> 2000)
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // TODO: update to actual success url
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // TODO: update to actual cancel url
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe Checkout Session:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
