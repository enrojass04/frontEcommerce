import React from "react";
import { Link, NavLink } from "react-router-dom";

//assets
import imagenes from "../assets/imagenes";
import iconos from "../assets/iconos";
import "../App.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-header">
        <img src={imagenes.logo} alt="logo-ecommerce" />
        <h1>Ecommerce</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contactanos</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <img src={iconos.login} alt="icono Login" />
            </Link>
          </li>
          <li>
            <Link to="/carrito">
              <img src={iconos.cart} alt="icono cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
