import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imagenes from "../../assets/imagenes";
import { IoWallet, IoLocationSharp, IoMail } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import "../styles/Profile.css";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <Container className="user-profile mt-4">
      <div className="container-profile">
        <div className="d-flex gap-4">
          <div className="account-profile">
            <img src={imagenes.avatar} alt={imagenes.avatar} />
            <h3 className="fw-semibold text-center mt-3">{user.name_user}</h3>
            <div className="d-flex balance-tag">
              <IoWallet size={25} color="#B88E2F" />
              <span>Balance: $5.000</span>
            </div>
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
              <h4 className="fw-bold text-start">Dirección de envio</h4>
              <div className="d-flex justify-content-between">
                <span>Dirección</span>
                <p>cll 12 #3-45</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Pais</span>
                <p>Colombia</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Departamento</span>
                <p>Antioquia</p>
              </div>
              <div className="d-flex justify-content-between">
                <span>Ciudad</span>
                <p>Medellín</p>
              </div>
            </div>
          </div>
          <div className="col payment">
            <h4 className="fw-bold text-start">Metodos de pago</h4>
            <img src={imagenes.creditCard} alt={imagenes.creditCard} />
            <div className="d-flex justify-content-between">
              <span>Tipo de Tarjeta</span>
              <p>VISA</p>
            </div>
            <div className="d-flex justify-content-between">
              <span>Titular</span>
              <p>Rigoberto Uran</p>
            </div>
            <div className="d-flex justify-content-between">
              <span>Expira</span>
              <p>12/30</p>
            </div>
            <div className="d-flex justify-content-between">
              <span>Numero de la tarjeta</span>
              <p>1234 4587 6333 4578</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
/* import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className="my-account">
      <div className="profile-picture">
        <img src={user.profilePicture} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.name_user}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default Profile
 */
