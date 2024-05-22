import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as categoryService from "../../../services/CategoryService";

const ModalSave = ({ showSave, handleCloseSave, onSave }) => {
  const [newCategory, setNewCategory] = useState({
    name_category: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
    if (!newCategory.name_category) {
      setShowFailMessage(true);
      setTimeout(() => {
        setShowFailMessage(false);
      }, 2000);
      return;
    }

    try {
      await categoryService.createCategory(newCategory);
      onSave();
      handleCloseSave();
      resetForm();
      showSuccessNotification();
    } catch (error) {
      console.error("Error creating category:", error);
      showSuccessNotificationFail();
    }
  };

  const resetForm = () => {
    setNewProduct({
      name_category: "",
    });
  };

  const showSuccessNotification = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div>
      {showSuccessMessage && (
        <Alert variant="success">Producto Guardado!!</Alert>
      )}
      <Modal show={showSave} onHide={handleCloseSave}>
        {showFailMessage && (
          <Alert variant="danger">No se pudo agregar la categoría!!</Alert>
        )}
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNameCategory">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                name="name_category"
                value={newCategory.name_category}
                onChange={handleChange}
              />
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
