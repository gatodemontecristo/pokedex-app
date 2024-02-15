import { CheckingAuth } from "../ui";
import { AuthChildRoutes, AuthRoutes } from "../auth";
import { PokeChildRoutes, PokeRoutes } from "../pokedex";
import { useSelector } from "react-redux";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const CreateRouter = () => {
  const { status } = useSelector((state) => state.auth);

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
