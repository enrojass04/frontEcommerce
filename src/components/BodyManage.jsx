import React, { useEffect, useState } from "react";
import { CardManageProduct } from "./CardManageProduct";
import * as productService from "../services/ProductService";
import { Link } from "react-router-dom";

function BodyManage() {
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
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="">
            <Link to="/product">Product</Link>
          </div>
          <div>
            <Link to='/user'>User</Link>
          </div>
          <div>
            <Link to='/category'>Category</Link>
          </div>
        </div>
        <div className="col-9">
          <div className=" d-flex justify-content-end">
            <button className="btn btn-primary me-5 mb-3">Add User</button>
          </div>
          <div className="">
            <div className="d-flex flex-column mt-3">
              {products?.map((product) => (
                <div key={product.id} className="mb-4">
                  <CardManageProduct key={product.id} product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyManage;
