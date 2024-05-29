import { axios } from "./axios";
import type { Product } from "./product.types";

const ENDPOINT = "/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get<Product[]>(`${ENDPOINT}`);
    return data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const { data } = await axios.get<Product>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching product by id", error);
    throw error;
  }
}
