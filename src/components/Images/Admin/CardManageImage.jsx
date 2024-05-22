import React from "react";

export const CardManageImage = ({ image }) => {
  return (
    <div className="row">
      <div className="col-10 card-image ">
        <div className="card-body  d-flex flex-row align-items-center">
          <img
            src={image.url_image}
            alt="thumbnail"
            className="img-thumbnail mx-1"
            style={{ width: "100px", height: "100px" }}
          />
          <h4 className="col card-title mx-1">{image.id}</h4>
          <p className="col card-text mx-1">{image.url_image}</p>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        <button className="btn btn-warning mx-1" >
          Edit
        </button>
        <button className="btn btn-danger mx-1">
          Delete
        </button>
      </div>
    </div>
  );
};
