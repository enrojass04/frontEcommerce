import React from "react";
//assets

import { Link } from "react-router-dom";
import "../App.css";
import Login from "../components/Login";
import Register from "../components/Register";
import FooterMyAccount from "../components/FooterMyAccount";
import HeaderMyaccount from "../components/HeaderMyaccount";

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
