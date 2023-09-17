import { Product } from '../types';

export interface CartContextData {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  isProductInCart: (productId: number) => boolean;
  children: React.ReactNode;
}
