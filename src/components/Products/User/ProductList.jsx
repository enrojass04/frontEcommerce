import React, { useEffect, useState } from "react";
import CardProduct from "../User/CardProduct";
import FooterMyAccount from "../../Footers/FooterMyAccount";
import * as productService from "../../../services/ProductService";
import * as categoryService from "../../../services/CategoryService";
import iconos from "../../../assets/iconos";
import "../../../App.css";
import { IoFilterCircleOutline } from "react-icons/io5";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getProducts = async (page, category = "") => {
    let data;
    if (category) {
      data = await productService.getProductsByCategory(category);
    } else {
      data = await productService.getAProductsPages(page);
    }
    setProducts(data.products);
    setTotalPages(data.totalPages || 1);
    setCurrentPage(data.currentPage || 1);
  };

  const getCategories = async () => {
    try {
      const data = await categoryService.getCategoriesService();
      if (Array.isArray(data.categories)) {
        setCategories(data.categories);
      } else {
        console.error(
          "El servicio de categorías no devolvió un array válido:",
          data
        );
      }
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setCurrentPage(1);
    getProducts(1, selectedCategory);
  };

  useEffect(() => {
    getProducts(currentPage, category);
    getCategories();
  }, [currentPage, category]);

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="d-flex align-items-center gap-2 mb-3 form-container-filter">
            <div>
              <IoFilterCircleOutline size={30} color="#38cb89" />
            </div>
            <select
              className="form-select"
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name_category}
                </option>
              ))}
            </select>
          </div>
          {/* Cambiar numero de columna cambia cantidad de productos col-12 muestra 1 col-6 muestra 2 col-4 muestra 3*/}
          {products?.map((product) => (
            <div key={product.id} sm={12} md={6} lg={4} className="col-4 mb-4">
              <CardProduct
                key={product.id}
                product={product}
                images={product.images}
              />
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a className="page-link" href="#" onClick={handlePrevious}>
              Previous
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index + 1}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a className="page-link" href="#" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;
