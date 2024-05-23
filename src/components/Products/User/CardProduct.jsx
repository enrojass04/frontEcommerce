import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { CartContext } from "../../Cart/CartContext";

const CardProduct = ({ product, images }) => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const isUserLogged = datosUsuario?.user?.id_role === 2;

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
      id: product.id,
      name: product.name_product,
      price: product.price_product,
      quantity: quantity,
      image: images.length > 0 ? images[0].url_image : "", // Asignar la primera imagen
    };
    addToCart(newItem);
  };

  const imageUrl = images.length > 0 ? images[0].url_image : undefined;

  return (
    <div className="card">
      {imageUrl && (
        <img
          src={`data:image/png;base64, ${imageUrl}`}
          alt={`Producto ${product.id}`}
          className="card-img-top rounded my-2"
        />
      )}
      <div className="card-body row">
        <div className="col-12">
          <h5 className="card-title">{product.name_product}</h5>
        </div>
        <div className="col-12">
          <p className="card-text">{product.description}</p>
        </div>
        <div className="col-12">
          <p className="card-text precio">{product.price_product}</p>
        </div>
        <div className="col-12 mt-3">
          <Link to={`/products/${product.id}`} className="boton-card">
            Más detalles
          </Link>
          {product.quantity_product === 0 ? (
            <p className="mt-3">Producto Agotado</p>
          ) : (
            <>
              <div className="quantity-selector my-3">
                <button
                  onClick={handleDecrement}
                  className="boton-card mx-1"
                  disabled={!isUserLogged}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="boton-card mx-1"
                  disabled={!isUserLogged}
                >
                  +
                </button>
                <button
                  className="boton-card mx-1"
                  disabled={!isUserLogged}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
