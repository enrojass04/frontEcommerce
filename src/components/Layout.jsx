import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Headers/Header";
import { Footer } from "../components/Footers/Footer";

export const Layout = () => {
 
  const datosUsuario = JSON.parse(localStorage.getItem('dataUserLogin'));  
  

  return (
    <>
      {datosUsuario ? datosUsuario.user.id_role === 1 ? "" : <Header /> : <Header />}
      <Outlet />
      {datosUsuario ? datosUsuario.user.id_role === 1 ? "" : <Footer /> : <Footer />}
    </>
  );
};
