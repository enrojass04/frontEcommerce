import React, { useEffect, useState } from "react";
import { CardManageProduct } from "./CardManageProduct";
import * as productService from "../services/ProductService";

const ListManageProduct = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const data = await productService.getProductsService();
      setProducts(data.products);
    };
  
    useEffect(() => {
      getProducts();
    }, []);

  return (
    <div>
      <div className="d-flex flex-column mt-3">
        {products?.map((product) => (
          <div key={product.id} className="mb-4">
            <CardManageProduct key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListManageProduct;
