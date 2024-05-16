import React from "react";
import { Outlet, Link } from "react-router-dom";

const Manage = () => {
  return (
    <div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div>
            <Link to="product">Product</Link>
          </div>
          <div>
            <Link to="user">User</Link>
          </div>
          <div>
            <Link to="category">Category</Link>
          </div>
        </div>
        <div className="col-9">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary me-5 mb-3">Add User</button>
          </div>
          <div>
            <div className="d-flex flex-column mt-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
