// src/components/Header.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBarUser from "../NavBar/NavBarUser";
import ShoppingCart from "../Cart/ShoppingCart";
import imagenes from "../../assets/imagenes";
import iconos from "../../assets/iconos";
import { CartContext } from "../Cart/CartContext";
import "../../App.css";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="logo-header">
        <img src={imagenes.logo} alt="logo-ecommerce" />
        <h3>Ecommerce</h3>
      </div>
      <NavBarUser />
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <img src={iconos.login} alt="icono Login" />
            </Link>
          </li>
          {datosUsuario && (
            <li>
              <img
                src={iconos.cart}
                alt="icono cart"
                onClick={toggleCart}
              />
            </li>
          )}
        </ul>
      </nav>
      <ShoppingCart isOpen={isCartOpen} />
    </header>
  );
};
