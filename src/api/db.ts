import Dexie, { Table } from 'dexie';
import { Product } from './product.types';
import _ from 'lodash';

export class ecomApp extends Dexie {
  cartList!: Table<Product>;

  constructor() {
    super('ecomAppDatabase');
    this.version(1).stores({
      cartList: '++id, title, image, price, description, category, rating, count',
    });
  }
}

export const db = new ecomApp();


// Add prodcut to cart
export async function addToCart (product: Product) {
  await db.cartList.add({ ...product, count: 1 });
}

// Remove product from cart
export async function removeFromCart(id: number) {
  await db.cartList.delete(id);
}

// Get all products from cart
export async function getCartList() {
  return await db.cartList.toArray();
}

// Clear cart
export async function clearCart() {
  await db.cartList.clear();
}

// Get single product from cart
export async function getSingleProduct(id: number) {
  return await db.cartList.get(id);
}

// Update product count
export async function updateProductCount(id: number, count: number) {
  await db.cartList.update(id, { count });
}

// Get total cart items
export async function getTotalCartItems() {
  return await db.cartList.count();
}

// Get total cart amount
export async function getTotalCartAmount() {
  const products = await db.cartList.toArray();
  return _.round(_.sumBy(products, (product) => product.price * product.count), 2);
}


