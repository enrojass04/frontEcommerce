import React, { useEffect, useState } from 'react'
import CardProduct from '../User/CardProduct';
import * as productService from '../../../services/ProductService';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await productService.getProductsService();
        setProducts(data.products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    {products?.map(product => (
                        <div key={product.id} sm={12} md={6} lg={4} className="col-4 mb-4">
                            <CardProduct key={product.id} product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList