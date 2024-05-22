import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

export const CardManageCategory = ({ category, onEdit, onDelete }) => {
  return (
    <div className="row">
      <div className="col-10 card-category">
        <div className="card-body d-flex flex-row align-items-center">
          <h4 className="col card-title mx-1">{category.id}</h4>
          <p className="col card-text mx-1">{category.name_category}</p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <FaEdit
          className="icon-edit"
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={onEdit}
        />
        <FaTrash
          className="icon-delete"
          style={{ cursor: "pointer" }}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};
