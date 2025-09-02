import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";

const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.user?.data);

  if (!user) {
    console.log("No user yet, redirecting to /sign-in");
    return <Navigate to="/sign-in" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
