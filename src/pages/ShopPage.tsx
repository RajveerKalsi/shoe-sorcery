
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { FilterOptions } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";

const ShopPage = () => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["all", "running", "casual", "athletic", "formal"];
  const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
  const colors = ["Black", "White", "Blue", "Red", "Brown", "Grey", "Green", "Yellow"];

  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category: category === "all" ? undefined : category,
    });
  };

  const handleSizeChange = (size: number, checked: boolean) => {
    const currentSizes = filters.sizes || [];
    if (checked) {
      setFilters({
        ...filters,
        sizes: [...currentSizes, size],
      });
    } else {
      setFilters({
        ...filters,
        sizes: currentSizes.filter((s) => s !== size),
      });
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const currentColors = filters.colors || [];
    if (checked) {
      setFilters({
        ...filters,
        colors: [...currentColors, color],
      });
    } else {
      setFilters({
        ...filters,
        colors: currentColors.filter((c) => c !== color),
      });
    }
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    setFilters({
      ...filters,
      minPrice: value[0],
      maxPrice: value[1],
    });
  };

  const clearFilters = () => {
    setFilters({});
    setPriceRange([0, 200]);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Shop All Shoes</h1>
        <p className="text-gray-600 mb-6">Find the perfect pair for every occasion</p>

        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            className="w-full flex justify-between items-center"
            onClick={toggleFilters}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
            {showFilters ? (
              <ChevronUp className="h-4 w-4 ml-2" />
            ) : (
              <ChevronDown className="h-4 w-4 ml-2" />
            )}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar - desktop always visible, mobile toggle */}
          <div className={`w-full md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category}`}
                        name="category"
                        checked={
                          category === "all"
                            ? !filters.category
                            : filters.category === category
                        }
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category}`} className="capitalize">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 200]}
                    value={priceRange}
                    min={0}
                    max={200}
                    step={10}
                    onValueChange={handlePriceChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Sizes</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <Checkbox
                        id={`size-${size}`}
                        checked={(filters.sizes || []).includes(size)}
                        onCheckedChange={(checked) =>
                          handleSizeChange(size, checked as boolean)
                        }
                        className="mr-2"
                      />
                      <label htmlFor={`size-${size}`}>{size}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Colors</h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center">
                      <Checkbox
                        id={`color-${color}`}
                        checked={(filters.colors || []).includes(color)}
                        onCheckedChange={(checked) =>
                          handleColorChange(color, checked as boolean)
                        }
                        className="mr-2"
                      />
                      <label htmlFor={`color-${color}`}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" onClick={clearFilters} className="w-full">
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Product grid */}
          <div className="w-full md:w-3/4">
            <ProductGrid initialFilters={filters} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
