import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarUser from "../NavBar/NavBarUser";
import ShoppingCart from "../Cart/ShoppingCart";
import imagenes from "../../assets/imagenes";
import iconos from "../../assets/iconos";
import { CartContext } from "../Cart/CartContext";
import "../../App.css";
import { Button } from "react-bootstrap";
import { IoLogInOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

export const Header = () => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const cartButtonRef = useRef(null);
  const [cartPosition, setCartPosition] = useState({ top: 0, left: 0 });

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    if (cartButtonRef.current) {
      const rect = cartButtonRef.current.getBoundingClientRect();
      setCartPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isCartOpen]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="d-flex aling-item-center">
      <div className="logo-header">
        <img src={imagenes.logoSinFond} alt="logo-ecommerce" />
        <h3>EMA Store</h3>
      </div>
      <NavBarUser />
      <nav>
        <ul>
          {datosUsuario && (
            <li>
              <IoLogInOutline
                size={30}
                variant="danger"
                onClick={logout}
                className="icon"
              />
            </li>
          )}
          <li>
            <Link to="/login">
              <FaRegUser size={23} className="icon" />
            </Link>
          </li>
          {datosUsuario && (
            <li>
              <img
                src={iconos.cart}
                alt="icono cart"
                onClick={toggleCart}
                ref={cartButtonRef}
                className="icon"
              />
            </li>
          )}
        </ul>
      </nav>
      {isCartOpen && (
        <ShoppingCart
          cartItems={cartItems}
          position={cartPosition}
          onClose={toggleCart}
        />
      )}
    </header>
  );
};
