import React from "react";
import "../App.css";
import Login from "../components/Login";
import Register from "../components/Register";
import FooterMyAccount from "../components/Footers/FooterMyAccount";
import HeaderMyaccount from "../components/Headers/HeaderMyaccount";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";

export const MyAccount = () => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  // const user = datosUsuario.user;
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
      <section>
        <HeaderMyaccount />
      </section>

      {datosUsuario && (
        <div>
          <button className="btn btn-primary" onClick={logout}>Cerrrar Sesión</button>
          <section className="login-register">
            <Profile user={datosUsuario.user}/>
          </section>
        </div>
      )}
      {!datosUsuario && (
        <div>
          <section className="login-register">
            <Login />
            <Register />
          </section>
        </div>
      )}
      <section>
        <FooterMyAccount />
      </section>
    </div>
  );
};
