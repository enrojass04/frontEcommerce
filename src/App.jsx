import react from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { MyAccount } from "./pages/MyAccount";
import { Carrito } from "./pages/Carrito";
import { Products } from "./pages/Products";
import Manage from "./pages/Manage";
import ListManageProduct from "./components/ListManageProduct";
import ListManageUser from "./components/ListManageUser";
import ListManageCategory from "./components/ListManageCategory";

function App() {
  return (
    <div>
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
