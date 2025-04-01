
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SHOE SORCERY</h3>
            <p className="text-gray-600 mb-4">
              Step into comfort and style with our premium selection of footwear for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/running" className="text-gray-600 hover:text-black transition-colors">
                  Running Shoes
                </Link>
              </li>
              <li>
                <Link to="/collections/casual" className="text-gray-600 hover:text-black transition-colors">
                  Casual Shoes
                </Link>
              </li>
              <li>
                <Link to="/collections/athletic" className="text-gray-600 hover:text-black transition-colors">
                  Athletic Shoes
                </Link>
              </li>
              <li>
                <Link to="/collections/formal" className="text-gray-600 hover:text-black transition-colors">
                  Formal Shoes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-black transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-black transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/sizing" className="text-gray-600 hover:text-black transition-colors">
                  Sizing Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-600 hover:text-black transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Shoe Sorcery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
