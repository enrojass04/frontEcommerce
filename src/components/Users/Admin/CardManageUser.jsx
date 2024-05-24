import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const CardManageUser = ({ user, onEditClick, onDeleteClick }) => {
  return (
    <div className="row card-category">
      <div className="col-10 d-flex align-items-center ">
        <div className="card-body  d-flex flex-row align-items-center">
          <h4 className="col card-title mx-1">{user.id}</h4>
          <p className="col card-text mx-1">{user.name_user}</p>
          <p className="col card-text mx-1">{user.email}</p>
          <p className="col card-text mx-1">
            {user.isActive ? "Activo" : "Inactivo"}
          </p>
          <p className="col card-text mx-1">
            {user.name_role}
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
