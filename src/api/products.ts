import { axios } from "./axios";
import type { Product } from "./product.types";

const ENDPOINT = "/products";

export async function getProducts(): Promise<Product[]> {
  const { data } = await axios.get<Product[]>(`${ENDPOINT}`);
  return data;
}