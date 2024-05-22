import React from 'react';
import { IoLogInOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProfileAdmin from '../../components/Profile/ProfileAdmin';

const MyAccountAdmin = () => {
    
    const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
    const navigate = useNavigate();
    const logout = () => {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    };

    return (
    <div>
        <div>
          <section className="login-register">
            <ProfileAdmin user={datosUsuario.user} />
          </section>
          <Button variant="danger" className="boton-card mb-4" onClick={logout}>
            Cerrar Sesión
            <IoLogInOutline size={30} />
          </Button>
        </div>
    </div>
  )
}

export default MyAccountAdmin