"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useShoppingCart } from "@/components/cart-provider";
// import { useAuth } from "@/components/auth-provider"
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { handleCheckout } from "./handleCheckout";

export default function Checkout() {
  const { items, total } = useShoppingCart();
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn || items.length === 0) {
      router.push("/cart");
    }
  }, [isSignedIn, items.length, router]);

  if (!isSignedIn || items.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/cart">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-white">Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Shipping Information
            </h2>
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Iqbal"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="Khan"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="kumail@gmail.com"
                />
              </div>
              <div>
                <Label htmlFor="address" className="text-white">
                  Address
                </Label>
                <Input
                  id="address"
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="123 Main St, Anytown, USA"
                />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city" className="text-white">
                    City
                  </Label>
                  <Input
                    id="city"
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-white">
                    State
                  </Label>
                  <Input
                    id="state"
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="NY"
                  />
                </div>
                <div>
                  <Label htmlFor="zip" className="text-white">
                    ZIP Code
                  </Label>
                  <Input
                    id="zip"
                    className="bg-white/5 border-white/10 text-white"
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Payment Method</h2>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="cardNumber" className="text-white">
                  Card Number
                </Label>
                <Input id="cardNumber" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <Label htmlFor="expiry" className="text-white">
                    Expiry Date
                  </Label>
                  <Input id="expiry" placeholder="MM/YY" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div>
                  <Label htmlFor="cvc" className="text-white">
                    CVC
                  </Label>
                  <Input id="cvc" className="bg-white/5 border-white/10 text-white" />
                </div>
              </div>
            </div>
          </Card> */}
        </div>

        <div>
          <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item._id} className="flex gap-4">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image.asset.url || "/placeholder.svg"}
                      alt={item.productName}
                      width={80}
                      height={80}
                      className="absolute inset-0 w-full h-full object-cover transform -rotate-12"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">
                      {item.productName}
                    </h3>
                    <p className="text-gray-400">Quantity: {item.quantity}</p>
                    <p className="text-white font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

              <Separator className="bg-white/10" />

              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="flex justify-between text-white font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Button
                  className="w-full gap-2"
                  onClick={() => handleCheckout({price: total})}
                >
                  <CreditCard className="h-4 w-4" />
                  Pay Now
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Package className="h-4 w-4" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
