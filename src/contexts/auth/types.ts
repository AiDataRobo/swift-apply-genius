
import { Session, User } from '@supabase/supabase-js';

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string, phoneNumber: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  isLoading: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
