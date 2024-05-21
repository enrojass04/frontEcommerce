import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const CardProduct = ({ product, images }) => {
  const imageUrl = images.length > 0 ? images[0].url_image : undefined;
  //const imageUrl = images.length > 0 ? images[0].url_image : "default_image_url"; /* A */
  return (
    <div className="card">
      {imageUrl && (
        <img
          src={`data:image/png;base64, ${imageUrl}`}
          alt={`Producto ${product.id}`}
          className="card-img-top rounded mt-2"
        />
      )}
      <div className="card-body row">
        <div className="col-12 text-start">
          <h5 className="card-title">{product.name_product}</h5>
        </div>
        <div className="col-12 text-start">
          <p className="card-text">{product.description}</p>
        </div>
        <div className="col-12 text-start">
          <p className="card-text precio">{product.price_product}</p>
        </div>
        <div className="col-12 mt-3">
          <Link to={`/products/${product.id}`} className="boton-card">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
