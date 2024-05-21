import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as productService from "../../../services/ProductService";
import * as imageService from "../../../services/ImageService";

const ModalUpdate = ({ showUpdate, handleCloseUpdate, product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    isActive: product ? product.isActive : false,
  });

  const [imagenBase64, setImagenBase64] = useState("");

  useEffect(() => {
    if (showUpdate && product) {
      setUpdatedProduct(product);
    }
  }, [showUpdate, product]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: inputValue,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedProductResponse = await productService.updateProductService(
        product.id,
        updatedProduct
      );
      if (imagenBase64 !== "") {
        handleSaveImages();
      }
      onUpdate(updatedProductResponse.data);
      handleCloseUpdate();
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  // images
  const handleSaveImages = async () => {
    try {
      const imageToSave = { url_image: imagenBase64, id_product: product.id };

      await imageService.createImageService(imageToSave);
    } catch (error) {
      console.error("Error creating image:", error);
    }
  };

  const handleFileChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagenBase64(reader.result.split(",")[1]);
      };
      reader.readAsDataURL(archivo);
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
              value={updatedProduct.name_product || ""}
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
              value={updatedProduct.price_product || ""}
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
              value={updatedProduct.quantity_product || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Estado del Producto</label>
            <Form.Check
              type="checkbox"
              name="isActive"
              label={updatedProduct.isActive ? "Activo" : "No Activo"}
              checked={updatedProduct.isActive}
              onChange={handleInputChange}
            />
          </div>
          <Form.Group controlId="formImageUpload">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
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
