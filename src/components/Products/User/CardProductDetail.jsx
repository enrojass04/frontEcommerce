import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardProductDetail = ({ product }) => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const isUserLogged = datosUsuario?.user?.id_role === 2;

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <div>
        <Link to="/products" className="btn btn-primary">
          Regresar
        </Link>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title col">{product.name_product}</h3>
          <p className="card-text col">{product.price_product}</p>
          <p className="card-text col">{product.description}</p>
          <div>
            <div className="quantity-selector">
              <button
                onClick={handleDecrement}
                className="btn btn-secondary mx-2"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="btn btn-secondary mx-2"
              >
                +
              </button>
              <button className="btn btn-primary" disabled={!isUserLogged}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
