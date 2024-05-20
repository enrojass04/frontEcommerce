// src/components/Cart/ShoppingCart.jsx
import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
      <div className="shopping-cart-header">
        <h2>Shopping Cart</h2>
      </div>
      <div className="shopping-cart-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>{item.quantity} x ${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="shopping-cart-footer">
        <button onClick={clearCart} className="btn btn-secondary">
          Clear Cart
        </button>
        <button onClick={handleCheckout} className="btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;




