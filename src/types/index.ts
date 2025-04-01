
export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'running' | 'casual' | 'athletic' | 'formal';
  sizes: number[];
  colors: string[];
  images: string[];
  description: string;
  featured?: boolean;
}

export interface CartItem {
  productId: number;
  quantity: number;
  size?: number;
  color?: string;
}

export type SortOption = 'price-low-high' | 'price-high-low' | 'newest' | 'popularity';

export type FilterOptions = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  colors?: string[];
  sizes?: number[];
};
