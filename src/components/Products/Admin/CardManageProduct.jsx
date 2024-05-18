import React, { useState } from "react";

export const CardManageProduct = ({ product, onEditClick, onDeleteClick }) => {

/*   const [editProduct, setEditProduct] = useState({ ...product });
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
    try {
      await productService.updateProductService(product.id, editProduct);
      setShowEditModal(false);
      // Add any additional logic you need after saving changes
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }; */

  return (
    <div className="row">
      <div className="col-10 card-product ">
        <div className="card-body  d-flex flex-row align-items-center">
          <h4 className="col card-title mx-1">{product.id}</h4>
          <p className="col card-text mx-1">{product.name_product}</p>
          <p className="col card-text mx-1">{product.price_product}</p>
          <p className="col card-text mx-1">{product.quantity_product}</p>
          <p className="col card-text mx-1">
            {product.isActive ? "Activo" : "Inactivo"}
          </p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <button className="btn btn-warning mx-1" onClick={onEditClick}>
          Edit
        </button>
        <button className="btn btn-danger mx-1" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
