import React, { useEffect, useState } from "react";
import { CardManageProduct } from "./CardManageProduct";
import * as productService from "../../../services/ProductService";
import ButtonAdd from "../../ButtonAdd";

const ListManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Inicializar en la primera página

  const getProducts = async (page) => {
    const data = await productService.getAProductsPages(page);
    setProducts(data.products);
    setTotalPages(data.totalPages);
    setCurrentPage(data.currentPage);
  };

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

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
      <ButtonAdd/>

      <div className="d-flex flex-column mt-3">
        {products?.map((product) => (
          <div key={product.id} className="mb-4">
            <CardManageProduct key={product.id} product={product} />
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination">
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

export default ListManageProduct;
