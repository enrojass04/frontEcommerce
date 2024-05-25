import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiUsers, FiImage } from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoLogInOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";

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
          <li className="my-4">
            <Link to="/" className="text-navbar-admin">
              <FiHome size={25} color="#38CB89" />
              Inicio
            </Link>
          </li>
          <li className="my-4">
            <Link to="user" className="text-navbar-admin">
              <FiUsers size={25} color="#38CB89" />
              Usuarios
            </Link>
          </li>
          <li className="my-4">
            <Link to="category" className="text-navbar-admin">
              <TbCategory size={25} color="#38CB89" />
              Categorías
            </Link>
          </li>
          <li className="my-4">
            <Link to="product" className="text-navbar-admin">
              <HiComputerDesktop size={25} color="#38CB89" />
              Productos
            </Link>
          </li>
          <li className="my-4">
            <Link to="image" className="text-navbar-admin">
              <FiImage size={25} color="#38CB89" />
              Imágenes
            </Link>
          </li>
          <Button variant="danger" className="boton-card mb-4" onClick={logout}>
            Cerrar Sesión
            <IoLogInOutline size={30} />
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAdmin;
