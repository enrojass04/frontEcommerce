import React from "react";
import { Outlet, Link } from "react-router-dom";

const Manage = () => {
  return (
    <div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="my-2 border border-dark">
            <Link to="user" className="text-dark text-decoration-none p-2">
              User
            </Link>
          </div>
          <div className="my-2 border border-dark">
            <Link to="category" className="text-dark text-decoration-none p-2">
              Category
            </Link>
          </div>
          <div className="my-2 border border-dark">
            <Link to="product" className="text-dark text-decoration-none p-2">
              Product
            </Link>
          </div>
        </div>
        <div className="col-9">
          <div className="d-flex flex-column mt-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
