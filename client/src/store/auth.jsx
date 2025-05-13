import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  const storeTokenInLocalStorage = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const authenticateJwt = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setUser(res_data.userData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let isLoggedIn = !!token;

  useEffect(() => {
    authenticateJwt();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLocalStorage, LogoutUser, isLoggedIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside the context provider");
  } else {
    return authContextValue;
  }
};
