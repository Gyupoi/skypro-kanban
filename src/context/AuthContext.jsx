import { createContext, useContext, useState } from "react";
import { loginUser } from "../api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = Boolean(token);

  const login = async (loginValue, password) => {
    const data = await loginUser(loginValue, password);

    const newToken = data.user.token;

    localStorage.setItem("token", newToken);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(data.user));

    setToken(newToken);
    setUser(data.user);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
