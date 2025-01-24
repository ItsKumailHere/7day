// 'use client'

// import Image from 'next/image'
// import { useUser } from '@clerk/nextjs'
// import { Heart } from 'lucide-react'
// import { toast } from 'sonner'
// import { Button } from '@/components/ui/button'
// import { useShoppingCart } from '@/components/cart-provider'
// import { Product } from '@/lib/products'
// import { useState, useEffect } from 'react'

// export function ProductDetails({ product }: { product: Product }) {
//   const { isSignedIn } = useUser()
//   const { addItem } = useShoppingCart()
//   const [isWishlisted, setIsWishlisted] = useState(false)

//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
//     setIsWishlisted(wishlist.includes(product.id))
//   }, [product.id])

//  const handleAddToCart = () => {
//     if (isSignedIn) {
//       addItem(product)
//       toast.success('Added to cart')
//     } else {
//       toast.error('Please sign in to add items to your cart')
//     }
//   } 

//   const handleToggleWishlist = () => {
//     const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
//     if (isWishlisted) {
//       const updatedWishlist = wishlist.filter((id: string) => id !== product.id)
//       localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
//       setIsWishlisted(false)
//       toast.success('Removed from wishlist')
//     } else {
//       wishlist.push(product.id)
//       localStorage.setItem('wishlist', JSON.stringify(wishlist))
//       setIsWishlisted(true)
//       toast.success('Added to wishlist')
//     }
//   }

//   return (
//     <div className="flex flex-col md:flex-row gap-8">
//       <div className="md:w-1/2">
//         <Image src={product.image || "/placeholder.svg"} alt={product.name} width={600} height={600} className="w-full h-auto" />
//       </div>
//       <div className="md:w-1/2">
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//         <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
//         <p className="mb-4">{product.description}</p>
//         <p className="mb-4">Category: {product.category}</p>
//         <div className="flex gap-4">
//           <Button onClick={handleAddToCart}>Add to Cart</Button>
//           <Button variant="outline" size="icon" onClick={handleToggleWishlist}>
//             <Heart className={isWishlisted ? 'fill-current text-red-500' : ''} />
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import Image from 'next/image'
import { Heart, ShoppingBag, Check } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useShoppingCart } from '@/components/cart-provider'
import { Product } from '@/lib/products'
import { useState, useEffect } from 'react'
import { useUser } from '@clerk/shared/react/index'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export function ProductDetails({ product }: { product: Product }) {
  const { isSignedIn } = useUser()
  const { addItem } = useShoppingCart()
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    setIsWishlisted(wishlist.includes(product._id))
  }, [product._id])

  const handleAddToCart = () => {
    if (isSignedIn) {
      addItem(product)
      toast.success('Added to cart')
    } else {
      toast.error('Please sign in to add items to your cart')
    }
  }

  const handleToggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    if (isWishlisted) {
      const updatedWishlist = wishlist.filter((id: string) => id !== product._id)
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
      setIsWishlisted(false)
      toast.success('Removed from wishlist')
    } else {
      wishlist.push(product._id)
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      setIsWishlisted(true)
      toast.success('Added to wishlist')
    }
  }

  const features = [
    'Premium Materials',
    'Enhanced Comfort',
    'Durable Construction',
    '30-Day Returns',
  ]

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-12">
          <Image
            src={product.image.asset.url || "/placeholder.svg"}
            alt={product.productName}
            width={600}
            height={600}
            className="relative inset-0 w-full h-full object-cover transform -rotate-12 hover:rotate-0 transition-transform duration-500"
          />
        </div>
        <div className="relative p-8 lg:p-12 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-white mb-2">{product.productName}</h1>
              <p className="text-xl text-gray-300">{product.description}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleToggleWishlist}
            >
              <Heart className={isWishlisted ? 'fill-red-500 stroke-red-500' : ''} />
            </Button>
          </div>

          <div className="mb-8">
            <p className="text-4xl font-bold text-white mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-200">
                  <Check className="h-5 w-5 text-green-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <Button size="lg" className="w-full gap-2" onClick={handleAddToCart}>
              <ShoppingBag className="h-5 w-5" />
              <SignedIn>
                Add to Cart
              </SignedIn>
              <SignedOut>
                Sign In to Add to Cart
              </SignedOut>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


