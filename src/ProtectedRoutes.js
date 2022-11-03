import { Outlet, Navigate } from "react-router";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";

function ProtectedRoutes() {
  const { isAuth } = useContext(LoginContext);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
