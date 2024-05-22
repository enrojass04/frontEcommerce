import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import { HomeUser } from "./pages/User/HomeUser";
import { Contact } from "./pages/Contact";
import { MyAccount } from "./pages/MyAccount";
import { Carrito } from "./pages/Carrito";
import { Products } from "./pages/Products";
import { Checkout } from "./pages/Checkout";
import ProductListManage from "./components/Products/Admin/ProductListManage";
import ListManageUser from "./components/Users/Admin/ListManageUser";
import ListManageCategory from "./components/Categories/Admin/ListManageCategory";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import ProductDetail from "./components/Products/User/ProductDetail";
import ListManageImage from "./components/Images/Admin/ListManageImage";
import { CartProvider } from "./components/Cart/CartContext";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeAdmin />}>
      <Route path="product" element={<ProductListManage />} />
      <Route path="user" element={<ListManageUser />} />
      <Route path="category" element={<ListManageCategory />} />
      <Route path="image" element={<ListManageImage />} />
    </Route>
  </Routes>
);

const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomeUser />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<MyAccount />} />
      <Route path="carrito" element={<Carrito />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetail />} />
    </Route>
  </Routes>
);

function App() {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const isAdmin = datosUsuario?.user?.id_role === 1;

  return (
    <div className="container-fluid h-100">
      <CartProvider>
        <BrowserRouter>
          {datosUsuario ? (
            isAdmin ? (
              <AdminRoutes />
            ) : (
              <UserRoutes />
            )
          ) : (
            <UserRoutes />
          )}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
