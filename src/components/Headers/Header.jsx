import React, { useState, useContext, useRef, useEffect } from "react";
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
  const cartButtonRef = useRef(null);
  const [cartPosition, setCartPosition] = useState({ top: 0, left: 0 });

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

  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));

  return (
    <header>
      <div className="logo-header">
        <img src={imagenes.logo} alt="logo-ecommerce" />
        <h3>EMA Store</h3>
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
                ref={cartButtonRef}
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
