import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store";
import "../style/NavBar.css";
export const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const { email, displayName, photoURL } = useSelector((state) => state.auth);
  console.log(email, displayName, photoURL);
  return (
    <nav className="navbar__container">
      <button type="button" className="btn btn-warning">
        <i className="bi bi-list"></i>
      </button>
      <img src="../menu.png" alt="" className="navbar__container--logo" />
      <div className="navbar__container__user">
        <div>
          <p className="navbar__container__user--name">{displayName}</p>
          <p className="navbar__container__user--name">{email}</p>
        </div>
        <img
          className="navbar__container__user--img"
          src={photoURL || "../persona.jpg"}
          // onError={(e) => {
          //   e.currentTarget.src = "../persona.jpg";
          // }}
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
