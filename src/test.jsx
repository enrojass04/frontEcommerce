/* import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import { HomeUser } from "./pages/User/HomeUser";
import { Contact } from "./pages/Contact";
import { MyAccount } from "./pages/MyAccount";
import { Carrito } from "./pages/Carrito";
import { Products } from "./pages/Products";
import ProductListManage from "./components/Products/Admin/ProductListManage";
import ListManageUser from "./components/Users/Admin/ListManageUser";
import ListManageCategory from "./components/Categories/Admin/ListManageCategory";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import ProductDetail from "./components/Products/User/ProductDetail";
import ListManageImage from "./components/Images/Admin/ListManageImage"


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
      <BrowserRouter>
        {datosUsuario ? (isAdmin ? <AdminRoutes /> : <UserRoutes />) : <UserRoutes />}
      </BrowserRouter>
    </div>
  );
}

export default App; 



// src/components/CardProductDetail/CardProductDetail.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Cart/CartContext";

const CardProductDetail = ({ product }) => {
  const datosUsuario = JSON.parse(localStorage.getItem("dataUserLogin"));
  const isUserLogged = datosUsuario?.user?.id_role === 2;

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      name: product.name_product,
      price: product.price_product,
      quantity: quantity,
    };
    addToCart(newItem);
  };

  return (
    <div>
      <div>
        <Link to="/products" className="btn btn-primary">
          Regresar
        </Link>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title col">{product.name_product}</h3>
          <p className="card-text col">{product.price_product}</p>
          <p className="card-text col">{product.description}</p>
          <div>
            <div className="quantity-selector">
              <button
                onClick={handleDecrement}
                className="btn btn-secondary mx-2"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="btn btn-secondary mx-2"
              >
                +
              </button>
              <button
                className="btn btn-primary"
                disabled={!isUserLogged}
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
 */