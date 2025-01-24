'use client'

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export const handleCheckout = async ({price}: {price:number}) => {
    const stripe = await stripePromise;

    // Create a checkout session on the server
    const response = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [
          {
            name: "product",
            amount: price, // $20 in cents 
            quantity: 10,
          },
        ],
      }),
    });

    const { sessionId } = await response.json();

    // Redirect to the Stripe checkout
    if (stripe && sessionId) {
      stripe.redirectToCheckout({ sessionId });
    }
  };
