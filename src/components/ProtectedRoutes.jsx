import React from "react";
import Login from "../pages/Login";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Login />;
  }
  return children;
};

export default ProtectedRoute;
