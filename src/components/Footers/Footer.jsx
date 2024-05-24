import React from "react";
import "../../App.css";
import imagenes from "../../assets/imagenes";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="columnas">
        <div className="columna">
          <div className="align-items-center">
            <img src={imagenes.logoSinFond} alt="logo-ecommerce" />
            <h3>EMA Store</h3>
          </div>
        </div>
        <div className="columna">
          <span>Paginas</span>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </ul>
        </div>
        <div className="columna">
          <span>Ayuda</span>
          <ul>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </div>
        <div className="columna">
          <span>Suscribete</span>
          <form action="#" method="post" className="formulario">
            <input
              type="email"
              placeholder="Ingresa tu Correo electrónico"
              className="input-correo"
            />
            <span type="submit" className="boton-card m-0 fw-bold">
              Suscribete
            </span>
          </form>
        </div>
      </div>
      <div className="fila">
        <p className="derechos">© 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
