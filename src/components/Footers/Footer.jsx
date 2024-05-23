import React from "react";
import "../../App.css";
import imagenes from "../../assets/imagenes";

export const Footer = () => {
  return (
    <footer>
      <div className="columnas">
        <div className="columna">
          <img src={imagenes.logoSinFond} alt="logo-ecommerce" />
          <h3>EMA Store</h3>
        </div>
        <div className="columna">
          <span>Links</span>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="columna">
          <span>Help</span>
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
          <span>Newslater</span>
          <form action="#" method="post" className="formulario">
            <input
              type="email"
              placeholder="Ingresa tu Correo electrónico"
              className="input-correo"
            />
            <span type="submit" className="btn-enviar m-0">
              SUSCRIBETE
            </span>
          </form>
        </div>
      </div>
      <div className="fila">
        <p className="derechos">© 2024 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
