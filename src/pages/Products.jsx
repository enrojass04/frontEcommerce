import React from "react";
//assets
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";
import "../App.css";
import ProductList from "../components/Products/User/ProductList";

export const Products = () => {
  return (
    <div>
      <section className="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logo} alt="logo ecoommerce" />
          <h1>Productos</h1>
          <div className="d-flex justify-content-center">
            <Link to="/">Home </Link> / 
            <p> Productos</p>
          </div>

        </div>
      </section>
      <div className="d-flex justify-content-center">
        <ProductList />
      </div>
    </div>
  );
};
