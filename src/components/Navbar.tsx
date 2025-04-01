
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 font-bold text-xl sm:text-2xl">
            SHOE SORCERY
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/collections/running"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Running
            </Link>
            <Link
              to="/collections/casual"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Casual
            </Link>
            <Link
              to="/collections/formal"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Formal
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
                <ShoppingBag className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-base font-medium py-2 text-gray-700 hover:text-black transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-base font-medium py-2 text-gray-700 hover:text-black transition-colors"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/collections/running"
              className="text-base font-medium py-2 text-gray-700 hover:text-black transition-colors"
              onClick={toggleMenu}
            >
              Running
            </Link>
            <Link
              to="/collections/casual"
              className="text-base font-medium py-2 text-gray-700 hover:text-black transition-colors"
              onClick={toggleMenu}
            >
              Casual
            </Link>
            <Link
              to="/collections/formal"
              className="text-base font-medium py-2 text-gray-700 hover:text-black transition-colors"
              onClick={toggleMenu}
            >
              Formal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
