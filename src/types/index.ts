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

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  shippingAddress: ShippingAddress;
  createdAt: string;
}

export interface ShippingAddress {
  name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface ProductFormValues {
  name: string;
  price: number;
  category: 'running' | 'casual' | 'athletic' | 'formal';
  description: string;
  sizes: string; // Store as comma-separated string for form
  colors: string; // Store as comma-separated string for form
  images: string; // Store as comma-separated string for form
}
