import { CheckingAuth } from "../ui";
import { AuthChildRoutes, AuthRoutes } from "../auth";
import { PokeChildRoutes, PokeRoutes } from "../pokedex";
import { useSelector } from "react-redux";

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
        element: <AuthRoutes></AuthRoutes>,
        children: AuthChildRoutes,
      },
      {
        path: "/",
        element: <PokeRoutes />,
        children: PokeChildRoutes,
      },
    ];
  }
};
