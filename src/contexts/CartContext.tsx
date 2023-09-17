import { createContext, useState } from 'react';
import { CartContextData, Product } from '../types';

export const CartContext = createContext<CartContextData | undefined>(
  undefined,
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const isProductInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, children, isProductInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
