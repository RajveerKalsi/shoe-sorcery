
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import CartItemComponent from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/");
  };
  
  const cartTotal = getCartTotal();
  const shipping = cartTotal > 50 ? 0 : 9.99;
  const tax = cartTotal * 0.07; // Assuming 7% tax
  const orderTotal = cartTotal + shipping + tax;
  
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <ShoppingBag className="h-10 w-10 text-gray-500" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any shoes to your cart yet.
            </p>
            <Button onClick={() => navigate("/shop")}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItemComponent
                    key={`${item.productId}-${item.size}-${item.color}`}
                    productId={item.productId}
                    quantity={item.quantity}
                    size={item.size}
                    color={item.color}
                  />
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/shop")}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={clearCart}
                  className="text-gray-600"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={handleCheckout}
                >
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <div className="w-10 h-6 bg-gray-300 rounded"></div>
                    <div className="w-10 h-6 bg-gray-300 rounded"></div>
                    <div className="w-10 h-6 bg-gray-300 rounded"></div>
                    <div className="w-10 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
