
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock implementation - replace with real authentication
  const login = async (email: string, password: string) => {
    // In a real app, you would call your auth service here
    console.log('Login attempted with', email, password);
    setUser({
      displayName: 'Test User',
      photoURL: null,
      email: email
    });
  };

  const logout = async () => {
    // In a real app, you would call your auth service here
    console.log('Logout attempted');
    setUser(null);
  };

  const register = async (email: string, password: string, name: string) => {
    // In a real app, you would call your auth service here
    console.log('Register attempted with', email, password, name);
    setUser({
      displayName: name,
      photoURL: null,
      email: email
    });
  };

  const resetPassword = async (email: string) => {
    // In a real app, you would call your auth service here
    console.log('Password reset attempted for', email);
  };

  const value = {
    user,
    login,
    logout,
    register,
    resetPassword
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
