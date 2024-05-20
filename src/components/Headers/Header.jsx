// src/components/Header.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBarUser from "../NavBar/NavBarUser";
import ModalCart from "../Cart/ModalCart";
import imagenes from "../../assets/imagenes";
import iconos from "../../assets/iconos";
import { CartContext } from "../Cart/CartContext";
import "../../App.css";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));

  const openModal = () => {
    setIsModalOpen(true);
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
                onClick={openModal}
              />
            </li>
          )}
        </ul>
      </nav>
      {isModalOpen && (
        <ModalCart
          cartItems={cartItems}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </header>
  );
};

