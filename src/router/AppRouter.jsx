import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthChildRoutes, AuthRoutes } from "../auth";

const router = createBrowserRouter([
    {
      path: "/auth",
      element:<AuthRoutes></AuthRoutes>,
      children: AuthChildRoutes
    }
     
  ]);

  export const AppRouter = () => {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  };
  