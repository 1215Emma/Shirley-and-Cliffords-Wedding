import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Utilities/init-firebase";

const AuthContext = createContext({
  currentUser: null,
});

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
