import React, { useState, useEffect } from "react";
import CardProductDetail from "./CardProductDetail";
import * as getAProduct from '../../../services/ProductService';
import * as getAImages from '../../../services/ImageService'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct]  = useState();
  const [images, setImages]  = useState();
  const getProductDetail = async () => {
    const dataProduct = await getAProduct.getAProduct(id);
    const dataImages = await getAImages.getImagesById(id);
    setProduct(dataProduct.product);
    setImages(dataImages.images);
    // console.log(dataProduct.product)
    console.log(dataImages.images)
    // console.log(data.product)
    // console.log(data.images)
  }

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <div className="">
      <h2>Detalle del Producto</h2>
      { product ? (
        <CardProductDetail product={product} images={images}/>
      ): <p>Cargando...</p> }
    </div>
  );
};

export default ProductDetail;