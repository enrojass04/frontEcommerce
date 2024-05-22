import React from "react";
import "../App.css";
import Login from "../components/Login";
import Register from "../components/Register";
import FooterMyAccount from "../components/Footers/FooterMyAccount";
import HeaderMyaccount from "../components/Headers/HeaderMyaccount";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IoLogInOutline } from "react-icons/io5";


export const MyAccount = () => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <section>
        <HeaderMyaccount />
      </section>

      {datosUsuario && (
        <div>
          <section className="login-register">
            <Profile user={datosUsuario.user} />
          </section>
          <Button variant="danger" className="boton-card mb-4" onClick={logout}>
            Cerrar Sesión
            <IoLogInOutline size={30} />
          </Button>
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
