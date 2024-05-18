import react, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import { HomeUser } from "./pages/User/HomeUser";
import { Contact } from "./pages/Contact";
import { MyAccount } from "./pages/MyAccount";
import { Carrito } from "./pages/Carrito";
import { Products } from "./pages/Products";
import Manage from "./pages/Manage";
import ProductListManage from "./components/Products/Admin/ProductListManage";
import ListManageUser from "./components/Users/Admin/ListManageUser";
import ListManageCategory from "./components/Categories/Admin/ListManageCategory";
import HomeAdmin from "./pages/Admin/HomeAdmin";

function App() {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));

  return (
    <div className="container-fluid h-100">
      <BrowserRouter>
        {datosUsuario ? (
          datosUsuario.user.id_role === 1 ? (
            <Routes>
              <Route path="/" element={<HomeAdmin />}>
                <Route path="product" element={<ProductListManage />} />
                <Route path="user" element={<ListManageUser />} />
                <Route path="category" element={<ListManageCategory />} />
              </Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomeUser />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<MyAccount />} />
                <Route path="carrito" element={<Carrito />} />
                <Route path="products" element={<Products />} />
              </Route>
            </Routes>
          )
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomeUser />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<MyAccount />} />
              <Route path="carrito" element={<Carrito />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
