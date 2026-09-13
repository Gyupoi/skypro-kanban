import { createContext, useContext, useState } from "react";
import { loginUser } from "../api/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem("token")
  );

  const isAuthenticated = Boolean(token);

  const login = async (loginValue, password) => {
    const data = await loginUser(loginValue, password);

    const newToken = data.user.token;

    localStorage.setItem("token", newToken);
    localStorage.setItem("isAuthenticated", "true");

    setToken(newToken);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");

    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
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