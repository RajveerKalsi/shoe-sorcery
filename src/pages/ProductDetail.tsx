
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Share2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));
  
  const [selectedSize, setSelectedSize] = useState<number | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  
  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button onClick={() => navigate("/shop")}>Return to Shop</Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    if (!selectedColor && product.colors.length > 0) {
      toast.error("Please select a color");
      return;
    }
    
    addToCart(product.id, quantity, selectedSize, selectedColor);
  };
  
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square rounded overflow-hidden border-2 ${
                      currentImage === index ? "border-black" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
            <div className="mt-6">
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1 border rounded-md ${
                        selectedColor === color
                          ? "border-black bg-gray-100"
                          : "border-gray-200"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium">Size</h3>
                <button className="text-sm text-gray-500 underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border rounded-md ${
                      selectedSize === size
                        ? "border-black bg-gray-100"
                        : "border-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  className="px-3 py-1 text-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  className="px-3 py-1 text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart and Wishlist Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart} 
                className="flex-1"
                size="lg"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-11 w-11">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Additional Information */}
            <div className="mt-10 border-t pt-6">
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Material</span>
                <span className="text-gray-600">Premium Leather & Mesh</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium">Shipping</span>
                <span className="text-gray-600">Free for orders over $50</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-medium">Returns</span>
                <span className="text-gray-600">30-day returns policy</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
