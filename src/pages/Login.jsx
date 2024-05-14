import React from "react";
//assets
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";
import "../App.css";

function LoginForm() {
  return (
    <div className="columna">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="campo">
          <label htmlFor="email_login">Correo electrónico:</label>
          <input type="email" id="email_login" name="email_login" required />
        </div>
        <div className="campo">
          <label htmlFor="password_login">Contraseña:</label>
          <input
            type="password"
            id="password_login"
            name="password_login"
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

function RegisterForm() {
  return (
    <div className="columna">
      <h2>Registro</h2>
      <form>
        <div className="campo">
          <label htmlFor="nombre_registro">Nombre:</label>
          <input
            type="text"
            id="nombre_registro"
            name="nombre_registro"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="email_registro">Correo electrónico:</label>
          <input
            type="email"
            id="email_registro"
            name="email_registro"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="password_registro">Contraseña:</label>
          <input
            type="password"
            id="password_registro"
            name="password_registro"
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

function CallToAction() {
  return (
    <div class="banner-call">
      <div>
        <h3>Domicilio gratis</h3>
        <p>For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div>
        <h3>Garantia de 90 días</h3>
        <p>For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div>
        <h3>pagos seguros</h3>
        <p>For all oders over $50, consectetur adipim scing elit.</p>
      </div>
    </div>
  );
}

export const Login = () => {
  return (
    <div>
      <section class="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logo} alt="logo ecoommerce" />
          <h1>Mi cuenta</h1>
          <div class="d-flex justify-content-center">
            <Link to="/">Home </Link> / <p> Mi cuenta</p>
          </div>
        </div>
      </section>
      <section class="login-register">
        <LoginForm />
        <RegisterForm />
      </section>
      <CallToAction />
    </div>
  );
};
