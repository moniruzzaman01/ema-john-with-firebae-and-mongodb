import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../hooks/usefirebase";

const RequireAuth = ({ children }) => {
  const { user } = useFirebase();
  const location = useLocation();
  console.log(user);
  if (!user) {
    return (
      <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default RequireAuth;
