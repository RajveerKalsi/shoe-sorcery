
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock admin user for demo purposes
const MOCK_ADMIN: User = {
  id: "admin-1",
  email: "admin@shoeshop.com",
  name: "Admin User",
  role: "admin"
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // For demo purposes we're using a mock authentication
    // In a real app, this would be an API call to a backend
    
    // Only allow the mock admin user for this demo
    if (email === "admin@shoeshop.com" && password === "admin123") {
      setUser(MOCK_ADMIN);
      localStorage.setItem("user", JSON.stringify(MOCK_ADMIN));
      toast.success("Logged in successfully");
      return true;
    }
    
    toast.error("Invalid credentials");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin"
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
