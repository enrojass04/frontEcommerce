import React, { useState, useEffect } from "react";
import CardProductDetail from "./CardProductDetail";
import { getAProductWithImages } from '../../../services/ProductService'; // Ajustar la importación
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductDetail = async () => {
    try {
      const data = await getAProduct(id);
      setProduct(data);
    } catch (error) {
      console.error("Error obteniendo el producto:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      { loading ? (
        <p>Cargando...</p>
      ) : product ? (
        <CardProductDetail product={product} />
      ) : (
        <p>Error cargando el producto</p>
      )}
    </div>
  );
};

export default ProductDetail;
