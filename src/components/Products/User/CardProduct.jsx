import React from "react";

const CardProduct = ({ product }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body row ">
          <h4 className="card-title col">{product.name_product}</h4>
          <p className="card-text col">{product.description}</p>
          <p className="card-text col">{product.price_product}</p>
          <a href="#" className="btn btn-primary">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
