import React from "react";
import { Link } from "react-router-dom";

const NavBarUser = () => {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
};

export default NavBarUser;
