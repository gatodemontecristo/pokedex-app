import { Navigate } from "react-router-dom"
import { useCheckAuth } from "../hooks";

export const PublicRoute = ({children}) => {

    const { status } = useCheckAuth();
      

    return (status !== "authenticated")
    ? children
    : <Navigate to="/search"></Navigate>
}
