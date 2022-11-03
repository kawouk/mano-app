import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [realUser, setRealUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [item, setItem] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        realUser,
        setRealUser,
        isAuth,
        setIsAuth,
        item,
        setItem,
        products,
        setProducts,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
