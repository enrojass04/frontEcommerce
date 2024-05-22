import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

export const CardManageProduct = ({ product, onEditClick, onDeleteClick }) => {
  return (
    <div className="row">
      <div className="col-10 card-product ">
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
        <FaEdit className="icon-edit" style={{ cursor: 'pointer', marginRight: '10px' }} onClick={onEditClick}/>
        <FaTrash className="icon-delete" style={{ cursor: 'pointer' }} onClick={onDeleteClick}/>
      </div>
    </div>
  );
};
