import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Cart/CartContext";

const CardProductDetail = ({ product, images }) => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const isUserLogged = datosUsuario?.user?.id_role === 2;

  const imageUrl1 = images.length > 0 ? images[0].url_image : "default_image_url";

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    const newItem = {
      name: product.name_product,
      price: product.price_product,
      quantity: quantity,
    };
    addToCart(newItem);
  };

  return (
    <div>
      <div>
        <Link to="/products" className="btn btn-primary">
          Regresar
        </Link>
      </div>
      <div className="card">
        <img
          src={`data:image/png;base64, ${imageUrl1}`}
          alt={`Producto ${product.id}`}
          className="card-img-top rounded mt-2"
        />

        
        {/* <img
          src={`data:image/png;base64, ${imageUrl2}`}
          alt={`Producto ${product.id}`}
          className="card-img-top rounded mt-2"
        /> */}
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
              <button
                className="btn btn-primary"
                disabled={!isUserLogged}
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
