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
  const [successMessage, setSuccessMessage] = useState("");

  const getProducts = async (page) => {
    const data = await productService.getAProductsPagesAdmin(page);
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
    const updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
    showTemporaryMessage("¡Producto actualizado correctamente!");
  };

  const handleDeleteProduct = async (productId) => {
    await productService.deleteProductService(productId);
    getProducts(currentPage);
    showTemporaryMessage("¡Producto eliminado correctamente!");
  };

  const showTemporaryMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDelete(true);
  };

  const handleCloseUpdate = () => {
    setSelectedProduct(null);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2 className="text-start fw-bold">Productos</h2>
        <ButtonAdd onClick={() => setShowSave(true)} />
      </div>
      <ModalSave
        showSave={showSave}
        handleCloseSave={() => setShowSave(false)}
        onSave={handleSaveNewProduct}
      />
      <ModalDelete
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
        product={selectedProduct}
        onDelete={handleDeleteProduct}
      />
      <ModalUpdate
        showUpdate={selectedProduct !== null && !showDelete}
        handleCloseUpdate={handleCloseUpdate}
        product={selectedProduct}
        onUpdate={handleUpdateProduct}
      />

      {showSuccessMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}

      <div className="d-flex flex-column mt-5">
        {products?.map((product) => (
          <div key={product.id} className="mb-4">
            <CardManageProduct
              onEditClick={() => handleEditClick(product)}
              onDeleteClick={() => handleDeleteClick(product)}
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

export default ProductListManage;
