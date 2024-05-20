import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import * as imageService from "../../../services/ImageService";

const ModalSave = ({ showSave, handleCloseSave, onSave }) => {
  // const [newImage, setNewImage] = useState({ url_image: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [imagenBase64, setImagenBase64] = useState("");
/* 
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await imageService.uploadImage(formData);
        setNewImage({ url_image: response.url_image });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }; */

  const handleSaveChanges = async () => {
    const imageToSave = { ...imagenBase64 };
    try {
      await imageService.createImageService(imageToSave);
      onSave();
      handleCloseSave();
      resetForm();
      showSuccessNotification();
    } catch (error) {
      console.error("Error creating image:", error);
    }
  };

  const handleFileChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
        const reader = new FileReader();
        reader.onload = () => {
            setImagenBase64(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(archivo);
    }
};

  const resetForm = () => {
    setNewImage({ url_image: "" });
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
        <Alert variant="success">Image saved successfully!</Alert>
      )}
      <Modal show={showSave} onHide={handleCloseSave}>
        <Modal.Header closeButton>
          <Modal.Title>New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formImageUpload">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            {imagenBase64 !== "" ? (
              <img
                src={`data:image/png;base64, ${imagenBase64}`}
                alt="Imagen del Artículo"
                width="140"
                height="150"
                className="rounded"
              />
            ) : (
              ""
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>
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
