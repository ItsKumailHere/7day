import { ProductDetails } from '@/components/product-details'
import { Product } from '@/lib/products'
import { getAllProducts } from '@/sanity/lib/products/getAllProducts'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const products: Product[] | null = await getAllProducts();
  const product = products?.find((p) => p._id === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetails product={product} />
}

