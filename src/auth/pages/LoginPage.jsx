import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout"
import "../styles/myLogin.css";
import { startGoogleSignIn } from "../../store";
import { useDispatch} from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onNavigateRegister = () =>{
    navigate('/auth/register',{
      replace: true
  });
  }

  const onGoogleSignIn = () =>{
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <div className="card__login">
        <form className="card__login__form w-100" action="">
          <div className="card__login__form__container">
            <img className="card__login__form__container--img" src="../banner.png" alt="" />
            <div className={`form-floating is-invalid w-100`}>
              <input
                type="email"
                className={`form-control`}
                id="floatingInputCorreo"
                placeholder="Correo"
                // onChange={onNumberChange}
                // value={numberValue.numero}
              />
              <label htmlFor="floatingInputCorreo">Correo</label>
              <div className="invalid-feedback">
                Ingrese un correo en formato válido (ejm.
                tuvieja3000@outlook.com)
              </div>
            </div>

            <div className={`form-floating is-invalid w-100`}>
              <input
                type="password"
                className={`form-control`}
                id="floatingInputContra"
                placeholder="Contraseña"
                // onChange={onNumberChange}
                // value={numberValue.numero}
              />
              <label htmlFor="floatingInputContra">Contraseña</label>
              <div className="invalid-feedback">
                Ingrese un contraseña valida
              </div>
            </div>
            <div className="card__login__form__container__buttons w-100">
            <button type="button" className="card__login__form__container__buttons--login btn btn-warning">LOGIN</button>
            <button type="button" onClick={onGoogleSignIn} className="card__login__form__container__buttons--social btn btn-warning"><i className="bi bi-google"></i></button>
            <button type="button" className="card__login__form__container__buttons--social btn btn-warning"><i className="bi bi-facebook"></i></button>
            <button type="button" className="card__login__form__container__buttons--social btn btn-warning"><i className="bi bi-linkedin"></i></button>
            </div>  
                
            <div className="card__login__form__container__footer w-100">
              <a className="card__login__form__container__footer--link" href="" onClick={onNavigateRegister}>Crear cuenta</a>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
