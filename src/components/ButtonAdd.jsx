import React from "react";
import { FaPlus } from "react-icons/fa";

const ButtonAdd = ({ onClick }) => {
  return (
    <div onClick={onClick} className="d-flex align-items-center gap-3">
      <FaPlus className="icon-add " />
      <h5 className="m-0">Añadir Nuevo</h5>
    </div>
  );
};

export default ButtonAdd;
