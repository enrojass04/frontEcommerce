import React from 'react'

const CardProduct = ({ product }) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{product.id}</h5>
                    <h5 className="card-title">{product.name_product}</h5>
                    <p className="card-text">Price: ${product.price_product}</p>
                    <p className="card-text">Quantity: ${product.quantity_product}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct