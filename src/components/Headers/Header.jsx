import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavBarUser from "../NavBar/NavBarUser";
//assets
import imagenes from "../../assets/imagenes";
import iconos from "../../assets/iconos";
import "../../App.css";

export const Header = () => {

  const datosUsuario = JSON.parse(localStorage.getItem('dataUserLogin'));

  return (
    <header>
      <div className="logo-header">
        <img src={imagenes.logo} alt="logo-ecommerce" />
        <h3>Ecommerce</h3>
      </div>
      <NavBarUser/>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <img src={iconos.login} alt="icono Login" />
            </Link>
          </li>
          {datosUsuario && <li>
            <Link to="/carrito">
              <img src={iconos.cart} alt="icono cart" />
            </Link>
          </li>}
        </ul>
      </nav>
    </header>
  );
};
