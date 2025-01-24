import { Product } from "@/lib/products";
import {client} from "@/sanity/lib/client";


const PRODUCTS_QUERY = `*[_type == "product"] {
  _id,
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  image{
    asset->{
      _id,
      url
    }
  },
  description
}
`

const options = { next: { revalidate: 30 } };

export const getAllProducts = async () => {
    const res = await client.fetch<Product[]>(PRODUCTS_QUERY, {}, options);

  const products = res || [];
  return products;
}


