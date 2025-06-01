import type { TProduct } from "../types";
import { data } from "./fake-products";

const BASE_PRODUCTS = data.hidrolightNeo;

export const productsData: TProduct[] = Array.from({ length: 90 }, (_, i) => {
  const base = BASE_PRODUCTS[i % BASE_PRODUCTS.length];
  return { ...base, id: `${i + 1}` };
});

export const productsMap = new Map(
  productsData.map((product) => [product.id, product]),
);
