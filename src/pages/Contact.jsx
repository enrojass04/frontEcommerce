import React from "react";
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";
import "../App.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div>
      <section className="banner-page d-flex align-items-center justify-content-center">
        <div>
          <img src={imagenes.logoSinFond} alt="logo ecoommerce" />
          <h1>Contactanos</h1>
          <div className="d-flex justify-content-center">
            <Link to="/">Home </Link> /<p> Contactanos</p>
          </div>
        </div>
      </section>
      <div className="form-section">
        <div className="contact">
          <span>¿Tienes Preguntas?</span>
          <h2>¡Estamos Aquí para Ayudarte!</h2>
          <p className="text-start">
            Queremos asegurarnos de que encuentres el equipo tecnológico
            perfecto para tus necesidades. ¡No dudes en contactarnos con
            cualquier pregunta o consulta!
          </p>
          <div className="d-flex gap-3">
            <FaPhoneAlt size={20} color="#38cb89" />
            <p>301 234 5678</p>
          </div>
          <div className="d-flex gap-3">
            <FaMapMarkerAlt size={20} color="#38cb89" />
            <p>cll falsa # 12- 34, El poblado, Medellín</p>
          </div>
          <div className="d-flex gap-3">
            <FaEnvelope size={20} color="#38cb89" />
            <p>info@emastore.com.co</p>
          </div>
        </div>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="full-name">Nombre Completo</label>
              <input type="text" id="full-name" name="full-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tu Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="boton-card">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63462.66425202901!2d-75.61761186642208!3d6.2086653000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429e106acbbfd%3A0x94916f8ec03d8eb0!2sBarrio%20Provenza!5e0!3m2!1ses!2sco!4v1716681056036!5m2!1ses!2sco"
          style={{
            width: "100%",
            height: "50vh",
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
