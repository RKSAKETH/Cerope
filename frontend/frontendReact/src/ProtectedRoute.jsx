import React from "react";
import { Navigate, useParams } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const storedId = localStorage.getItem("userId");

  const { id } = useParams(); // get route param

  // 1. User must be logged in
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  // 2. Route :id must match the logged-in user ID
  if (id !== storedId) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
