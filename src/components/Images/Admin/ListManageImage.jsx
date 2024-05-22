import React, { useEffect, useState } from "react";
import { CardManageImage } from "./CardManageImage";
import * as imageService from "../../../services/ImageService";
import ButtonAdd from "../../ButtonAdd";
import ModalSave from "./ModalSave";

const ListManageImage = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSave, setShowSave] = useState(false);

  const getImages = async (page) => {
    const data = await imageService.getAImagesPages(page);
    setImages(data.images);
    setTotalPages(data.totalPages);
    setCurrentPage(data.currentPage);
  };

  useEffect(() => {
    getImages(currentPage);
  }, [currentPage]);

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSaveNewImage = () => {
    getImages(currentPage);
  };

  return (
    <div>
      <ButtonAdd onClick={() => setShowSave(true)} />
      <ModalSave
        showSave={showSave}
        handleCloseSave={() => setShowSave(false)}
        onSave={handleSaveNewImage}
      />
      <h1>Imágenes</h1>
      <div className="d-flex flex-column mt-5">
        {images?.map((image) => (
          <div key={image.id} className="mb-4">
            <CardManageImage key={image.id} image={image} />
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a className="page-link" href="#" onClick={handlePrevious}>
              Previous
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index + 1}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a className="page-link" href="#" onClick={handleNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListManageImage;
