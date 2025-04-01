
import { Product, FilterOptions, SortOption } from "@/types";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { useState, useEffect } from "react";

interface ProductGridProps {
  category?: string;
  initialFilters?: FilterOptions;
}

const ProductGrid = ({ category, initialFilters }: ProductGridProps) => {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {});
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let result = [...products];

    // Apply category filter if provided as a prop
    if (category) {
      result = result.filter((product) => product.category === category);
    }

    // Apply category filter from filters object
    if (filters.category && filters.category !== "all") {
      result = result.filter((product) => product.category === filters.category);
    }

    // Apply price filters
    if (filters.minPrice !== undefined) {
      result = result.filter((product) => product.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      result = result.filter((product) => product.price <= filters.maxPrice!);
    }

    // Apply color filters
    if (filters.colors && filters.colors.length > 0) {
      result = result.filter((product) =>
        product.colors.some((color) => filters.colors?.includes(color))
      );
    }

    // Apply size filters
    if (filters.sizes && filters.sizes.length > 0) {
      result = result.filter((product) =>
        product.sizes.some((size) => filters.sizes?.includes(size))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // In a real app, you might sort by date added
        result.sort((a, b) => b.id - a.id);
        break;
      case "popularity":
        // In a real app, this might be based on sales or ratings
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [category, filters, sortBy]);

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <p className="text-sm text-gray-500">
          Showing {filteredProducts.length} products
        </p>
        <div className="mt-3 sm:mt-0">
          <label htmlFor="sort" className="text-sm text-gray-500 mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
          >
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
