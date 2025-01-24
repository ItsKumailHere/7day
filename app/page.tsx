// import Link from 'next/link'
// import { Button } from '@/components/ui/button'

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-white">
//       <h1 className="text-6xl font-bold mb-4">Welcome to SNKRS</h1>
//       <p className="text-2xl mb-8">Your ultimate destination for sneakers</p>
//       <Link href="/shop">
//         <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
//           Shop Now
//         </Button>
//       </Link>
//     </div>
//   )
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image"
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/products";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products: Product[] | null = await getAllProducts();
  const featuredProducts = products?.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      <section className="relative grid lg:grid-cols-2 gap-8 items-center py-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 px-4 py-1">
              New Collection 2024
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Unleash your
              <br />
              potential with
              <br />
              <span className="text-purple-200">SNKRS Elite</span>
            </h1>
          </div>
          <p className="text-xl text-gray-100 max-w-[600px]">
            Discover the perfect blend of style and performance with our premium
            collection of athletic footwear.
          </p>
          <div className="flex gap-4">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/compare">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Compare Models
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-purple-300/50 border-2 border-white flex items-center justify-center"
                >
                  <Star className="h-4 w-4" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold">Trusted by athletes worldwide</p>
              <p className="text-sm text-gray-200">
                Over 10,000+ positive reviews
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid gap-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <Badge variant="secondary">Featured</Badge>
                  <h3 className="text-2xl font-bold text-white">
                    Air Max Velocity
                  </h3>
                </div>
                <p className="text-2xl font-bold text-white">$129.99</p>
              </div>
              <div className="aspect-square relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-4">
                <Image
                  src={featuredProducts[0].image.asset.url}
                  alt={featuredProducts[0].productName}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Badge
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white"
                >
                  Lightweight
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white"
                >
                  Responsive
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white"
                >
                  Durable
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Products</h2>
          <Link href="/shop">
            <Button variant="link" className="text-white">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
