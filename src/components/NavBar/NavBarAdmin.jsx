import React from "react";
import { Link } from "react-router-dom";

const NavBarAdmin = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <nav>
        <ul className="d-flex flex-column justify-content-center align-items-center">
          <li className="my-3">
            <Link to="/" className="text-dark text-decoration-none p-2">
              Inicio
            </Link>
          </li>
          <li className="my-3">
            <Link to="user" className="text-dark text-decoration-none p-2">
              User
            </Link>
          </li>
          <li className="my-3">
            <Link to="category" className="text-dark text-decoration-none p-2">
              Category
            </Link>
          </li>
          <li className="my-3">
            <Link to="product" className="text-dark text-decoration-none p-2">
              Product
            </Link>
          </li>
          <li className="my-3">
            <Link to="image" className="text-dark text-decoration-none p-2">
              Image
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAdmin;
