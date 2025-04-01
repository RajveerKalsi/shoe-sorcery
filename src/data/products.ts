
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Air Cloud Runner",
    price: 129.99,
    category: "running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Black", "White", "Red"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    description: "Experience cloud-like comfort with every stride. The Air Cloud Runner features responsive cushioning and breathable mesh for an exceptional running experience.",
    featured: true
  },
  {
    id: 2,
    name: "Velocity Pro",
    price: 149.99,
    category: "athletic",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Blue", "Black", "Grey"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    description: "Elevate your athletic performance with the Velocity Pro. Designed with advanced technology for maximum speed and agility during intense workouts and competitions."
  },
  {
    id: 3,
    name: "Urban Street Classic",
    price: 89.99,
    category: "casual",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["White", "Black", "Beige"],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    description: "The perfect blend of style and comfort for everyday wear. Urban Street Classic shoes offer a timeless design that complements any casual outfit."
  },
  {
    id: 4,
    name: "Executive Oxford",
    price: 199.99,
    category: "formal",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Brown", "Black"],
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ],
    description: "Crafted with premium leather and meticulous attention to detail, the Executive Oxford represents sophistication and professionalism for the modern businessman."
  },
  {
    id: 5,
    name: "Trail Blazer",
    price: 159.99,
    category: "athletic",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Green", "Brown", "Black"],
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "Conquer any terrain with confidence in the Trail Blazer hiking shoes. Featuring durable construction, excellent grip, and waterproof materials for outdoor adventures."
  },
  {
    id: 6,
    name: "Comfort Loafer",
    price: 79.99,
    category: "casual",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Brown", "Navy", "Grey"],
    images: [
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1554735490-5974588cbc4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    description: "Slip into pure comfort with these stylish loafers. Made with soft materials and cushioned insoles, they're perfect for both casual outings and relaxed office environments."
  },
  {
    id: 7,
    name: "Sprint Elite",
    price: 139.99,
    category: "running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Yellow", "Black", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
    ],
    description: "Engineered for speed, the Sprint Elite running shoes feature lightweight construction and responsive cushioning to help you achieve your personal best."
  },
  {
    id: 8,
    name: "Dapper Derby",
    price: 169.99,
    category: "formal",
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11],
    colors: ["Black", "Brown", "Burgundy"],
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1621996659488-42c5b6626627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    ],
    description: "Classic derby styling meets modern comfort in these handcrafted dress shoes. Perfect for formal occasions and business settings where style matters."
  },
  {
    id: 9,
    name: "Flex Canvas",
    price: 59.99,
    category: "casual",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Red", "Navy", "Green"],
    images: [
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "Simple, versatile, and always in style. The Flex Canvas shoes provide all-day comfort and pair perfectly with jeans, shorts, or casual pants."
  },
  {
    id: 10,
    name: "Aero Knit",
    price: 119.99,
    category: "athletic",
    sizes: [7, 8, 9, 10, 11],
    colors: ["Grey", "Black", "Blue", "Red"],
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1621881538090-b2b5ffaa25b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "Featuring an innovative knit upper, the Aero Knit provides a sock-like fit with amazing breathability for training, gym workouts, and active lifestyles.",
    featured: true
  },
  {
    id: 11,
    name: "Manhattan Chelsea Boot",
    price: 189.99,
    category: "formal",
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black", "Brown"],
    images: [
      "https://images.unsplash.com/photo-1638247025967-e401b4b0bc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "Sophisticated and versatile, these Chelsea boots transition seamlessly from office to evening. Quality leather construction ensures lasting style and durability."
  },
  {
    id: 12,
    name: "Adventure Hiker",
    price: 149.99,
    category: "athletic",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Brown", "Green", "Grey"],
    images: [
      "https://images.unsplash.com/photo-1606166325695-a21a095667b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
    ],
    description: "Built for the outdoors, these rugged hiking boots offer superior ankle support, excellent traction, and waterproof protection for your wilderness adventures.",
    featured: true
  }
];
