import '../style/NavBar.css'
export const NavBar = () => {
  return (
    <nav className='navbar__container'>
        <button type="button" className="btn btn-warning"><i class="bi bi-list"></i></button>
        <img src="../menu.png" alt="" className="navbar__container--logo"/>
        <div className="navbar__container__user">
            <p className="navbar__container__user--name">Naki Dejo</p>
            <img className="navbar__container__user--img" src="../persona.jpg" alt="" />
            <button  type="button" className="navbar__container__user--logout btn btn-warning"><i class="bi bi-door-open-fill"></i></button>
      </div>
    </nav>
  );
};
