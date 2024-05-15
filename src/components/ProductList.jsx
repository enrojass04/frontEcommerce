import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct';
import * as productService from '../services/ProductService';

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
                {products?.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList