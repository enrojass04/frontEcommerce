import React from "react";
import { Link } from "react-router-dom";
import imagenes from "../../../assets/imagenes";
import "../../../App.css";

const CardProduct = ({ product }) => {
  const numProducto = product.id;
  const imagenUrl = imagenes[`imgpro${numProducto}`];
  return (
    // <div>
    //   <div className="card">
    //     <div className="card-body row ">
    //       <h5 className="card-title col">{product.name_product}</h5>
    //       <p className="card-text col">{product.description}</p>
    //       <p className="card-text col">{product.price_product}</p>
    //       <Link to={`/products/${product.id}`} className="btn btn-primary">
    //         Ver más
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="card">
      <img
        src={imagenUrl}
        className="card-img-top"
        alt={`Producto ${numProducto}`}
      />
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
