import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const CardManageCategory = ({ category, onEdit, onDelete }) => {
  return (
    <div className="row card-product">
      <div className="col-10 card-category d-flex align-items-center">
        <div className="card-body d-flex flex-row align-items-center">
          <h4 className="col card-title mx-1">{category.id}</h4>
          <p className="col card-text mx-1">{category.name_category}</p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <FiEdit
          className="icon-edit"
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={onEdit}
        />
        <FiTrash2
          className="icon-delete"
          style={{ cursor: "pointer" }}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};
