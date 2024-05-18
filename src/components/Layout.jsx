import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Headers/Header";
import { Footer } from "../components/Footers/Footer";

export const Layout = ({id_role}) => {
/*   const [id_role, setId_role] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("dataUserLogin");
    console.log(user);

    if (user === null) {
      setId_role(0);
    } else {
      const parsedUser = JSON.parse(user);
      setId_role(parsedUser.id_role);
    }
  }, []); */
  
  const datosUsuario = JSON.parse(localStorage.getItem('dataUserLogin'));
  console.log(datosUsuario);
  
  

  return (
    <>
      {datosUsuario ? datosUsuario.user.id_role === 1 ? "" : <Header /> : <Header />}
      <Outlet />
      {datosUsuario ? datosUsuario.user.id_role === 1 ? "" : <Footer /> : <Footer />}
    </>
  );
};
