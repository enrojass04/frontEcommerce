import React, { useState } from "react";
import * as loginService from "../../services/LoginService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const changeEmail = (email) => {
    setEmail(email.target.value);
  };
  const changePassword = (password) => {
    setPassword(password.target.value);
  };

  const loginUser = async (event) => {
    event.preventDefault();
    let data = { email, password };
    try {
      const resp = await loginService.loginService(data);

      if (resp.ok) {
        const result = await resp.json();
        localStorage.setItem("dataUserLogin", JSON.stringify(result));
        setMessage("Bienvenido");
        setTimeout(() => {
          setMessage("");
          navigate("/");
          window.location.reload();
        }, 2000);
      } else {
        setMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión", error);
      setMessage("Ocurrió un error. Intente nuevamente.");
    }
  };

  return (
    <div className="columna">
      <h2>Iniciar sesión</h2>
      <form onSubmit={loginUser}>
        <div className="campo">
          <label htmlFor="email_login">Correo electrónico:</label>
          <input type="email" id="email" name="email" onChange={changeEmail} />
        </div>
        <div className="campo">
          <label htmlFor="password_login">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changePassword}
          />
        </div>
        <button type="submit" className="boton-card">
          Iniciar sesión
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
