import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthChildRoutes, AuthRoutes } from "../auth";
import { PokeChildRoutes, PokeRoutes } from "../pokedex";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthRoutes></AuthRoutes>,
    children: AuthChildRoutes,
  },
  {
    path: "/",
    element: <PokeRoutes />,
    children: PokeChildRoutes,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
