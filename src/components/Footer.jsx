import React from "react";
import "../App.css";

export const Footer = () => {
  return (
    <footer>
      <div class="columnas">
        <div class="columna">
          <h3>Ecommerce</h3>
        </div>
        <div class="columna">
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
        <div class="columna">
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
        <div class="columna">
          <span>Newslater</span>
          <form action="#" method="post" class="formulario">
            <input
              type="email"
              placeholder="Ingresa tu Correo electrónico"
              class="input-correo"
            />
            <span type="submit" class="btn-enviar m-0">
              SUSCRIBETE
            </span>
          </form>
        </div>
      </div>
      <div class="fila">
        <p class="derechos">© 2024 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
