import React from "react";
import { Navigate } from "react-router-dom";
import { childrenType } from "../../Types";

export const ProtectedRoute = ({ children }: childrenType) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
