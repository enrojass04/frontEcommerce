import React, { useContext, useMemo, useEffect, useRef } from "react";
import { CartContext } from "../Cart/CartContext";
import "../styles/ShoppingCart.css";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ position, onClose }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  // *uso de redirección con navigate
  const HandleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    if (cartRef.current) {
      cartRef.current.style.top = `${position.top}px`;
      cartRef.current.style.left = `${position.left - 300}px`; // Adjusting for the width of the cart
    }
  }, [position]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div
      ref={cartRef}
      className="shopping-cart"
      style={{
        height: "80vh",
        width: "300px",
        position: "absolute",
      }}
    >
      <div className="shopping-cart-header">
        <h4 className="fw-bold">Shopping Cart</h4>
        <button onClick={onClose} className="btn-close"></button>
      </div>
      <div className="shopping-cart-body">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <span>{item.name}</span>
              <span>
                {item.price} x {item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-cart-footer">
        <strong>Total: </strong> ${totalPrice.toFixed(2)}
      </div>
      <div className="shopping-cart-footer">
        <button onClick={clearCart} className="boton-card">
          Vaciar Carrito
        </button>
        <button onClick={HandleCheckout} className="boton-card">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
