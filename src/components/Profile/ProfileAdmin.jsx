import React from "react";
import { Container, Button } from "react-bootstrap";
import imagenes from "../../assets/imagenes";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";


const ProfileAdmin = ({user}) => {
  return (
    <Container className="user-profile mt-4">
      <div className="container-profile">
        <div className="d-flex gap-4">
          <div className="account-profile">
            <img src={imagenes.avatar} alt={imagenes.avatar} />
            <h3 className="fw-semibold text-center mt-3">{user.name_user}</h3>
            <div className="section-info">
              <div className="d-flex">
                <IoLocationSharp size={25} color="#000" />
                <span>Bogotá, Cundinamarca</span>
              </div>
              <div className="d-flex">
                <IoMail size={25} color="#000" />
                <span>{user.email}</span>
              </div>
              <div className="d-flex">
                <MdPhoneAndroid size={25} color="#000" />
                <span>301 234 5678</span>
              </div>
            </div>
          </div>
          <div className="column-info">
            <div className="row container-info">
              <h4 className="fw-bold text-start">Detalles de cuenta</h4>
              <div className="d-flex justify-content-between">
                <span>Primer Nombre</span>
                <p>{user.name_user}</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Apellidos</span>
                <p>Uran mejia</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Fecha de cumpleaños</span>
                <p>10 de Junio 1985</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Genero</span>
                <p>Masculino</p>
              </div>
            </div>
            <div className="row container-info">
              <h4 className="fw-bold text-start">Detalles de la Tienda</h4>
              <div className="d-flex justify-content-between">
                <span>Total Usuarios</span>
                <p>cll 12 #3-45</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total Categorías</span>
                <p>Colombia</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total Productos</span>
                <p>Antioquia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileAdmin;
