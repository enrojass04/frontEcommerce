import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBarAdmin from "../../components/NavBar/NavBarAdmin";
import { ImExit } from "react-icons/im";
import imagenes from "../../assets/imagenes";

const HomeAdmin = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <div className="row section-admin">
        <div className="col-3">
          <div className="logo-header-admin mt-2">
            <img src={imagenes.logoSinFond} alt="logo-ecommerce" />
            <h1>EMA Shop</h1>
          </div>
          <NavBarAdmin />
        </div>
        <div className="col-9 section-content">
          <div className="d-flex flex-column mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
