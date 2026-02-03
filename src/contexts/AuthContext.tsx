import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authAPI } from '../lib/api';
import type { UserProfile, UserRole } from '../lib/api';

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, role: UserRole, organizationName?: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isProjectProponent: boolean;
  isContractor: boolean;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on mount
  const checkAuth = async () => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await authAPI.getCurrentUser();

      if (error || !data) {
        throw new Error(error || 'Failed to fetch user');
      }

      setUser(data.user);
      setUserProfile(data.profile);
    } catch (error) {
      console.error('Auth check failed:', error);
      // Clear invalid tokens
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
      setUserProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      try {
        const { data, error } = await authAPI.getCurrentUser();
        if (!error && data) {
          setUserProfile(data.profile);
        }
      } catch (error) {
        console.error('Failed to refresh profile:', error);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await authAPI.signIn(email, password);

      if (error || !data) {
        return { error: new Error(error || 'Sign in failed') };
      }

      setUser(data.user);
      setUserProfile(data.profile);
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error('Sign in failed')
      };
    }
  };

  const signUp = async (
    email: string,
    password: string,
    role: UserRole,
    organizationName?: string
  ) => {
    try {
      const { data, error } = await authAPI.signUp(email, password, role, organizationName);

      if (error || !data) {
        return { error: new Error(error || 'Sign up failed') };
      }

      setUser(data.user);
      setUserProfile(data.profile);
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error('Sign up failed')
      };
    }
  };

  const signOut = async () => {
    await authAPI.signOut();
    setUser(null);
    setUserProfile(null);
  };

  // Helper computed properties
  const isAdmin = userProfile?.role === 'admin';
  const isProjectProponent = userProfile?.role === 'project_proponent';
  const isContractor = userProfile?.role === 'contractor';

  return (
    <AuthContext.Provider value={{
      user,
      userProfile,
      loading,
      signIn,
      signUp,
      signOut,
      isAdmin,
      isProjectProponent,
      isContractor,
      refreshProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
