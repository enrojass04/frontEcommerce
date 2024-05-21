import React, { useState, useEffect } from "react";
import CardProductDetail from "./CardProductDetail";
import * as getAProduct from '../../../services/ProductService';
import * as getAImages from '../../../services/ImageService';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductDetail = async () => {
    try {
      const dataProduct = await getAProduct.getAProduct(id);
      const dataImages = await getAImages.getImagesById(id);
      setProduct(dataProduct.product);
      setImages(dataImages.images);
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
        <CardProductDetail product={product} images={images} />
      ) : (
        <p>No se encontró el producto.</p>
      )}
    </div>
  );
};

export default ProductDetail;