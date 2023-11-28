import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  function isAllowed() {
    if (user.email === "gulmira.kulunova.ch@gmail.com") {
      return true;
    } else {
      return false;
    }
  }
  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};
