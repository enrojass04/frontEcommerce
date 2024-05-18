import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBarAdmin from "../components/NavBar/NavBarAdmin";

import imagenes from "../assets/imagenes";

const Manage = () => {
  return (
    <div className="w-100">
      <div className="row">
        <div className="col-3">
          <div className="logo-header">
            <img src={imagenes.logo} alt="logo-ecommerce" />
            <h4>Ecommerce</h4>
          </div>
          <NavBarAdmin />
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
