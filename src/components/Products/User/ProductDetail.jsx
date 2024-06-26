import React, { useState, useEffect } from "react";
import CardProductDetail from "./CardProductDetail";
import * as getProduct from '../../../services/ProductService';
import * as getAImages from '../../../services/ImageService';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noImagesMessage, setNoImagesMessage] = useState("");


  const getProductDetail = async () => {
    try {
      const dataProduct = await getProduct.getAProduct(id);
      const dataImages = await getAImages.getImagesById(id);

      setProduct(dataProduct.product);

      if (dataImages.images && dataImages.images.length > 0) {
        setImages(dataImages.images);
      } else if (dataImages.message) {
        setNoImagesMessage(dataImages.message);
      }

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {product ? (
        <>
          {noImagesMessage && <p>{noImagesMessage}</p>}
          <CardProductDetail product={product} images={images} />
        </>
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </div>
  );
};

export default ProductDetail;
