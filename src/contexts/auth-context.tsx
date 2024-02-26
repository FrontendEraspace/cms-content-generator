import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

type User = {
  email: string;
};

type AuthContext = {
  user: User | null;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = cookies.token;
        if (!token) {
          setIsAuthenticated(false);
        }
        setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = async () => {
    try {
      removeCookie("token");
      setUser(null);
      setIsAuthenticated(false);
      router.replace("/auth/login");
    } catch (error) {
      console.error(`Logout failed: ${error}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
