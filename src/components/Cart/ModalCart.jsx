import React from "react";
import { Modal, ListGroup, Button } from 'react-bootstrap';

const ModalCart = ({ cartItems, isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems && cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - {item.price} - {item.quantity}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={onClose}>
          Comprar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCart;



