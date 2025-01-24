import { type SchemaTypeDefinition } from "sanity";

import { productSchema } from "./productsType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
};
