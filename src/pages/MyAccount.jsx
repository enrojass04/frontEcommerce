import React from "react";
import "../App.css";
import Login from "../components/Login";
import Register from "../components/Register";
import FooterMyAccount from "../components/Footers/FooterMyAccount";
import HeaderMyaccount from "../components/Headers/HeaderMyaccount";

export const MyAccount = () => {
  return (
    <div>
      <HeaderMyaccount/>
      <section className="login-register">
        <Login />
        <Register />
      </section>
      <section>
        <FooterMyAccount />
      </section>
    </div>
  );
};
