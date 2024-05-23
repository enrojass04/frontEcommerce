import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const CardManageUser = ({ user, onEditClick, onDeleteClick }) => {
  return (
    <div className="row">
      <div className="col-10 card-product ">
        <div className="card-body  d-flex flex-row align-items-center">
          <h4 className="col card-title mx-1">{user.id}</h4>
          <p className="col card-text mx-1">{user.name_user}</p>
          <p className="col card-text mx-1">{user.email}</p>
          <p className="col card-text mx-1">
            {user.isActive ? "Activo" : "Inactivo"}
          </p>
          <p className="col card-text mx-1">
            {user.id_role ? "Administrador" : "Invitado"}
          </p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <FaEdit
          className="icon-edit"
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={onEditClick}
        />
        <FaTrash
          className="icon-delete"
          style={{ cursor: "pointer" }}
          onClick={onDeleteClick}
        />
      </div>
    </div>
  );
};
