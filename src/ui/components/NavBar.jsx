import { useDispatch } from "react-redux";
import { startLogout } from "../../store";
import "../style/NavBar.css";
export const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
    console.log("handleLogout");
  };
  return (
    <nav className="navbar__container">
      <button type="button" className="btn btn-warning">
        <i className="bi bi-list"></i>
      </button>
      <img src="../menu.png" alt="" className="navbar__container--logo" />
      <div className="navbar__container__user">
        <p className="navbar__container__user--name">Naki Dejo</p>
        <img
          className="navbar__container__user--img"
          src="../persona.jpg"
          alt=""
        />
        <button
          type="button"
          className="navbar__container__user--logout btn btn-warning"
          onClick={handleLogout}
        >
          <i className="bi bi-door-open-fill"></i>
        </button>
      </div>
    </nav>
  );
};
