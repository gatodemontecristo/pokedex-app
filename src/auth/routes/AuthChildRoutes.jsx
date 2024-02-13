import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";


export const AuthChildRoutes =  [
    { path: "login", element: <LoginPage></LoginPage> },
    { path: "register", element: <RegisterPage></RegisterPage> },
    { path: "/auth/*", element: <Navigate to="/auth/login" /> },
    { path: "/auth/", element: <Navigate to="/auth/login" /> },
  ];
