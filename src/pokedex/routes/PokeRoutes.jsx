import { Outlet } from "react-router-dom";
import { NavBar } from "../../ui";

export const PokeRoutes = () => {
    return (
      <>
      <NavBar></NavBar>
        <Outlet></Outlet>
      </>
    );
  };
  