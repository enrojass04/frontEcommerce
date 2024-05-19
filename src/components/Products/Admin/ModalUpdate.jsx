import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as productService from "../../../services/ProductService";

const ModalUpdate = ({ showUpdate, handleCloseUpdate, product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    if (showUpdate) {
      // Cargar los datos del producto al abrir el modal para su edición
      setUpdatedProduct(product);
    }
  }, [showUpdate, product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedProductResponse = await productService.updateProductService(product.id, updatedProduct);
      onUpdate(updatedProductResponse); // Actualizar el producto en el componente padre
      handleCloseUpdate(); // Cerrar el modal después de la actualización
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <Modal show={showUpdate} onHide={handleCloseUpdate}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group">
            <label htmlFor="productName">Nombre del Producto</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="name_product"
              value={updatedProduct.name_product || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Precio del Producto</label>
            <input
              type="text"
              className="form-control"
              id="productPrice"
              name="price_product"
              value={updatedProduct.price_product || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity">Cantidad del Producto</label>
            <input
              type="text"
              className="form-control"
              id="productQuantity"
              name="quantity_product"
              value={updatedProduct.quantity_product || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Estado del Producto</label>
            <select
              className="form-control"
              name="isActive"
              value={updatedProduct.isActive || ""}
              onChange={handleInputChange}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          {/* Otros campos del formulario */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseUpdate}>
          Cerrar
        </Button>
        <Button type="submit" variant="primary" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdate;

