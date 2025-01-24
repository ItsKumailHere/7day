"use client"

import { useShoppingCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import { useAuth } from "@/components/auth-provider"
import { toast } from "sonner"
import {useUser} from "@clerk/nextjs"

export default function CartPage() {
  const { items, removeItem, clearCart, total } = useShoppingCart()
  const { isSignedIn } = useUser()
  const router = useRouter()

  const handleCheckout = () => {
    if (!isSignedIn) {
      toast.error("Please sign in to proceed to checkout")
      return
    }
    router.push("/checkout")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white">Shopping Cart</h1>
      {items.length === 0 ? (
        <Card className="p-8 text-center bg-white/5 backdrop-blur-sm border-white/10">
          <p className="text-white text-lg mb-4">Your cart is empty</p>
          <Link href="/shop">
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Continue Shopping
          </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item._id} className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl overflow-hidden">
                    <Image
                      src={item.image.asset.url || "/placeholder.svg"}
                      alt={item.productName}
                      width={128}
                      height={128}
                      className="absolute inset-0 w-full h-full object-cover transform -rotate-12"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{item.productName}</h3>
                        <p className="text-gray-300">{item.category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                        onClick={() => removeItem(item._id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 text-white border-white/20">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg text-white w-12 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 text-white border-white/20">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xl font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-200">Subtotal</span>
              <span className="text-white font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-200">Shipping</span>
              <span className="text-white font-semibold">Free</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-white">Total</span>
              <span className="text-white">${total.toFixed(2)}</span>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" className="flex-1 text-white border-white/20" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button className="flex-1 gap-2" onClick={handleCheckout}>
                Checkout
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}