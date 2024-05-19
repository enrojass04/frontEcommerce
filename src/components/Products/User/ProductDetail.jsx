import React, { useState, useEffect } from "react";
import CardProductDetail from "./CardProductDetail";
import * as getAProduct from '../../../services/ProductService';
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct]  = useState();
  const getProductDetail = async () => {
    const data = await getAProduct.getAProduct(id);
    setProduct(data.product);
  }

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <div className="">
      <h2>Detalle del Producto</h2>
      { product ? (
        <CardProductDetail product={product} />
      ): <p>Cargando...</p> }
    </div>
  );
};

export default ProductDetail;
