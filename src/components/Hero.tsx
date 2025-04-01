
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 animate-fadeIn">
              Step into the<br />
              <span className="text-black">extraordinary</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 animate-fadeIn-delay-1">
              Discover footwear that combines exceptional comfort, innovative design, and unparalleled style. For every path you walk, we have the perfect pair.
            </p>
            <div className="mt-8 space-x-4 animate-fadeIn-delay-2">
              <Button asChild size="lg" className="relative overflow-hidden group">
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collections/featured">
                  Featured Styles
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                alt="Featured Shoe"
                className="w-full h-full object-cover animate-fadeIn"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-gray-200 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gray-300 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
