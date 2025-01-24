// import { products } from '@/lib/products'
// import { ProductCard } from '@/components/product-card'

// export default function ShopPage() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-8 text-white">Shop Our Collection</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   )
// }

import { Product } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Badge } from '@/components/ui/badge'
import { getAllProducts } from '@/sanity/lib/products/getAllProducts'

export default async function ShopPage() {

  const products: Product[] | null = await getAllProducts();
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Collection</h1>
        <p className="text-xl text-gray-200 mb-8">Discover your perfect pair from our curated selection</p>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="bg-white/5 border-white/10 text-white">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}



