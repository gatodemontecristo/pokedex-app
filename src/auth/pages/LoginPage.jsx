import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import "../styles/myLogin.css";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import * as Yup from "yup";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onNavigateRegister = () => {
    navigate("/auth/register", {
      replace: true,
    });
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("El email es un valor requerido"),
      password: Yup.string().required("La contraseña es un valor requerido"),
    }),
    onSubmit: (values) => {
      dispatch(
        startLoginWithEmailPassword({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <AuthLayout title="Login">
      <div className="card__login">
        <form
          className="card__login__form w-100"
          onSubmit={formik.handleSubmit}
        >
          <div className="card__login__form__container">
            <img
              className="card__login__form__container--img"
              src="../banner.png"
              alt=""
            />
            <div className={`form-floating is-invalid w-100`}>
              <input
                type="email"
                className={`form-control`}
                id="floatingInputCorreo"
                placeholder="Correo"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputCorreo">Correo</label>
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="alert alert-warning w-100" role="alert">
                <i className="bi bi-exclamation-square"></i>
                {formik.errors.email}
              </div>
            )}

            <div className={`form-floating is-invalid w-100`}>
              <input
                type="password"
                className={`form-control`}
                id="floatingInputContra"
                placeholder="Contraseña"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputContra">Contraseña</label>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="alert alert-warning w-100" role="alert">
                <i className="bi bi-exclamation-square"></i>
                {formik.errors.password}
              </div>
            )}
            <div className="card__login__form__container__buttons w-100">
              <button
                type="submit"
                className="card__login__form__container__buttons--login btn btn-warning"
              >
                LOGIN
              </button>
              <button
                type="button"
                onClick={onGoogleSignIn}
                className="card__login__form__container__buttons--social btn btn-warning"
              >
                <i className="bi bi-google"></i>
              </button>
              <button
                type="button"
                className="card__login__form__container__buttons--social btn btn-warning"
              >
                <i className="bi bi-facebook"></i>
              </button>
              <button
                type="button"
                className="card__login__form__container__buttons--social btn btn-warning"
              >
                <i className="bi bi-linkedin"></i>
              </button>
            </div>

            <div className="card__login__form__container__footer w-100">
              <a
                className="card__login__form__container__footer--link"
                href=""
                onClick={onNavigateRegister}
              >
                Crear cuenta
              </a>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
