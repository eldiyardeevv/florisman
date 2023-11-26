import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export const ProtectedPoutes = () => {
  const { user } = useAuthContext();

  function isAllowed() {
    if (user.email === "admin@gmail.com") {
      return true;
    } else {
      return false;
    }
  }
  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};
