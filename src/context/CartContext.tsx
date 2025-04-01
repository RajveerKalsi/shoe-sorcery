
import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product } from "@/types";
import { products } from "@/data/products";
import { toast } from "sonner";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number, quantity: number, size?: number, color?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getProduct: (productId: number) => Product | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: number, quantity: number, size?: number, color?: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.productId === productId && item.size === size && item.color === color
    );

    if (existingItemIndex > -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { productId, quantity, size, color }]);
    }
    
    toast.success("Item added to cart");
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product?.price ?? 0) * item.quantity;
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const getProduct = (productId: number) => {
    return products.find((p) => p.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        getProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
