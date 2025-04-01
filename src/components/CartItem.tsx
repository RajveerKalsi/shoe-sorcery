
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  productId: number;
  quantity: number;
  size?: number;
  color?: string;
}

const CartItem = ({ productId, quantity, size, color }: CartItemProps) => {
  const { getProduct, updateQuantity, removeFromCart } = useCart();
  const product = getProduct(productId) as Product;
  
  if (!product) return null;

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="flex py-6 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <p className="ml-4">${(product.price * quantity).toFixed(2)}</p>
          </div>
          <div className="mt-1 text-sm text-gray-500">
            {color && <span className="mr-2">Color: {color}</span>}
            {size && <span>Size: {size}</span>}
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-6 w-6"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-gray-700">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-6 w-6"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="flex">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => removeFromCart(productId)}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
