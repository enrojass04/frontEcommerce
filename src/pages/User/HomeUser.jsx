import React, { useState } from "react";
import "../../App.css";
import imagenes from "../../assets/imagenes";

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
        <div className="categorias">
          <h2>
            Nuestras mejores <span>categorias</span>
          </h2>
          <div className="grid-categorias">
            <div className="cat1 row justify-content-center">
              <img src={imagenes.catCelulares} alt={imagenes.catCelulares} />
              <span>Celulares</span>
            </div>
            <div className="cat2 row justify-content-center">
              <img
                src={imagenes.catComputadores}
                alt={imagenes.catComputadores}
              />
              <span>Computadores</span>
            </div>
            <div className="cat3 row justify-content-center">
              <img
                src={imagenes.catTelevisores}
                alt={imagenes.catTelevisores}
              />
              <span>Televisores</span>
            </div>
            <div className="cat4 row justify-content-center">
              <img src={imagenes.catConsolas} alt={imagenes.catConsolas} />
              <span>Consolas</span>
            </div>
            <div className="cat5 row justify-content-center">
              <img src={imagenes.catReloges} alt={imagenes.catReloges} />
              <span>Relojes</span>
            </div>
            <div className="cat6 row justify-content-center">
              <img src={imagenes.catCamaras} alt={imagenes.catCamaras} />
              <span>Camaras</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
