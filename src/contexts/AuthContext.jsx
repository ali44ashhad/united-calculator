import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("forum_token");
    if (token) {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data.user);
      } catch (error) {
        localStorage.removeItem("forum_token");
        localStorage.removeItem("forum_user");
      }
    }
    setLoading(false);
  };

  const register = async (userData) => {
    try {
      const response = await api.post("/auth/register", userData);
      const { token, user } = response.data;

      localStorage.setItem("forum_token", token);
      localStorage.setItem("forum_user", JSON.stringify(user));
      setUser(user);

      return user;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("forum_token", token);
      localStorage.setItem("forum_user", JSON.stringify(user));
      setUser(user);

      return user;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("forum_token");
    localStorage.removeItem("forum_user");
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
