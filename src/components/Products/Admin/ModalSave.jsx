import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as productService from "../../../services/ProductService";
import * as categoryService from "../../../services/CategoryService";

const ModalSave = ({ showSave, handleCloseSave, onSave }) => {
  const [newProduct, setNewProduct] = useState({
    name_product: "",
    price_product: "",
    quantity_product: "",
    isActive: true,
    id_category: "",
  });
  const [imagenBase64, setImagenBase64] = useState("");
  const [categories, setCategories] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryService.getCategoriesService();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveChanges = async () => {
    if (!imagenBase64) {
      setShowFailMessage(true);
      setTimeout(() => {
        setShowFailMessage(false);
      }, 2000);
      return;
    }

    const productToSave = {
      ...newProduct,
      id_category: parseInt(newProduct.id_category, 10),
    };
    try {
      const savedProduct = await productService.createProductService(
        productToSave
      );
      await handleSaveImages(savedProduct.id);
      onSave();
      handleCloseSave();
      resetForm();
      showSuccessNotification();
    } catch (error) {
      showSuccessNotificationFail();
      console.error("Error creating product:", error);
    }
  };

  const resetForm = () => {
    setNewProduct({
      name_product: "",
      price_product: "",
      quantity_product: "",
      description: "",
      id_category: "",
    });
    setImagenBase64("");
  };

  const showSuccessNotification = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

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
    <div>
      {showSuccessMessage && (
        <Alert variant="success">Producto Guardado!!</Alert>
      )}
      <Modal show={showSave} onHide={handleCloseSave}>
        {showFailMessage && (
          <Alert variant="danger">
            Debe cargar una imagen para guardar el producto!!
          </Alert>
        )}
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNameProduct">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name_product"
                value={newProduct.name_product}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPriceProduct">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                name="price_product"
                value={newProduct.price_product}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formQuantityProduct">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity_product"
                value={newProduct.quantity_product}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescriptionProduct">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={newProduct.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCategoryProduct">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="id_category"
                value={newProduct.id_category}
                onChange={handleChange}
                style={{ color: "black" }}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name_category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formImageUpload">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleCloseSave}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalSave;
