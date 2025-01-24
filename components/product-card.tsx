// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { Heart } from 'lucide-react'
// import {toast} from 'sonner'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { useShoppingCart } from '@/components/cart-provider'
// import { Product } from '@/lib/products'
// import { useState, useEffect } from 'react'
// import { useUser } from '@clerk/nextjs'

// export function ProductCard({ product }: { product: Product }) {
//   const { isSignedIn } = useUser()
//   const { addItem } = useShoppingCart()
//   const [isWishlisted, setIsWishlisted] = useState(false)

//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
//     setIsWishlisted(wishlist.includes(product.id))
//   }, [product.id])

//   const handleAddToCart = () => {
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
//     <Card>
//       <CardHeader>
//         <CardTitle>{product.name}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Image src={product.image || "/placeholder.svg"} alt={product.name} width={300} height={300} className="w-full h-auto" />
//         <p className="mt-2">{product.description}</p>
//         <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button onClick={handleAddToCart}>Add to Cart</Button>
//         <Button variant="outline" size="icon" onClick={handleToggleWishlist}>
//           <Heart className={isWishlisted ? 'fill-current text-red-500' : ''} />
//         </Button>
//         <Link href={`/shop/${product.id}`}>
//           <Button variant="link">View Details</Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   )
// }


'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useShoppingCart } from '@/components/cart-provider'
import { Product } from '@/lib/products'
import { useState, useEffect } from 'react'
import { SignedIn, useUser, SignedOut } from '@clerk/nextjs'

export function ProductCard({ product }: { product: Product }) {
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

  return (
    <Card className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <Badge variant="secondary" className="bg-white/90">
            {product.category}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 z-10 text-gray-500 hover:bg-white/20 ${isWishlisted ? 'bg-white/20' : ''}`}
          onClick={handleToggleWishlist}
        >
          <Heart className={isWishlisted ? 'fill-red-500 stroke-red-500' : ''} />
        </Button>
        <Link href={`/shop/${product._id}`} className="block">
          <div className="aspect-square relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 transition-all duration-300 group-hover:scale-105">
            <Image
              src={product.image.asset.url || "/placeholder.svg"}
              alt={product.productName}
              width={400}
              height={400}
              className="relative inset-0 w-full h-full object-cover transform -rotate-12 group-hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{product.productName}</h3>
            <p className="text-gray-300 line-clamp-2 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-white">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full gap-2" onClick={handleAddToCart}>
          <ShoppingBag className="h-4 w-4" />
          <SignedIn>
            Add to Cart
          </SignedIn>
          <SignedOut>
           Sign In to Add to Cart
          </SignedOut>
        </Button>
      </CardFooter>
    </Card>
  )
}


