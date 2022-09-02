import { useContext } from "react";
import { AppContext } from "../../lib/app-context";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
