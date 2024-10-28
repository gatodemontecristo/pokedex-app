import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/myRegister.css";
import { useDispatch } from "react-redux";

import { startCreatingUserWithEmailPassword } from "../../store";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNavigateLogin = () => {
    navigate("/auth/login", {
      replace: true,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      alias: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(
          "Ingrese un correo en formato válido (ejm. tuvieja3000@outlook.com)"
        )
        .required("El email es un valor requerido"),
      password: Yup.string()
        .min(6, "La contraseña debe tener mìnimo 6 caracteres")
        .required("La contraseña es un valor requerido"),
      alias: Yup.string().required(
        "El alias es un valor requerido (ejm. bebecitoEmoxito2024)"
      ),
    }),
    onSubmit: (values) => {
      dispatch(
        startCreatingUserWithEmailPassword({
          email: values.email,
          password: values.password,
          displayName: values.alias,
        })
      );
    },
  });

  return (
    <AuthLayout title="Crear cuenta">
      <div className="card__register">
        <form
          className="card__register__form  w-100 "
          onSubmit={formik.handleSubmit}
        >
          <div className="card__register__form__container ">
            <img
              className="card__register__form__container--img"
              src="../banner.png"
              alt=""
            />
            <div className={`form-floating is-invalid w-100`}>
              <input
                type="text"
                className={`form-control`}
                id="floatingInputAlias"
                placeholder="Alias"
                name="alias"
                value={formik.values.alias}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputAlias">Alias</label>
            </div>
            {formik.touched.alias && formik.errors.alias && (
              <div className="alert alert-warning w-100" role="alert">
                <i className="bi bi-exclamation-square"></i>
                {formik.errors.alias}
              </div>
            )}

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
                name="password"
                className={`form-control`}
                id="floatingInputContra"
                placeholder="Contraseña"
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

            <button type="submit" className="btn btn-warning w-100">
              CREAR CUENTA
            </button>

            <div className="card__register__form__container__footer w-100">
              <p className="card__register__form__container__footer--text">
                ¿Ya tienes cuenta?
              </p>
              <a
                className="card__register__form__container__footer--link"
                href=""
                onClick={onNavigateLogin}
              >
                ingresar
              </a>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
