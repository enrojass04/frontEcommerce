import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";

const NavBarAdmin = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <nav>
        <ul className="d-flex flex-column justify-content-start align-items-start">
          <li className="my-3">
            <ImExit size={24} className="icon-logout" onClick={logout} />
          </li>
          <li className="my-3">
            <Link to="/" className="text-dark text-decoration-none">
              Inicio
            </Link>
          </li>
          <li className="my-3">
            <Link to="user" className="text-dark text-decoration-none">
              Usuarios
            </Link>
          </li>
          <li className="my-3">
            <Link to="category" className="text-dark text-decoration-none">
              Categorías
            </Link>
          </li>
          <li className="my-3">
            <Link to="product" className="text-dark text-decoration-none">
              Productos
            </Link>
          </li>
          <li className="my-3">
            <Link to="image" className="text-dark text-decoration-none">
              Imágenes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAdmin;
