import React from "react";
import "../../App.css";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import FooterMyAccount from "../../components/Footers/FooterMyAccount";
import HeaderMyaccount from "../../components/Headers/HeaderMyaccount";
import Profile from "../../components/Profile/Profile";

export const MyAccount = () => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));

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
