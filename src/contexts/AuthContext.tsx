
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { LoginFormData } from '@/schemas/auth';
import { SignUpFormData } from '@/schemas/auth';

interface User {
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  id: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string, phoneNumber: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This function would be replaced with actual API calls in a real app
const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUserFromLocalStorage = (): User | null => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

// Mock database for demo purposes
// In a real application, this would be handled by a backend server
interface StoredUser {
  id: string;
  email: string;
  password: string;
  displayName: string;
  photoURL: string | null;
  phoneNumber: string;
}

class AuthService {
  private static users: StoredUser[] = [];

  // Helper to initialize with some mock users for testing
  static initialize() {
    if (this.users.length === 0) {
      // Add a test user if none exists
      this.users.push({
        id: 'test-user-1',
        email: 'test@example.com',
        password: 'Test1234!',
        displayName: 'Test User',
        photoURL: null,
        phoneNumber: '555-123-4567'
      });
    }
  }

  static async register(email: string, password: string, displayName: string, phoneNumber: string): Promise<User> {
    // Check if user already exists
    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser: StoredUser = {
      id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      email,
      password,
      displayName,
      photoURL: null,
      phoneNumber
    };

    this.users.push(newUser);
    
    // Return user object (without password)
    return {
      id: newUser.id,
      email: newUser.email,
      displayName: newUser.displayName,
      photoURL: newUser.photoURL
    };
  }

  static async login(email: string, password: string): Promise<User> {
    // Find user
    const user = this.users.find(user => user.email === email);
    
    // Check if user exists and password matches
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    // Return user object (without password)
    return {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
  }

  static async resetPassword(email: string): Promise<void> {
    // Find user
    const user = this.users.find(user => user.email === email);
    
    if (!user) {
      throw new Error('User not found');
    }

    // In a real app, this would send an email with a reset link
    console.log(`Password reset requested for ${email}`);
    
    // For demo purposes, we'll just log it
    return Promise.resolve();
  }
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize the auth service and load user on mount
  useEffect(() => {
    AuthService.initialize();
    
    // Check if user is stored in localStorage
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      setUser(storedUser);
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const authenticatedUser = await AuthService.login(email, password);
      setUser(authenticatedUser);
      saveUserToLocalStorage(authenticatedUser);
      toast({
        title: "Login successful",
        description: `Welcome back, ${authenticatedUser.displayName || 'User'}!`,
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Invalid email or password",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call an API to invalidate the session
      setUser(null);
      removeUserFromLocalStorage();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout failed",
        description: "An error occurred while logging out",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, phoneNumber: string) => {
    setIsLoading(true);
    try {
      const newUser = await AuthService.register(email, password, name, phoneNumber);
      setUser(newUser);
      saveUserToLocalStorage(newUser);
      toast({
        title: "Registration successful",
        description: `Welcome to the platform, ${name}!`,
      });
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during registration",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      await AuthService.resetPassword(email);
      toast({
        title: "Password reset email sent",
        description: "Check your email for instructions to reset your password",
      });
    } catch (error) {
      console.error('Password reset error:', error);
      toast({
        title: "Password reset failed",
        description: error instanceof Error ? error.message : "An error occurred sending the reset email",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    login,
    logout,
    register,
    resetPassword,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
