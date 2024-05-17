import React, { useEffect, useState } from "react";
import { CardManageProduct } from "./CardManageProduct";
import * as productService from "../services/ProductService";

const ListManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const getProducts = async (page) => {
    const data = await productService.getAProductsPages(1);
    setProducts(data.products);
    setTotalPage(data.totalPages);
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

      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          {Array.from({ length: totalPage }, (_, index) => (
            <li className="mx-3" key={index + 1}>
              {index + 1}
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListManageProduct;
