import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as serviceUser from "../../../services/UserService";

const ModalUpdate = ({ showUpdate, handleCloseUpdate, user, onUpdate }) => {

  const [updatedUser, setUpdatedUser] = useState({
    isActive: user ? user.isActive : false,
  });

  useEffect(() => {
    if (showUpdate && user) {
      setUpdatedUser(user);
    }
  }, [showUpdate, user]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: inputValue,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const updatedUserResponse = await serviceUser.updateUser(
        user.id,
        updatedUser
      );
      console.log(updatedUserResponse);
      onUpdate(updatedUserResponse.data);
      handleCloseUpdate();
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <Modal show={showUpdate} onHide={handleCloseUpdate}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNameUser">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              name="name_user"
              value={updatedUser.name_user}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Check
              type="checkbox"
              name="isActive"
              label={updatedUser.isActive ? "Activo" : "No Activo"}
              checked={updatedUser.isActive}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
        <Button variant="secondary" onClick={handleCloseUpdate}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdate;
