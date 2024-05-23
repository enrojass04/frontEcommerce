import React, { useState } from "react";
import "../../App.css";

export const HomeUser = () => {
  return (
    <>
      <section className="section-banner">
        <div className="banner">
          <div className="info-banner">
            <span className="fw-bold text-start">Llega lo nuevo</span>
            <h1 className="title-banner fw-bold text-start">
              Descubre nuestra<br></br>nueva colección
            </h1>
            <p className="text-start">
              Descubre nuestra nueva colección de tecnología avanzada.
              ¡Innovación y calidad en cada producto, no te lo pierdas!
            </p>
          </div>
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
        </div>
      </section>
    </>
  );
};
