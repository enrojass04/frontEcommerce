import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as categoryService from "../../../services/CategoryService";

const ModalUpdate = ({ showUpdate, handleCloseUpdate, category, onUpdate }) => {
  const [updatedCategory, setUpdatedCategory] = useState({
    name_category: "",
  });

  useEffect(() => {
    if (showUpdate && category) {
      setUpdatedCategory(category);
    }
  }, [showUpdate, category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedCategoryResponse = await categoryService.updateCategory(
        category.id,
        updatedCategory
      );
      onUpdate(updatedCategoryResponse.data);
      handleCloseUpdate();
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
    }
  };

  return (
    <Modal show={showUpdate} onHide={handleCloseUpdate}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Categoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Nombre de la categoría</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="name_category"
              value={updatedCategory.name_category || ""}
              onChange={handleInputChange}
            />
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
