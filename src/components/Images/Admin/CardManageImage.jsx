import React from "react";
import { FiTrash2 } from "react-icons/fi";

export const CardManageImage = ({ image, onDelete }) => {
  return (
    <div className="row w-70 card-images d-flex flex-row align-items-center">
      <div className="col-10 card-image ">
        <div className="card-body d-flex flex-row align-items-center">
          <div className="col-2">
            <h4 className="card-title mx-1">{image.id}</h4>
          </div>
          <div className="col">
            <img
              src={`data:image/jpeg;base64,${image.url_image}`}
              alt="thumbnail"
              className="img-thumbnail mx-1"
              style={{ width: "90px", height: "90px" }}
            />
          </div>
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
