import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import "../styles/myRegister.css";

export const RegisterPage = () => {

  const navigate = useNavigate();
  const onNavigateLogin = () =>{
    navigate('/auth/login',{
      replace: true
  });
  }

  return (
    <AuthLayout title="Crear cuenta">
      <div className="card__register">
        <form className="card__register__form w-100" action="">
          <div className="card__register__form__container">
          <img className="card__register__form__container--img" src="../banner.png" alt="" />
            <div className={`form-floating is-invalid w-100`}>
              <input
                type="text"
                className={`form-control`}
                id="floatingInputAlias"
                placeholder="Alias"
                // onChange={onNumberChange}
                // value={numberValue.numero}
              />
              <label htmlFor="floatingInputAlias">Alias</label>
              <div className="invalid-feedback">
                Ingrese un alias en formato válido (ejm. bebecitoEmoxito2024)
              </div>
            </div>

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

            <button type="button" className="btn btn-warning w-100">CREAR CUENTA</button>
                
            <div className="card__register__form__container__footer w-100">
              <p className="card__register__form__container__footer--text">¿Ya tienes cuenta?</p>
              <a className="card__register__form__container__footer--link" href="" onClick={onNavigateLogin}>ingresar</a>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
