import { Navigate } from "react-router-dom";
import { PokeDetailPage, PokeSearchPage } from "../pages";


export const PokeChildRoutes =  [
    { path: "detail", element: <PokeDetailPage></PokeDetailPage> },
    { path: "search", element: <PokeSearchPage></PokeSearchPage> },
    { path: "/*", element: <Navigate to="/search" /> },
    { path: "/", element: <Navigate to="/search" /> },
  ];
