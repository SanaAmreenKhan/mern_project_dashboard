import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API = import.meta.env.VITE_API;

  const storeTokenInLocalStorage = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const authenticateJwt = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        setUser(res_data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let isLoggedIn = !!token;

  const getAllServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/services`, {
        method: "GET",
      });
      if (response.ok) {
        setServices(await response.json());
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticateJwt();
    getAllServices();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLocalStorage,
        LogoutUser,
        isLoggedIn,
        user,
        services,
        token: `Bearer ${token}`,
        isLoading,
        API,
      }}
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
