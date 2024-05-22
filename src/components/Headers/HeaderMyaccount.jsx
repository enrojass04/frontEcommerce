import React from "react";
import imagenes from "../../assets/imagenes";
import { Link } from "react-router-dom";

const HeaderMyaccount = () => {
  return (
    <div>
      <section className="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logoSinFond} alt="logo ecoommerce" />
          <h1>Mi cuenta</h1>
          <div className="d-flex justify-content-center">
            <Link to="/">Home </Link> / <p> Mi cuenta</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderMyaccount;
