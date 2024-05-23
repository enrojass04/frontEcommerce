import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const CardManageProduct = ({ product, onEditClick, onDeleteClick }) => {
  return (
    <div className="row card-product ">
      <div className="col-10 d-flex align-items-center">
        <div className="card-body  d-flex flex-row align-items-center">
          <h4 className="col-1 card-title mx-1">{product.id}</h4>
          <p className="col-2 card-text mx-1">{product.name_product}</p>
          <p className="col-1 card-text mx-1">{product.price_product}</p>
          <p className="col-1 card-text mx-1">{product.quantity_product}</p>
          <p className="col card-text mx-1">{product.description}</p>
          <p className="col-1 card-text mx-1">
            {product.isActive ? "Activo" : "Inactivo"}
          </p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <FiEdit
          className="icon-edit"
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={onEditClick}
        />
        <FiTrash2
          className="icon-delete"
          style={{ cursor: "pointer" }}
          onClick={onDeleteClick}
        />
      </div>
    </div>
  );
};
