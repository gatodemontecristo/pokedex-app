import "../styles/authLogin.css";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="auth__container">
      <div className="auth__container__card">
        <h2 className="auth__container__card--title">{title}</h2>
        {children}
      </div>
    </div>
  );
};
