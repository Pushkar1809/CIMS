import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isLoggedIn }) => {
	// console.log("isLoggedIn", isLoggedIn);
	return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
