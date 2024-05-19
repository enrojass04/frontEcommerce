import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDelete = ({ showDelete, handleCloseDelete, product, onDelete }) => {
  const handleDelete = () => {
    if (product) {
      onDelete(product.id);
      handleCloseDelete();
    }
  };

  return (
    <Modal show={showDelete} onHide={handleCloseDelete}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar el producto {product?.name_product}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseDelete}>
          Cancelar
        </Button>
        <Button type="submit" variant="danger" onClick={handleDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;



