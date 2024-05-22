import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as roleService from "../../../services/RoleService";
import * as userService from "../../../services/UserService";

const ModalSave = ({ showSave, handleCloseSave, onSave }) => {
  const [newUser, setNewUser] = useState({
    name_user: "",
    email: "",
    password: "",
    isActive: true,
    id_role: "",
  });
  const [roles, setRoles] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await roleService.getRolesService();
        setRoles(data.roles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUser({
      ...newUser,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveChanges = async () => {
    if (!newUser.email) {
      setShowFailMessage(true);
      setTimeout(() => {
        setShowFailMessage(false);
      }, 2000);
      return;
    }
    const UserToSave = {
      ...newUser,
      id_role: parseInt(newUser.id_role, 10),
    };
    try {
      await userService.createUser(UserToSave);
      onSave();
      handleCloseSave();
      resetForm();
      showSuccessNotification();
    } catch (error) {
        console.error("Error creating user:", error);
        showSuccessNotificationFail();
    }
  };

  const resetForm = () => {
    setNewUser({
      name_user: "",
      email: "",
      password: "",
      isActive: true,
      id_role: "",
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
        <Alert variant="success">Usuario Creado!!</Alert>
      )}
      <Modal show={showSave} onHide={handleCloseSave}>
        {showFailMessage && (
          <Alert variant="danger">No se pudo agregar el usuario!!</Alert>
        )}
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
                value={newUser.name_user}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formUserRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="id_role"
                value={newUser.id_role}
                onChange={handleChange}
                style={{ color: "black" }}
              >
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name_role}
                  </option>
                ))}
              </Form.Control>
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
