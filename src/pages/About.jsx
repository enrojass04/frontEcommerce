import React from "react";
//assets
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";
import "../App.css";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { IoLogoApple } from "react-icons/io";

const About = () => {
  return (
    <div>
      <section className="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logoSinFond} alt="logo ecoommerce" />
          <h1>Acerca de</h1>
          <div className="d-flex justify-content-center">
            <Link to="/">Home </Link> /<p> Acerca de</p>
          </div>
        </div>
      </section>
      <div className="section-history d-flex">
        <div className="col texto-parrafo">
          <h1>
            Nuestra <span>historia</span>
          </h1>
          <p>
            Nos conocimos en un bootcamp de desarrollo web y descubrimos nuestra
            pasión compartida por el e-commerce. Juntos decidimos emprender esta
            tienda virtual, combinando nuestras habilidades y experiencias para
            ofrecerte los mejores productos y una experiencia de compra
            excepcional. ¡Bienvenido a nuestra tienda!
          </p>
        </div>
        <div className="col imagen-historia">
          <img src={imagenes.imagenabout} alt="" />
        </div>
      </div>
      <div className="section-team">
        <h2 className="fw-bold">
          Nuestro <span>equipo de trabajo</span>
        </h2>
        <div className="team-work">
          <div className="card-team">
            <img src={imagenes.desarrollador1} alt="" />
            <span>Edwin Rojas s</span>
            <p>Desarrollador FullStack</p>
          </div>
          <div className="card-team">
            <img src={imagenes.desarrollador2} alt="" />
            <span>Alejandro Lora</span>
            <p>Desarrollador Back</p>
          </div>
          <div className="card-team">
            <img src={imagenes.desarrollador3} alt="" />
            <span>Manuel Chicangana</span>
            <p>Desarrollador Front</p>
          </div>
        </div>
      </div>
      <div className="section-cifras">
        <div className="card-cifra">
          <IoPhonePortraitOutline size={70} color="#38cb89" />
          <span>Equipos vendidos</span>
          <p>800</p>
        </div>
        <div className="card-cifra">
          <HiUsers size={70} color="#38cb89" />
          <span>Clientes felices</span>
          <p>1.500</p>
        </div>
        <div className="card-cifra">
          <IoLogoApple size={70} color="#38cb89" />
          <span>Marcas aliadas</span>
          <p>30</p>
        </div>
      </div>
      <div className="section-brands">
        <h2 className="fw-bold">
          Nuestras <span>Alianzas</span>
        </h2>
        <p>
          Estas marcas confiaron en nosotros para ser el mejor de distribuidor
          de tecnología en Latinoamérica.
        </p>
        <div className="group-brand">
          <div className="brand1">
            <img src={imagenes.marca1} alt="" />
          </div>
          <div className="brand2">
            <img src={imagenes.marca2} alt="" />
          </div>
          <div className="brand3">
            <img src={imagenes.marca3} alt="" />
          </div>
          <div className="brand4">
            <img src={imagenes.marca4} alt="" />
          </div>
          <div className="brand5">
            <img src={imagenes.marca5} alt="" />
          </div>
          <div className="brand6">
            <img src={imagenes.marca6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
