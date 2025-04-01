
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Order, Product } from "@/types";
import { products as initialProducts } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Package, ShoppingBag, LogOut, Plus, Edit, Trash } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock orders for demonstration
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    userId: "user-1",
    items: [{ productId: 1, quantity: 2, size: 9, color: "Black" }],
    status: "pending",
    total: 259.98,
    shippingAddress: {
      name: "John Doe",
      email: "john@example.com",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA"
    },
    createdAt: "2023-06-15T10:30:00Z"
  },
  {
    id: "ORD-002",
    userId: "user-2",
    items: [
      { productId: 3, quantity: 1, size: 8, color: "White" },
      { productId: 6, quantity: 1, size: 8, color: "Brown" }
    ],
    status: "shipped",
    total: 169.98,
    shippingAddress: {
      name: "Jane Smith",
      email: "jane@example.com",
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      postalCode: "90001",
      country: "USA"
    },
    createdAt: "2023-06-12T14:45:00Z"
  }
];

const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  category: z.enum(["running", "casual", "athletic", "formal"], {
    errorMap: () => ({ message: "Please select a valid category" }),
  }),
  description: z.string().min(10, "Description must be at least 10 characters"),
  sizes: z.string().transform(val => val.split(",").map(size => parseFloat(size.trim())).filter(size => !isNaN(size))),
  colors: z.string().transform(val => val.split(",").map(color => color.trim())),
  images: z.string().transform(val => val.split(",").map(url => url.trim()))
});

type ProductFormValues = z.infer<typeof productSchema>;

const AdminPage = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  useEffect(() => {
    // If not authenticated or not admin, redirect to login
    if (!user || !isAdmin) {
      navigate("/login");
    }
  }, [user, isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId));
    toast.success("Product deleted successfully");
  };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      category: "casual",
      description: "",
      sizes: "",
      colors: "",
      images: ""
    }
  });

  useEffect(() => {
    // Set form values when editing a product
    if (editingProductId) {
      const productToEdit = products.find(p => p.id === editingProductId);
      if (productToEdit) {
        form.reset({
          name: productToEdit.name,
          price: productToEdit.price,
          category: productToEdit.category,
          description: productToEdit.description,
          sizes: productToEdit.sizes.join(", "),
          colors: productToEdit.colors.join(", "),
          images: productToEdit.images.join(", ")
        });
      }
    }
  }, [editingProductId, products, form]);

  const onSubmit = (values: ProductFormValues) => {
    if (editingProductId) {
      // Update existing product
      setProducts(products.map(product => 
        product.id === editingProductId 
          ? { 
              ...product, 
              name: values.name,
              price: values.price,
              category: values.category,
              description: values.description,
              sizes: values.sizes,
              colors: values.colors,
              images: values.images
            } 
          : product
      ));
      toast.success("Product updated successfully");
      setEditingProductId(null);
    } else {
      // Add new product
      const newProduct: Product = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: values.name,
        price: values.price,
        category: values.category,
        description: values.description,
        sizes: values.sizes,
        colors: values.colors,
        images: values.images
      };
      
      setProducts([...products, newProduct]);
      toast.success("Product added successfully");
    }
    
    form.reset({
      name: "",
      price: 0,
      category: "casual",
      description: "",
      sizes: "",
      colors: "",
      images: ""
    });
  };

  const cancelEdit = () => {
    setEditingProductId(null);
    form.reset({
      name: "",
      price: 0,
      category: "casual",
      description: "",
      sizes: "",
      colors: "",
      images: ""
    });
  };

  // Render admin dashboard UI
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="orders" className="text-lg py-3">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="products" className="text-lg py-3">
              <Package className="h-5 w-5 mr-2" />
              Products
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Management</h2>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.shippingAddress.name}</TableCell>
                      <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'shipped' ? 'bg-purple-100 text-purple-800' :
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <select 
                            className="text-sm border rounded p-1"
                            value={order.status}
                            onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value as Order['status'])}
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="products" className="border rounded-lg p-6">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  {editingProductId ? "Edit Product" : "Add New Product"}
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter product name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price ($)</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.01" min="0" placeholder="99.99" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="running">Running</option>
                              <option value="casual">Casual</option>
                              <option value="athletic">Athletic</option>
                              <option value="formal">Formal</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="sizes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sizes (comma separated)</FormLabel>
                          <FormControl>
                            <Input placeholder="7, 8, 9, 10, 11" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="colors"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Colors (comma separated)</FormLabel>
                          <FormControl>
                            <Input placeholder="Black, White, Red" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="images"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image URLs (comma separated)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter product description" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-2 pt-2">
                      <Button type="submit" className="flex-1">
                        {editingProductId ? (
                          <>
                            <Edit className="h-4 w-4 mr-2" />
                            Update Product
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Product
                          </>
                        )}
                      </Button>
                      {editingProductId && (
                        <Button type="button" variant="outline" onClick={cancelEdit}>
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Product List</h2>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.id}</TableCell>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>${product.price.toFixed(2)}</TableCell>
                          <TableCell>
                            <span className="capitalize">{product.category}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => setEditingProductId(product.id)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-red-500 hover:text-red-600"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
