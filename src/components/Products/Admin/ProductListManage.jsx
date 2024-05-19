import React, { useEffect, useState } from "react";
import { CardManageProduct } from "./CardManageProduct";
import * as productService from "../../../services/ProductService";
import ButtonAdd from "../../ButtonAdd";
import ModalSave from "./ModalSave";
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";

const ProductListManage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSave, setShowSave] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleSaveNewProduct = () => {
    getProducts(currentPage);
  };

  const handleUpdateProduct = (updatedProduct) => {
    getProducts(currentPage); // Refrescar la lista de productos
    setShowSuccessMessage(true); // Mostrar mensaje de éxito
    setTimeout(() => {
      setShowSuccessMessage(false); // Ocultar mensaje después de 3 segundos
    }, 3000);
  };

  return (
    <div>
      <ButtonAdd onClick={() => setShowSave(true)} />
      <ModalSave
        showSave={showSave}
        handleCloseSave={() => setShowSave(false)}
        onSave={handleSaveNewProduct}
      />
      <ModalDelete
        showDelete={showDelete}
        handleCloseDelete={() => setShowDelete(false)}
      />
      <ModalUpdate
        showUpdate={selectedProduct !== null}
        handleCloseUpdate={() => setSelectedProduct(null)}
        product={selectedProduct}
        onUpdate={handleUpdateProduct}
      />

      <div className="d-flex flex-column mt-3">
        {products?.map((product) => (
          <div key={product.id} className="mb-4">
            <CardManageProduct
              onEditClick={() => setSelectedProduct(product)}
              onDeleteClick={() => setShowDelete(true)}
              key={product.id}
              product={product}
            />
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
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
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
            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          >
            <a className="page-link" href="#" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          ¡Producto actualizado correctamente!
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowSuccessMessage(false)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default ProductListManage;


