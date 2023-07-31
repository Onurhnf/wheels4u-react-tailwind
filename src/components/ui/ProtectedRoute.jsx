import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../auth/hooks/useUser.js";
import Loader from "./Loader.jsx";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
