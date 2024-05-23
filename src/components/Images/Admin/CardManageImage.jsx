import React from "react";
import { FiTrash2 } from "react-icons/fi";

export const CardManageImage = ({ image, onDelete }) => {
  return (
    <div className="row card-product">
      <div className="col-10 card-image ">
        <div className="card-body  d-flex flex-row align-items-center">
          <img
            src={image.url_image}
            alt="thumbnail"
            className="img-thumbnail mx-1"
            style={{ width: "100px", height: "100px" }}
          />
          <h4 className="col card-title mx-1">{image.id}</h4>
          <p className="col card-text mx-1 overflow-auto">{image.url_image}</p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <FiTrash2
          className="icon-delete"
          style={{ cursor: "pointer" }}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};
