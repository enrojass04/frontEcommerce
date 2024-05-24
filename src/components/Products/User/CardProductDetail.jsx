import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Cart/CartContext";

const CardProductDetail = ({ product, images }) => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const isUserLogged = datosUsuario?.user?.id_role === 2;

  const imageUrls = [];
  for (let i = 0; i < 3; i++) {
    const imageUrl = images.length > i ? images[i].url_image : undefined;
    imageUrls.push(imageUrl);
  }

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
      image: imageUrls[0], // Asignar la primera imagen
    };
    addToCart(newItem);
  };

  return (
    <div>
      <div className="card">
        <div className="d-flex justify-content-star m-2">
          <Link to="/products" className="boton-card">
            Regresar
          </Link>
        </div>
        <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <div className="card-body">
              <h3 className="card-title col">{product.name_product}</h3>
              <p className="card-text col">{product.price_product}</p>
              <p className="card-text col">{product.description}</p>
            </div>
            {product.quantity_product === 0 ? (
              <p className="mb-5">Producto Agotado</p>
            ) : (
              <>
                <div className="quantity-selector my-3">
                  <button
                    onClick={handleDecrement}
                    className="boton-card"
                    disabled={!isUserLogged}
                  >
                    -
                  </button>
                  <span className="quantity mx-2">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="boton-card"
                    disabled={!isUserLogged}
                  >
                    +
                  </button>
                  <button
                    className="boton-card mx-4"
                    disabled={!isUserLogged}
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col-7">
            <div className="row ">
              <div className="col-8">
                <div className="m-3">
                  {imageUrls[0] && (
                    <img
                      src={`data:image/png;base64, ${imageUrls[0]}`}
                      alt={`Producto ${product.id}`}
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>
              <div className="col-4">
                {imageUrls.map(
                  (imageUrl, index) =>
                    imageUrl && (
                      <div className="col m-3" key={index}>
                        <img
                          src={`data:image/png;base64, ${imageUrl}`}
                          alt={`Producto ${product.id}`}
                          className="tamano-imagen"
                        />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
