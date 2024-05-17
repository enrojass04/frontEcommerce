import react from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import { Home } from "./pages/User/Home";
import { Contact } from "./pages/Contact";
import { MyAccount } from "./pages/MyAccount";
import { Carrito } from "./pages/Carrito";
import { Products } from "./pages/Products";
import Manage from "./pages/Manage";
import ListManageProduct from "./components/Products/Admin/ListManageProduct";
import ListManageUser from "./components/Users/Admin/ListManageUser";
import ListManageCategory from "./components/Categories/Admin/ListManageCategory";

function App() {
  return (
    <div className="container-fluid h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<MyAccount />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="products" element={<Products />} />
            <Route path="manage" element={<Manage />}>
              <Route path="product" element={<ListManageProduct />} />
              <Route path="user" element={<ListManageUser />} />
              <Route path="category" element={<ListManageCategory />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
