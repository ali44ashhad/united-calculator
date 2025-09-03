import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const user = JSON.parse(localStorage.getItem("forum_current_user"));
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem("forum_users")) || [];

    // Check if user already exists
    if (users.find((u) => u.email === userData.email)) {
      throw new Error("User with this email already exists");
    }

    if (users.find((u) => u.username === userData.username)) {
      throw new Error("Username already taken");
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
      joinDate: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("forum_users", JSON.stringify(users));
    localStorage.setItem("forum_current_user", JSON.stringify(newUser));
    setCurrentUser(newUser);

    return newUser;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("forum_users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem("forum_current_user", JSON.stringify(user));
    setCurrentUser(user);

    return user;
  };

  const logout = () => {
    localStorage.removeItem("forum_current_user");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
