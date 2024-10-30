import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const token = localStorage.getItem("token");
  console.log(token)
  return token ? element : <Navigate to="/Login" replace />;
}

export default ProtectedRoute;
