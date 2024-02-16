import { CheckingAuth } from "../ui";
import { AuthChildRoutes, AuthRoutes } from "../auth";
import { PokeChildRoutes, PokeRoutes } from "../pokedex";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useCheckAuth } from "../hooks";

export const CreateRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return [
      {
        path: "*",
        element: <CheckingAuth />,
      },
    ];
  } else {
    return [
      {
        path: "/auth",
        element: <PublicRoute><AuthRoutes></AuthRoutes></PublicRoute>,
        children: AuthChildRoutes,
      },
      {
        path: "/",
        element: <PrivateRoute><PokeRoutes /></PrivateRoute>,
        children: PokeChildRoutes,
      },
    ];
  }
};
