import React, { useEffect, useState } from "react";
import { CardManageProduct } from "./CardManageProduct";
import * as productService from "../../../services/ProductService";
import ButtonAdd from "../../ButtonAdd";
import ModalSave from "./ModalSave";
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";

const ProductListManage = () => {
  const [showSave, setShowSave] = useState(false);
  const handleCloseSave = () => setShowSave(false);
  const handleShowSave = () => setShowSave(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (product) => {
    setSelectedProduct(product); // Guardar el producto seleccionado en el estado
    setShowUpdate(true);
  };

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para almacenar el producto seleccionado

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

  const handleSaveNewProduct = async () => {
    getProducts(currentPage);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      // Lógica para actualizar el producto en el estado del componente ProductListManage
      // Por ejemplo:
      const updatedProducts = products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <div>
      <ButtonAdd onClick={handleShowSave} />
      <ModalSave
        showSave={showSave}
        handleCloseSave={handleCloseSave}
        onSave={handleSaveNewProduct}
      />
      <ModalDelete
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <ModalUpdate
        showUpdate={showUpdate}
        handleCloseUpdate={handleCloseUpdate}
        product={selectedProduct} // Pasar el producto seleccionado al modal de edición
        onUpdate={handleUpdateProduct} // Agregar la función onUpdate
      />

      <div className="d-flex flex-column mt-3">
        {products?.map((product) => (
          <div key={product.id} className="mb-4">
            <CardManageProduct
              onEditClick={() => handleShowUpdate(product)} // Pasar el producto al hacer clic en editar
              onDeleteClick={() => handleShowDelete()}
              key={product.id}
              product={product}
            />
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation">
        {/* Resto del código para la paginación */}
      </nav>
    </div>
  );
};

export default ProductListManage;


