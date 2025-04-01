
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Convert the category URL parameter to match our category type
  const normalizedCategory = category?.toLowerCase() as 'running' | 'casual' | 'athletic' | 'formal' | undefined;
  
  // Map for nice display names
  const categoryDisplayNames: Record<string, string> = {
    running: "Running Shoes",
    casual: "Casual Shoes",
    athletic: "Athletic Shoes",
    formal: "Formal Shoes",
  };
  
  // Map for category descriptions
  const categoryDescriptions: Record<string, string> = {
    running: "Engineered for performance and comfort on every run, our collection of running shoes combines innovative technology with stylish design.",
    casual: "Everyday shoes that don't compromise on style or comfort. Perfect for your daily activities and casual outings.",
    athletic: "Designed for your active lifestyle, these shoes provide the support and durability you need for various sports and training activities.",
    formal: "Sophisticated and elegant footwear crafted with premium materials for professional settings and special occasions.",
  };
  
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          {normalizedCategory
            ? categoryDisplayNames[normalizedCategory]
            : "Collection"}
        </h1>
        <p className="text-gray-600 mb-8">
          {normalizedCategory
            ? categoryDescriptions[normalizedCategory]
            : "Explore our curated collection of premium shoes."}
        </p>
        
        <ProductGrid category={normalizedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
